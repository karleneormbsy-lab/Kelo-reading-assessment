'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, CheckCircle } from 'lucide-react'
import { useAudio } from '@/hooks/useAudio'
import { useWordImages } from '@/hooks/useWordImage'
import ELLAudioToolbar from '@/components/ui/ELLAudioToolbar'
import type { WordBuildingContent } from '@/types'

interface Props {
  content: WordBuildingContent
  onComplete: (score: number) => void
}

export default function WordBuilder({ content, onComplete }: Props) {
  const [frame, setFrame]       = useState<string[]>([])
  const [found, setFound]       = useState<Set<string>>(new Set())
  const [feedback, setFeedback] = useState<string | null>(null)
  const [shake, setShake]       = useState(false)
  const [justFound, setJustFound] = useState<string | null>(null)

  const { speak, speaking, speed, setSpeed, stop } = useAudio({ speed: 'normal' })
  const { images } = useWordImages(content.target_words)

  const addLetter = (letter: string) => { setFrame(f => [...f, letter]); setFeedback(null) }
  const removeLast = () => setFrame(f => f.slice(0, -1))
  const clearFrame = () => setFrame([])

  const triggerShake = () => { setShake(true); setTimeout(() => setShake(false), 500) }

  const checkWord = () => {
    const word = frame.join('').toLowerCase()
    if (content.target_words.includes(word) && !found.has(word)) {
      const newFound = new Set([...found, word])
      setFound(newFound)
      setJustFound(word)
      setFeedback(`✅ "${word}"!`)
      speak(`${word}! Great job!`)
      setFrame([])
      setTimeout(() => setJustFound(null), 2500)
    } else if (found.has(word)) {
      setFeedback(`Already found "${word}"!`)
      triggerShake()
    } else {
      setFeedback(`"${word}" isn't a match. Try again!`)
      triggerShake()
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-lg mx-auto">
      <ELLAudioToolbar speaking={speaking} speed={speed} onSetSpeed={setSpeed} onStop={stop} />

      {/* Found words with images */}
      <div className="w-full">
        <p className="text-sm text-gray-500 mb-2 font-medium">
          Words Found: {found.size} / {content.target_words.length}
        </p>
        <div className="flex flex-wrap gap-3 min-h-[80px]">
          <AnimatePresence>
            {[...found].map(w => {
              const img = images[w]
              return (
                <motion.div
                  key={w}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                  onClick={() => speak(w)}
                >
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-green-300 shadow-sm">
                    {img
                      ? <img src={img.url} alt={w} className="w-full h-full object-cover" />
                      : <div className="absolute inset-0 flex items-center justify-center bg-green-50 text-lg">✓</div>
                    }
                  </div>
                  <span className="text-xs font-bold text-green-700">{w}</span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Image reveal when word just found */}
      <AnimatePresence>
        {justFound && images[justFound] && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-green-400 shadow-lg">
              <img src={images[justFound]!.url} alt={justFound} className="w-full h-full object-cover" />
            </div>
            <p className="text-xl font-display font-black text-green-600">{justFound}!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Word Frame */}
      <motion.div
        animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="flex gap-2 min-h-[64px] min-w-[220px] p-3 bg-amber-50 border-2 border-amber-300 rounded-2xl justify-center items-center"
      >
        {frame.length === 0 && <p className="text-amber-300 text-sm">Build a word here</p>}
        {frame.map((letter, i) => (
          <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="w-10 h-10 flex items-center justify-center bg-amber-400 text-white rounded-lg font-display font-black text-xl shadow"
          >
            {letter}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {feedback && (
          <motion.p key={feedback} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className={`text-sm font-bold ${feedback.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}
          >
            {feedback}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Letter Bank */}
      <div className="flex flex-wrap gap-2 justify-center p-4 bg-gray-50 rounded-2xl w-full">
        {content.letter_bank.map((letter, i) => (
          <button key={i} onClick={() => addLetter(letter)}
            className="px-4 py-2 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded-xl font-display font-bold text-lg border-2 border-brand-200 hover:border-brand-400 transition-all active:scale-95 shadow-sm"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={removeLast} disabled={!frame.length}
          className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium disabled:opacity-40 transition-colors"
        >
          ← Delete
        </button>
        <button onClick={clearFrame} disabled={!frame.length}
          className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-40"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <button onClick={checkWord} disabled={!frame.length}
          className="flex items-center gap-2 px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold disabled:opacity-40 transition-colors"
        >
          <CheckCircle className="w-4 h-4" /> Check
        </button>
      </div>

      {found.size >= Math.ceil(content.target_words.length * 0.6) && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          onClick={() => onComplete(Math.round((found.size / content.target_words.length) * 100))}
          className="mt-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-lg"
        >
          Continue →
        </motion.button>
      )}
    </div>
  )
}
