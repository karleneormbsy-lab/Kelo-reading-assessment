'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, CheckCircle } from 'lucide-react'
import { useWordImages } from '@/hooks/useWordImage'
import { useAudio } from '@/hooks/useAudio'

interface Props {
  words:       string[]
  phonogram?:  string
  onComplete:  (score: number) => void
}

type MatchState = 'idle' | 'correct' | 'wrong'

export default function PictureMatching({ words, phonogram, onComplete }: Props) {
  const { images, loading }           = useWordImages(words)
  const { speak, speakPhoneme }       = useAudio({ speed: 'slow' })

  // Shuffle word labels independently of image order
  const [imageOrder]                  = useState(() => [...words].sort(() => Math.random() - 0.5))
  const [labelOrder, setLabelOrder]   = useState(() => [...words].sort(() => Math.random() - 0.5))
  const [selected, setSelected]       = useState<{ image: string | null; label: string | null }>({ image: null, label: null })
  const [matched, setMatched]         = useState<Set<string>>(new Set())
  const [states, setStates]           = useState<Record<string, MatchState>>({})
  const [done, setDone]               = useState(false)
  const [attempts, setAttempts]       = useState(0)

  const selectImage = (word: string) => {
    if (matched.has(word)) return
    speak(word)
    setSelected(s => ({ ...s, image: s.image === word ? null : word }))
  }

  const selectLabel = useCallback((word: string) => {
    if (matched.has(word)) return
    const newSelected = { ...selected, label: selected.label === word ? null : word }
    setSelected(newSelected)

    // Check for match when both are selected
    if (newSelected.image && newSelected.label) {
      setAttempts(a => a + 1)
      const isCorrect = newSelected.image === newSelected.label
      const key = newSelected.image

      setStates(s => ({ ...s, [key]: isCorrect ? 'correct' : 'wrong' }))

      if (isCorrect) {
        speak(`${key}! That's right!`)
        const newMatched = new Set([...matched, key])
        setMatched(newMatched)
        setSelected({ image: null, label: null })

        if (newMatched.size === words.length) {
          setDone(true)
          const score = Math.round((words.length / Math.max(attempts + 1, words.length)) * 100)
          setTimeout(() => onComplete(Math.min(score, 100)), 1500)
        }
      } else {
        speak('Try again!')
        setTimeout(() => {
          setStates(s => ({ ...s, [key]: 'idle' }))
          setSelected({ image: null, label: null })
        }, 900)
      }
    }
  }, [selected, matched, words.length, attempts, speak, onComplete])

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">🎊</motion.div>
        <h2 className="text-2xl font-display font-bold">All matched!</h2>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Tap a <span className="font-bold text-brand-600">picture</span>, then tap the matching <span className="font-bold text-purple-600">word</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">{matched.size}/{words.length} matched</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left column — images */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide text-center">Pictures</p>
          {imageOrder.map(word => {
            const img    = images[word]
            const isMatched  = matched.has(word)
            const isSelected = selected.image === word
            const state  = states[word] ?? 'idle'

            return (
              <motion.button
                key={word}
                onClick={() => selectImage(word)}
                disabled={isMatched}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-2xl overflow-hidden aspect-square border-4 transition-all shadow-sm ${
                  isMatched       ? 'border-green-400 opacity-60 cursor-default' :
                  state === 'wrong' ? 'border-red-400'  :
                  isSelected      ? 'border-brand-500 shadow-lg shadow-brand-200' :
                  'border-gray-200 hover:border-brand-300'
                }`}
              >
                {loading || !img ? (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl">🖼️</div>
                ) : (
                  <Image src={img.url} alt={word} fill className="object-cover" unoptimized />
                )}
                {isMatched && (
                  <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                )}
                {isSelected && !isMatched && (
                  <div className="absolute inset-0 bg-brand-500/10 ring-4 ring-brand-500 ring-inset rounded-2xl" />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Right column — word labels */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide text-center">Words</p>
          {labelOrder.map(word => {
            const isMatched  = matched.has(word)
            const isSelected = selected.label === word

            // Determine visual state from selected image's state
            const imgState = selected.image && states[selected.image] === 'wrong' && selected.label === word
              ? 'wrong'
              : 'idle'

            return (
              <motion.button
                key={word}
                onClick={() => selectLabel(word)}
                disabled={isMatched}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl border-4 font-display font-black text-xl transition-all ${
                  isMatched     ? 'border-green-400 bg-green-50 text-green-600 cursor-default opacity-60' :
                  imgState === 'wrong' ? 'border-red-400 bg-red-50 text-red-500' :
                  isSelected    ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg' :
                  'border-gray-200 bg-white text-gray-800 hover:border-purple-300'
                }`}
              >
                <span>
                  {phonogram
                    ? word.split(new RegExp(`(${phonogram})`, 'gi')).map((part, i) =>
                        new RegExp(`^${phonogram}$`, 'i').test(part)
                          ? <span key={i} className="underline decoration-2 text-brand-600">{part}</span>
                          : <span key={i}>{part}</span>
                      )
                    : word}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); speak(word) }}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-gray-400" />
                </button>
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
