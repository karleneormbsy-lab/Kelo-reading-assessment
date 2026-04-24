import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { SectionResult } from '@/lib/placementData'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export interface PlacementAnalysis {
  recommended_level:   number
  recommended_lesson:  number
  confidence:          'high' | 'medium' | 'low'
  strengths:           string[]
  gaps:                string[]
  observations:        string
  next_steps:          string[]
  ell_notes?:          string
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    studentName,
    grade,
    results,
    wcpm,
    nativeLang,
    computedLevel,
  }: {
    studentName:    string
    grade:          string
    results:        SectionResult[]
    wcpm?:          number
    nativeLang?:    string
    computedLevel:  number
  } = body

  // Build a human-readable summary of section results
  const sectionSummary = results.map(r => {
    const sectionNames: Record<string, string> = {
      letter_names:   'Section A – Letter Names',
      letter_sounds:  'Section B – Letter Sounds',
      nonsense_words: 'Section C – Nonsense Words (Decoding)',
      real_words:     'Section D – Real Word Reading',
      passage:        'Section E – Oral Reading Fluency',
      spelling:       'Section F – Spelling Dictation',
    }
    const name    = sectionNames[r.sectionId] ?? r.sectionId
    const correct = r.responses.filter(x => x.correct).length
    const total   = r.responses.length
    const errors  = r.responses
      .filter(x => !x.correct)
      .map(x => `"${x.response}" instead of "${x.itemId.replace(/[a-z]{2}-\d+$/, '')} ${x.response}"`)
      .slice(0, 5)
      .join(', ')

    return `${name}: ${correct}/${total} correct (${r.score}%)${errors ? ` — error samples: ${errors}` : ''}${wcpm && r.sectionId === 'passage' ? ` — WCPM: ${wcpm}` : ''}`
  }).join('\n')

  const systemPrompt = `You are an expert reading specialist trained in structured literacy and the S.P.I.R.E. intervention program.
Your job is to analyze a student's placement test results and recommend the best starting point for instruction.

S.P.I.R.E. Levels:
- Level 1: Short vowels, CVC words, basic consonants
- Level 2: Consonant digraphs (sh/ch/th/wh), double endings (ff/ll/ss/ck), consonant blends
- Level 3: Long vowels (silent e), vowel teams (ai/ay/ea/ee/oa/ow), r-controlled vowels
- Level 4: Open/closed syllables, more vowel teams, suffixes (-ing/-ed/-er)
- Level 5: Prefixes, suffixes, Greek/Latin roots
- Level 6: Multisyllabic words, advanced fluency

Fluency benchmarks (WCPM):
- Level 1 entry: <40 WCPM
- Level 2 entry: 40–65 WCPM
- Level 3 entry: 65–90 WCPM
- Level 4 entry: 90–110 WCPM

Rules:
- Recommend the HIGHEST level where the student showed ≥70% accuracy
- If a student passes reading but fails spelling at a level, start them at that level
- Never recommend a level where the student scored below 60% on BOTH decoding and spelling
- Be warm, encouraging, and specific in your analysis
- Return ONLY valid JSON — no markdown, no explanation outside the JSON`

  const userPrompt = `Student: ${studentName}, Grade ${grade}${nativeLang && nativeLang !== 'en-US' ? `, Native Language: ${nativeLang}` : ''}
Algorithm recommended level: ${computedLevel}

Test Results:
${sectionSummary}

Please analyze these results and return a JSON object with exactly these fields:
{
  "recommended_level": <number 1-6>,
  "recommended_lesson": <number 1-5, which lesson to start within the level>,
  "confidence": "<high|medium|low>",
  "strengths": ["<specific strength 1>", "<specific strength 2>", "<specific strength 3>"],
  "gaps": ["<specific gap 1>", "<specific gap 2>", "<specific gap 3>"],
  "observations": "<2-3 sentences of nuanced clinical observation about this student's reading profile>",
  "next_steps": ["<actionable instruction tip 1>", "<actionable instruction tip 2>", "<actionable instruction tip 3>"],
  "ell_notes": "<specific note if student is an ELL learner, or null>"
}`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,   // low temp for clinical consistency
    })

    const analysis: PlacementAnalysis = JSON.parse(
      completion.choices[0].message.content ?? '{}'
    )

    // Store in Supabase assessments table (via service role)
    // await supabase.from('assessments').insert({ ... })

    return NextResponse.json(analysis)
  } catch (err) {
    console.error('Placement analysis error:', err)
    // Return a rule-based fallback if AI fails
    const fallback: PlacementAnalysis = {
      recommended_level:  computedLevel,
      recommended_lesson: 1,
      confidence:         'medium',
      strengths:          ['Completed the placement assessment', 'Demonstrated phonics knowledge'],
      gaps:               ['Further assessment recommended'],
      observations:       `Based on test results, starting at Level ${computedLevel} is recommended. A teacher review is suggested for a more nuanced placement.`,
      next_steps:         [
        `Begin with Level ${computedLevel}, Lesson 1`,
        'Review phonogram cards daily for 5 minutes',
        'Monitor progress after the first 3 lessons',
      ],
    }
    return NextResponse.json(fallback)
  }
}
