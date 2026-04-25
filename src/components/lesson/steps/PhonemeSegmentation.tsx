'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, RotateCcw, CheckCircle } from 'lucide-react'
import type { PhonologicalAwarenessContent, PhonemeWord } from '@/types'

interface Props {
  content: PhonologicalAwarenessContent
  onComplete: (score: number) => void
}

function DraggableTile({ id, label, inBox }: { id: string; label: string; inBox?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id })
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        zIndex: isDragging ? 50 : undefined,
        opacity: isDragging ? 0.5 : 1,
      }}
      className={`
        select-none cursor-grab active:cursor-grabbing touch-none
        px-5 py-3 rounded-xl font-display font-bold text-xl shadow-md
        transition-colors
        ${inBox
          ? 'bg-brand-600 text-white border-2 border-brand-700'
          : 'bg-white border-2 border-brand-300 text-brand-700 hover:border-brand-500'}
      `}
    >
      {label}
    </div>
  )
}

function DroppableZone({ id, children, active, result }: {
  id: string
  children: React.ReactNode
  active?: boolean
  result?: 'correct' | 'wrong' | null
}) {
  const { setNodeRef, isOver } = useDroppable({ id })
  const border =
    result === 'correct' ? 'border-green-400 bg-green-50' :
    result === 'wrong'   ? 'border-red-400 bg-red-50' :
    isOver               ? 'border-brand-400 bg-brand-50' :
                           'border-gray-300 bg-gray-50'

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-wrap gap-3 p-4 min-h-[80px] border-2 border-dashed rounded-2xl w-full justify-center items-center transition-colors ${border}`}
    >
      {children}
    </div>
  )
}

export default function PhonemeSegmentation({ content, onComplete }: Props) {
  const [wordIndex, setWordIndex] = useState(0)
  const [placed, setPlaced]       = useState<string[]>([])
  const [bank, setBank]           = useState<string[]>([])
  const [result, setResult]       = useState<'correct' | 'wrong' | null>(null)
  const [scores, setScores]       = useState<boolean[]>([])
  const [done, setDone]           = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor,   { activationConstraint: { delay: 100, tolerance: 5 } }),
  )

  const words   = content.words
  const current: PhonemeWord = words[wordIndex]

  const initWord = useCallback((idx: number) => {
    const shuffled = [...words[idx].phonemes].sort(() => Math.random() - 0.5)
    setBank(shuffled.map((p, i) => `${p}__${i}`))
    setPlaced([])
    setResult(null)
  }, [words])

  useEffect(() => { initWord(0) }, [initWord])

  const speak = (text: string) => {
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate = 0.7
    window.speechSynthesis.speak(utt)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    const id = String(active.id)

    if (over.id === 'drop-zone' && bank.includes(id)) {
      setBank(b => b.filter(x => x !== id))
      setPlaced(p => [...p, id])
    } else if (over.id === 'bank-zone' && placed.includes(id)) {
      setPlaced(p => p.filter(x => x !== id))
      setBank(b => [...b, id])
    }
  }

  const checkAnswer = () => {
    const placedPhonemes = placed.map(id => id.split('__')[0])
    const isCorrect      = JSON.stringify(placedPhonemes) === JSON.stringify(current.phonemes)
    setResult(isCorrect ? 'correct' : 'wrong')
    const newScores = [...scores, isCorrect]
    setScores(newScores)

    if (isCorrect) {
      speak(`${current.word}! Great job!`)
      setTimeout(() => {
        if (wordIndex + 1 < words.length) {
          const next = wordIndex + 1
          setWordIndex(next)
          initWord(next)
        } else {
          setDone(true)
          const score = Math.round((newScores.filter(Boolean).length / newScores.length) * 100)
          setTimeout(() => onComplete(score), 1200)
        }
      }, 1200)
    }
  }

  if (done) {
    const correct = scores.filter(Boolean).length
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-6xl">🎊</div>
        <h2 className="text-2xl font-display font-bold">{correct}/{words.length} correct!</h2>
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">

        {/* Progress dots */}
        <div className="flex gap-2">
          {words.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-colors ${
              i < wordIndex ? 'bg-green-400' : i === wordIndex ? 'bg-brand-500' : 'bg-gray-200'
            }`} />
          ))}
        </div>

        {/* Word + speaker */}
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-display font-black text-gray-800 tracking-wide">
            {current.word}
          </h2>
          <button onClick={() => speak(current.word)} className="p-2 rounded-full bg-brand-100 hover:bg-brand-200 text-brand-600 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-500 text-sm">Drag each sound into the box below</p>

        {/* Drop zone */}
        <DroppableZone id="drop-zone" result={result}>
          {placed.length === 0
            ? <p className="text-gray-400 text-sm">Drop sounds here</p>
            : placed.map(id => <DraggableTile key={id} id={id} label={id.split('__')[0]} inBox />)
          }
        </DroppableZone>

        {/* Feedback */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`font-bold text-lg ${result === 'correct' ? 'text-green-600' : 'text-red-500'}`}
            >
              {result === 'correct' ? '✅ Correct!' : `❌ Try again! Answer: ${current.phonemes.join(' – ')}`}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bank zone */}
        <DroppableZone id="bank-zone">
          {bank.length === 0
            ? <p className="text-gray-400 text-sm italic">All sounds placed!</p>
            : bank.map(id => <DraggableTile key={id} id={id} label={id.split('__')[0]} />)
          }
        </DroppableZone>

        {/* Controls */}
        <div className="flex gap-3">
          <button onClick={() => initWord(wordIndex)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors">
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
