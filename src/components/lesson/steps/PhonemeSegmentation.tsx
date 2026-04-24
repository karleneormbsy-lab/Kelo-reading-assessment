'use client'

import { useState, useCallback } from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, RotateCcw, CheckCircle } from 'lucide-react'
import type { PhonologicalAwarenessContent, PhonemeWord } from '@/types'

interface Props {
  content: PhonologicalAwarenessContent
  onComplete: (score: number) => void
}

// Draggable phoneme tile
function PhonemeTile({ id, label, inBox }: { id: string; label: string; inBox?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`
        select-none cursor-grab active:cursor-grabbing
        px-4 py-2 rounded-xl font-display font-bold text-lg shadow-md
        transition-colors
        ${isDragging ? 'opacity-50 scale-110' : ''}
        ${inBox
          ? 'bg-brand-600 text-white'
          : 'bg-white border-2 border-brand-300 text-brand-700 hover:border-brand-500'}
      `}
    >
      {label}
    </div>
  )
}

export default function PhonemeSegmentation({ content, onComplete }: Props) {
  const [wordIndex, setWordIndex]         = useState(0)
  const [placed, setPlaced]               = useState<string[]>([])
  const [bank, setBank]                   = useState<string[]>([])
  const [result, setResult]               = useState<'correct' | 'wrong' | null>(null)
  const [scores, setScores]               = useState<boolean[]>([])
  const [done, setDone]                   = useState(false)

  const sensors = useSensors(useSensor(PointerSensor))
  const words   = content.words
  const current: PhonemeWord = words[wordIndex]

  // Reset bank when word changes
  const initWord = useCallback((idx: number) => {
    const shuffled = [...words[idx].phonemes].sort(() => Math.random() - 0.5)
    setBank(shuffled.map((p, i) => `${p}-${i}`))
    setPlaced([])
    setResult(null)
  }, [words])

  // Initialize on mount
  useState(() => { initWord(0) })

  const speak = (text: string) => {
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate = 0.7
    window.speechSynthesis.speak(utt)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    const id = active.id as string

    if (over.id === 'drop-zone') {
      setBank(b => b.filter(x => x !== id))
      setPlaced(p => [...p, id])
    } else if (over.id === 'bank-zone') {
      setPlaced(p => p.filter(x => x !== id))
      setBank(b => [...b, id])
    }
  }

  const checkAnswer = () => {
    const placedPhonemes = placed.map(id => id.split('-')[0])
    const isCorrect      = JSON.stringify(placedPhonemes) === JSON.stringify(current.phonemes)
    setResult(isCorrect ? 'correct' : 'wrong')
    const newScores = [...scores, isCorrect]
    setScores(newScores)

    if (isCorrect) {
      speak(`${current.word}! Great job!`)
      setTimeout(() => {
        if (wordIndex + 1 < words.length) {
          setWordIndex(i => i + 1)
          initWord(wordIndex + 1)
        } else {
          setDone(true)
          const score = Math.round((newScores.filter(Boolean).length / newScores.length) * 100)
          setTimeout(() => onComplete(score), 1500)
        }
      }, 1200)
    }
  }

  if (done) {
    const correct = scores.filter(Boolean).length
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-6xl">🎊</div>
        <h2 className="text-2xl font-display font-bold">
          {correct}/{words.length} correct!
        </h2>
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
        {/* Progress dots */}
        <div className="flex gap-2">
          {words.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < wordIndex ? 'bg-green-400' :
                i === wordIndex ? 'bg-brand-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Word display */}
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-display font-black text-gray-800 tracking-wide">
            {current.word}
          </h2>
          <button
            onClick={() => speak(current.word)}
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-500 text-sm">Drag each sound into the boxes below</p>

        {/* Drop zone — boxes for each phoneme */}
        <div
          id="drop-zone"
          className={`flex gap-3 p-4 min-h-[80px] bg-gray-50 border-2 border-dashed rounded-2xl w-full justify-center transition-colors ${
            result === 'correct' ? 'border-green-400 bg-green-50' :
            result === 'wrong'   ? 'border-red-400 bg-red-50' :
            'border-gray-300'
          }`}
        >
          {placed.length === 0 && (
            <p className="text-gray-400 self-center text-sm">Drop sounds here</p>
          )}
          {placed.map(id => (
            <PhonemeTile key={id} id={id} label={id.split('-')[0]} inBox />
          ))}
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`font-bold text-lg ${result === 'correct' ? 'text-green-600' : 'text-red-500'}`}
            >
              {result === 'correct' ? '✅ Correct!' : `❌ Try again! (${current.phonemes.join(' - ')})`}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bank zone */}
        <div
          id="bank-zone"
          className="flex flex-wrap gap-3 p-4 bg-blue-50 rounded-2xl w-full min-h-[72px] justify-center"
        >
          {bank.map(id => (
            <PhonemeTile key={id} id={id} label={id.split('-')[0]} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => initWord(wordIndex)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button
            onClick={checkAnswer}
            disabled={placed.length === 0}
            className="flex items-center gap-2 px-6 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold disabled:opacity-40 transition-colors"
          >
            <CheckCircle className="w-4 h-4" /> Check
          </button>
        </div>
      </div>
    </DndContext>
  )
}
