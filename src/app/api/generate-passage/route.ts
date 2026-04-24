import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const { phonogram, level, wordCount = 80 } = await req.json()

  if (!phonogram || !level) {
    return NextResponse.json({ error: 'phonogram and level are required' }, { status: 400 })
  }

  const systemPrompt = `You are an expert structured literacy author who writes decodable reading passages for early readers.
Rules:
- Use ONLY words that follow the target phonogram or previously taught phonics patterns
- Keep sentences short (4–8 words), natural, and engaging
- Use high-frequency/sight words sparingly (the, a, I, is, was, etc.)
- Target reading level: Grade ${level === 1 ? 'K-1' : level === 2 ? '1-2' : '2-3'}
- The story must have a clear beginning, middle, and end
- Be joyful, inclusive, and relatable for children ages 5–9`

  const userPrompt = `Write a decodable reading passage of about ${wordCount} words for early readers.
Target phonogram: "${phonogram}"
The passage must heavily feature words containing "${phonogram}".
Include a short title.
Format: Return JSON with { title: string, body: string, phonogram_words: string[] }`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    })

    const result = JSON.parse(completion.choices[0].message.content ?? '{}')
    return NextResponse.json(result)
  } catch (err) {
    console.error('OpenAI error:', err)
    return NextResponse.json({ error: 'Failed to generate passage' }, { status: 500 })
  }
}
