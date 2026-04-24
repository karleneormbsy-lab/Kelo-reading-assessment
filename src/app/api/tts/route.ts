import { NextResponse } from 'next/server'

// TTS is handled client-side via the Web Speech API (useAudio.ts → speak()).
// This stub returns 501 so the hook's fallback kicks in automatically.
export async function POST() {
  return NextResponse.json(
    { error: 'Server TTS not available — browser speech is active' },
    { status: 501 }
  )
}
