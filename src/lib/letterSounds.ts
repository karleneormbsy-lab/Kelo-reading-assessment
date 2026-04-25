// Letter sound audio file registry
// Place MP3 files in /public/sounds/phonograms/
// e.g. /public/sounds/phonograms/sh.mp3
// Until you add real recordings, everything falls back to Web Speech API TTS

const RECORDED_SOUNDS: Record<string, string> = {
  // Uncomment lines below as you add real MP3 recordings:
  // 'sh': '/sounds/phonograms/sh.mp3',
  // 'ch': '/sounds/phonograms/ch.mp3',
  // 'th': '/sounds/phonograms/th.mp3',
  // 'wh': '/sounds/phonograms/wh.mp3',
  // 'a':  '/sounds/phonograms/short-a.mp3',
  // 'e':  '/sounds/phonograms/short-e.mp3',
  // 'i':  '/sounds/phonograms/short-i.mp3',
  // 'o':  '/sounds/phonograms/short-o.mp3',
  // 'u':  '/sounds/phonograms/short-u.mp3',
}

export function getLetterSoundPath(grapheme: string): string | null {
  return RECORDED_SOUNDS[grapheme.toLowerCase()] ?? null
}

export function hasLetterSound(grapheme: string): boolean {
  return grapheme.toLowerCase() in RECORDED_SOUNDS
}
