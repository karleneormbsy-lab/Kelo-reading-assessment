import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are an expert structured literacy author who writes decodable reading passages for early readers.
Rules:
- Use ONLY words that follow the target phonogram or previously taught phonics patterns
- Keep sentences short (4–8 words), natural, and engaging
- Use high-frequency/sight words sparingly (the, a, I, is, was, etc.)
- The story must have a clear beginning, middle, and end
- Be joyful, inclusive, and relatable for children ages 5–9
- Return ONLY valid JSON — no markdown fences, no explanation`

export async function POST(req: NextRequest) {
  const { phonogram, level, wordCount = 80 } = await req.json()

  if (!phonogram || !level) {
    return NextResponse.json({ error: 'phonogram and level are required' }, { status: 400 })
  }

  const grade = level === 1 ? 'K-1' : level === 2 ? '1-2' : '2-3'

  try {
    const message = await anthropic.messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 1024,
      thinking: { type: 'adaptive' },
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content: `Write a decodable reading passage of about ${wordCount} words for early readers (Grade ${grade}).
Target phonogram: "${phonogram}"
The passage must heavily feature words containing "${phonogram}".
Include a short title.
Return JSON: { "title": string, "body": string, "phonogram_words": string[] }`,
        },
      ],
    })

    const text = message.content.find(b => b.type === 'text')?.text ?? '{}'
    const result = JSON.parse(text)
    return NextResponse.json(result)
  } catch (err) {
    console.error('Claude error:', err)
    return NextResponse.json({ error: 'Failed to generate passage' }, { status: 500 })
  }
}
