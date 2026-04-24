'use client'

import { useCallback, useRef, useState } from 'react'

export type AudioSpeed = 'slow' | 'normal' | 'fast'

const SPEED_MAP: Record<AudioSpeed, number> = {
  slow:   0.55,
  normal: 0.85,
  fast:   1.1,
}

interface UseAudioOptions {
  speed?: AudioSpeed
  lang?: string       // BCP-47 e.g. 'es-ES', 'ht', 'fr-FR'
}

interface WordHighlight {
  wordIndex: number
  word: string
}

export function useAudio(options: UseAudioOptions = {}) {
  const [speaking, setSpeaking]           = useState(false)
  const [speed, setSpeed]                 = useState<AudioSpeed>(options.speed ?? 'normal')
  const [highlighted, setHighlighted]     = useState<WordHighlight | null>(null)
  const utteranceRef                      = useRef<SpeechSynthesisUtterance | null>(null)
  const audioRef                          = useRef<HTMLAudioElement | null>(null)

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    audioRef.current?.pause()
    setSpeaking(false)
    setHighlighted(null)
  }, [])

  // ── Speak plain text (TTS via Web Speech API) ──────────────────
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === 'undefined') return
    window.speechSynthesis.cancel()
    const utt     = new SpeechSynthesisUtterance(text)
    utt.rate      = SPEED_MAP[speed]
    utt.lang      = options.lang ?? 'en-US'
    utt.onstart   = () => setSpeaking(true)
    utt.onend     = () => { setSpeaking(false); onEnd?.() }
    utt.onerror   = () => setSpeaking(false)
    utteranceRef.current = utt
    window.speechSynthesis.speak(utt)
  }, [speed, options.lang])

  // ── Speak word-by-word with per-word callbacks ──────────────────
  const speakWithHighlight = useCallback((
    words: string[],
    onWord?: (index: number, word: string) => void,
    onEnd?: () => void,
  ) => {
    if (typeof window === 'undefined') return
    window.speechSynthesis.cancel()
    let idx = 0

    const next = () => {
      if (idx >= words.length) {
        setSpeaking(false)
        setHighlighted(null)
        onEnd?.()
        return
      }
      const word = words[idx]
      const utt  = new SpeechSynthesisUtterance(word)
      utt.rate   = SPEED_MAP[speed] * 0.9   // slightly slower for highlight mode
      utt.lang   = options.lang ?? 'en-US'
      utt.onstart = () => {
        setSpeaking(true)
        setHighlighted({ wordIndex: idx, word })
        onWord?.(idx, word)
      }
      utt.onend = () => { idx++; next() }
      window.speechSynthesis.speak(utt)
    }
    next()
  }, [speed, options.lang])

  // ── Speak via OpenAI TTS (higher quality, fetches audio blob) ──
  const speakOpenAI = useCallback(async (
    text: string,
    voice: 'alloy' | 'nova' | 'shimmer' | 'echo' = 'nova',
    onEnd?: () => void,
  ) => {
    try {
      const res  = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice, speed: SPEED_MAP[speed] }),
      })
      if (!res.ok) throw new Error('TTS request failed')
      const blob = await res.blob()
      const url  = URL.createObjectURL(blob)
      const audio = new Audio(url)
      audioRef.current = audio
      audio.onplay  = () => setSpeaking(true)
      audio.onended = () => { setSpeaking(false); URL.revokeObjectURL(url); onEnd?.() }
      audio.onerror = () => { setSpeaking(false); URL.revokeObjectURL(url) }
      await audio.play()
    } catch {
      // fallback to browser TTS
      speak(text, onEnd)
    }
  }, [speed, speak])

  // ── Speak a phoneme sound slowly ───────────────────────────────
  const speakPhoneme = useCallback((phoneme: string) => {
    if (typeof window === 'undefined') return
    window.speechSynthesis.cancel()
    // Spell out letter names for single letters, say the sound for digraphs
    const utt  = new SpeechSynthesisUtterance(phoneme)
    utt.rate   = 0.5
    utt.pitch  = 1.1
    utt.lang   = 'en-US'
    window.speechSynthesis.speak(utt)
  }, [])

  return {
    speak,
    speakWithHighlight,
    speakOpenAI,
    speakPhoneme,
    stop,
    speaking,
    speed,
    setSpeed,
    highlighted,
  }
}
