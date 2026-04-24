import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const { text, voice = 'nova', speed = 0.85 } = await req.json()

  if (!text) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 })
  }

  try {
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice,
      input: text,
      speed: Math.max(0.25, Math.min(4.0, speed)),
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())
    return new NextResponse(buffer, {
      headers: {
        'Content-Type':  'audio/mpeg',
        'Cache-Control': 'public, max-age=86400', // cache 24h — same word = same audio
      },
    })
  } catch (err) {
    console.error('TTS error:', err)
    return NextResponse.json({ error: 'TTS generation failed' }, { status: 500 })
  }
}
