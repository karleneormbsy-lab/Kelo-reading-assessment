'use client'

import { useCallback, useRef, useState } from 'react'
import { getLetterSoundPath } from '@/lib/letterSounds'

export type AudioSpeed = 'slow' | 'normal' | 'fast'

const SPEED_MAP: Record<AudioSpeed, number> = {
  slow:   0.75,
  normal: 1.1,
  fast:   1.6,
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

    // Handle silent-e patterns like a_e, i_e, o_e, u_e
    const silentEMap: Record<string, string> = {
      'a_e': 'long a', 'i_e': 'long i', 'o_e': 'long o',
      'u_e': 'long u', 'e_e': 'long e',
    }
    const clean = phoneme.replace(/\//g, '').trim()
    const text  = silentEMap[clean] ?? clean.replace(/_/g, ' ')

    const utt  = new SpeechSynthesisUtterance(text)
    utt.rate   = 0.5
    utt.pitch  = 1.1
    utt.lang   = 'en-US'
    window.speechSynthesis.speak(utt)
  }, [])

  // ── Play real recorded letter sound (MP3), fall back to speakPhoneme ──
  const playLetterSound = useCallback((grapheme: string, onEnd?: () => void) => {
    if (typeof window === 'undefined') return
    const path = getLetterSoundPath(grapheme)
    if (path) {
      // Stop any current speech
      window.speechSynthesis.cancel()
      audioRef.current?.pause()
      const audio = new Audio(path)
      audioRef.current = audio
      audio.onplay  = () => setSpeaking(true)
      audio.onended = () => { setSpeaking(false); onEnd?.() }
      audio.onerror = () => {
        // File not found or can't play — fall back to TTS
        setSpeaking(false)
        speakPhoneme(grapheme)
        onEnd?.()
      }
      audio.play().catch(() => {
        speakPhoneme(grapheme)
        onEnd?.()
      })
    } else {
      // No recorded file — use Web Speech API
      speakPhoneme(grapheme)
    }
  }, [speakPhoneme])

  return {
    speak,
    speakWithHighlight,
    speakOpenAI,
    speakPhoneme,
    playLetterSound,
    stop,
    speaking,
    speed,
    setSpeed,
    highlighted,
  }
}
