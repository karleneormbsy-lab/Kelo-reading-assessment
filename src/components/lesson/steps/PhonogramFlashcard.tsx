'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, Volume2 } from 'lucide-react'
import { useAudio } from '@/hooks/useAudio'
import { hasLetterSound } from '@/lib/letterSounds'
import { useWordImage } from '@/hooks/useWordImage'
import ELLAudioToolbar from '@/components/ui/ELLAudioToolbar'
import type { PhonogramReviewContent, Flashcard } from '@/types'

interface Props {
  content: PhonogramReviewContent
  onComplete: (score: number) => void
}

function FlashcardBack({ card }: { card: Flashcard }) {
  const { image, loading } = useWordImage(card.example_word)
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-gradient-to-br from-purple-600 to-violet-800 text-white gap-2 p-4"
      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
    >
      {/* Example image */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {image && !loading && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image.url} alt={card.example_word} className="w-full h-full object-cover" />
        )}
        {!image && !loading && (
          <div className="absolute inset-0 flex items-center justify-center text-2xl">🖼️</div>
        )}
      </div>
      <p className="text-3xl font-display font-bold">{card.phoneme}</p>
      <p className="text-xl font-display">{card.example_word}</p>
      {card.back_text && (
        <p className="text-purple-200 text-xs text-center px-2">{card.back_text}</p>
      )}
    </div>
  )
}

export default function PhonogramFlashcard({ content, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped]       = useState(false)
  const [known, setKnown]               = useState<Set<string>>(new Set())
  const [showSummary, setShowSummary]   = useState(false)

  const { speak, playLetterSound, speaking, speed, setSpeed, stop } = useAudio({ speed: 'slow' })

  const card  = content.flashcards[currentIndex]
  const total = content.flashcards.length

  const handleFlip = () => {
    setIsFlipped(f => !f)
    if (!isFlipped) playLetterSound(card.grapheme)
  }

  const navigate = (dir: 'next' | 'prev') => {
    setIsFlipped(false)
    setCurrentIndex(i =>
      dir === 'next' ? Math.min(i + 1, total - 1) : Math.max(i - 1, 0)
    )
  }

  const markKnown = () => {
    setKnown(prev => new Set([...prev, card.id]))
    if (currentIndex < total - 1) navigate('next')
    else setShowSummary(true)
  }

  if (showSummary) {
    const score = Math.round((known.size / total) * 100)
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">
          {known.size === total ? '🎉' : '⭐'}
        </motion.div>
        <h2 className="text-2xl font-display font-bold">
          You knew {known.size} of {total} phonograms!
        </h2>
        <div className="flex gap-2 flex-wrap justify-center">
          {content.flashcards.map(fc => (
            <span key={fc.id} className={`px-3 py-1.5 rounded-full text-sm font-bold ${known.has(fc.id) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {fc.grapheme} {known.has(fc.id) ? '✓' : '✗'}
            </span>
          ))}
        </div>
        <button onClick={() => onComplete(score)} className="px-8 py-3 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-colors">
          Continue →
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {/* ELL toolbar */}
      <ELLAudioToolbar
        speaking={speaking}
        speed={speed}
        onSetSpeed={setSpeed}
        onStop={stop}
        onReadPage={() => speak(`${card.grapheme} makes the ${card.phoneme} sound, as in ${card.example_word}`)}
      />

      {/* Progress */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{currentIndex + 1} of {total}</span>
          <span>{known.size} known ✓</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* Flashcard */}
      <div className="relative w-72 h-56 cursor-pointer" style={{ perspective: '1000px' }} onClick={handleFlip}>
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {hasLetterSound(card.grapheme) && (
              <span className="absolute top-3 right-3 bg-white/20 rounded-full px-2 py-0.5 text-xs flex items-center gap-1">
                <Volume2 className="w-3 h-3" /> recorded
              </span>
            )}
            <p className="text-7xl font-display font-black">
              {card.grapheme.replace(/_e\b/g, '•e')}
            </p>
            <p className="mt-2 text-brand-200 text-sm">Tap to hear the sound</p>
          </div>

          {/* Back — with image */}
          <FlashcardBack card={card} />
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('prev')} disabled={currentIndex === 0} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => playLetterSound(card.grapheme)}
          title="Hear the letter sound"
          className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition-colors"
        >
          <Volume2 className="w-5 h-5" />
        </button>
        <button onClick={markKnown} className="flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-colors">
          <Check className="w-4 h-4" /> I know it!
        </button>
        <button onClick={() => navigate('next')} disabled={currentIndex === total - 1} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-400 text-xs">Tap the card to flip · Hear the sound · Mark if you know it</p>
    </div>
  )
}
