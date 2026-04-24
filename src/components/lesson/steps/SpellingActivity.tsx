'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useAudio } from '@/hooks/useAudio'
import { useWordImages } from '@/hooks/useWordImage'
import ELLAudioToolbar from '@/components/ui/ELLAudioToolbar'
import type { SpellingContent } from '@/types'

interface Props {
  content: SpellingContent
  onComplete: (score: number) => void
}

type WordState = 'waiting' | 'correct' | 'wrong'

export default function SpellingActivity({ content, onComplete }: Props) {
  const [index, setIndex]               = useState(0)
  const [input, setInput]               = useState('')
  const [state, setState]               = useState<WordState>('waiting')
  const [results, setResults]           = useState<{ word: string; correct: boolean }[]>([])
  const [done, setDone]                 = useState(false)
  const [sentenceShown, setSentenceShown] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)
  const inputRef                        = useRef<HTMLInputElement>(null)

  const { speak, speakOpenAI, speaking, speed, setSpeed, stop } = useAudio({ speed: 'slow' })
  const { images } = useWordImages(content.words.map(w => w.word))

  const current = content.words[index]

  useEffect(() => {
    if (!done) {
      setState('waiting')
      setInput('')
      setSentenceShown(false)
      setImageVisible(false)
      inputRef.current?.focus()
    }
  }, [index, done])

  const playWord = () => {
    speakOpenAI(current.word, 'nova')
    setImageVisible(true)
  }

  const playSentence = () => {
    speakOpenAI(current.use_in_sentence, 'nova')
    setSentenceShown(true)
  }

  const checkSpelling = () => {
    const trimmed = input.trim().toLowerCase()
    const correct = trimmed === current.word.toLowerCase()
    setState(correct ? 'correct' : 'wrong')
    const newResults = [...results, { word: current.word, correct }]
    setResults(newResults)

    if (correct) speakOpenAI('Correct! Wonderful!')
    else speakOpenAI(`The correct spelling is ${current.word}`)

    setTimeout(() => {
      if (index + 1 < content.words.length) setIndex(i => i + 1)
      else {
        setDone(true)
        const score = Math.round((newResults.filter(r => r.correct).length / newResults.length) * 100)
        setTimeout(() => onComplete(score), 2000)
      }
    }, 1800)
  }

  if (done) {
    const correct = results.filter(r => r.correct).length
    return (
      <div className="flex flex-col items-center gap-6 py-8">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">
          {correct === results.length ? '🏆' : '📝'}
        </motion.div>
        <h2 className="text-2xl font-display font-bold">{correct}/{results.length} correct!</h2>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {results.map((r, i) => {
            const img = images[r.word]
            return (
              <div key={i} className={`flex items-center gap-3 px-4 py-2 rounded-xl ${r.correct ? 'bg-green-50' : 'bg-red-50'}`}>
                {img && (
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={img.url} alt={r.word} fill className="object-cover" unoptimized />
                  </div>
                )}
                <span className={r.correct ? 'text-green-500' : 'text-red-500'}>{r.correct ? '✓' : '✗'}</span>
                <span className="font-bold text-gray-700">{r.word}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const currentImage = images[current.word]

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
      <ELLAudioToolbar speaking={speaking} speed={speed} onSetSpeed={setSpeed} onStop={stop} />

      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Word {index + 1} of {content.words.length}</span>
          <span>{results.filter(r => r.correct).length} correct</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-brand-500 rounded-full transition-all" style={{ width: `${(index / content.words.length) * 100}%` }} />
        </div>
      </div>

      <div className="w-full bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col items-center gap-4">
        {/* Image reveal */}
        <AnimatePresence>
          {imageVisible && currentImage && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-brand-200 shadow-md"
            >
              <Image src={currentImage.url} alt={current.word} fill className="object-cover" unoptimized />
            </motion.div>
          )}
          {imageVisible && !currentImage && (
            <div className="w-32 h-32 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl">🖼️</div>
          )}
        </AnimatePresence>

        <div className="flex gap-3">
          <button onClick={playWord}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded-2xl font-bold transition-colors"
          >
            🔊 Hear Word
          </button>
          <button onClick={playSentence}
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-2xl font-medium text-sm transition-colors"
          >
            Sentence
          </button>
        </div>

        <AnimatePresence>
          {sentenceShown && (
            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              className="text-gray-500 text-sm italic text-center"
            >
              "{current.use_in_sentence}"
            </motion.p>
          )}
        </AnimatePresence>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && input.length > 0 && checkSpelling()}
          disabled={state !== 'waiting'}
          placeholder="Type your spelling..."
          className={`w-full text-center text-2xl font-display font-bold py-3 px-4 rounded-2xl border-2 outline-none transition-colors ${
            state === 'correct' ? 'border-green-400 bg-green-50 text-green-700' :
            state === 'wrong'   ? 'border-red-400 bg-red-50 text-red-600' :
            'border-gray-200 bg-gray-50 focus:border-brand-400 text-gray-800'
          }`}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />

        <AnimatePresence>
          {state === 'correct' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">✅ Correct!</motion.p>}
          {state === 'wrong'   && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-bold">✗ It's: <span className="underline">{current.word}</span></motion.p>}
        </AnimatePresence>
      </div>

      <button
        onClick={checkSpelling}
        disabled={!input.length || state !== 'waiting'}
        className="w-full flex items-center justify-center gap-2 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg disabled:opacity-40 transition-colors"
      >
        <CheckCircle className="w-5 h-5" /> Check Spelling
      </button>

      <p className="text-xs text-gray-400">
        Focus phonogram: <span className="font-bold text-brand-500">{current.phonogram}</span>
      </p>
    </div>
  )
}
