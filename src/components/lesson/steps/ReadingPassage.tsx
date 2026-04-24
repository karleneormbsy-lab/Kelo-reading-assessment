'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Square, CheckCircle } from 'lucide-react'
import { useAudio } from '@/hooks/useAudio'
import ELLAudioToolbar from '@/components/ui/ELLAudioToolbar'
import type { ReadingPassageContent, ComprehensionQuestion } from '@/types'

interface Props {
  content: ReadingPassageContent
  onComplete: (score: number) => void
}

export default function ReadingPassage({ content, onComplete }: Props) {
  const [phase, setPhase]         = useState<'reading' | 'questions' | 'done'>('reading')
  const [answers, setAnswers]     = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore]         = useState(0)
  const [nativeLang, setNativeLang] = useState('en-US')

  const { title, body, highlight_phonogram, questions } = content

  // Split passage into words for word-by-word highlighting
  const words = body.split(/(\s+)/).filter(Boolean)
  const pureWords = words.filter(w => w.trim().length > 0)

  const { speak, speakWithHighlight, stop, speaking, speed, setSpeed, highlighted } = useAudio({ speed: 'normal', lang: nativeLang })

  const handleReadAloud = useCallback(() => {
    if (speaking) { stop(); return }
    speakWithHighlight(pureWords, undefined, undefined)
  }, [speaking, stop, speakWithHighlight, pureWords])

  // Highlight the target phonogram in a word, plus word-level reading highlight
  const renderWord = (word: string, wordIdx: number) => {
    const isCurrent = highlighted?.wordIndex === wordIdx
    const clean = word.replace(/[^a-zA-Z'-]/g, '')
    const punct = word.slice(clean.length)

    let inner: React.ReactNode = word
    if (highlight_phonogram) {
      const regex = new RegExp(`(${highlight_phonogram})`, 'gi')
      const parts = clean.split(regex)
      inner = (
        <>
          {parts.map((part, i) =>
            regex.test(part)
              ? <span key={i} className="text-brand-700 font-black underline decoration-2">{part}</span>
              : <span key={i}>{part}</span>
          )}
          {punct}
        </>
      )
    }

    return (
      <span
        key={wordIdx}
        className={`inline-block rounded px-0.5 transition-colors duration-100 ${
          isCurrent ? 'bg-yellow-300 text-gray-900' : ''
        }`}
      >
        {inner}
      </span>
    )
  }

  // Reconstruct passage preserving whitespace, attaching word indices
  const renderPassage = () => {
    let wordIdx = 0
    return words.map((token, i) => {
      if (token.trim().length === 0) return <span key={i}>{token}</span>
      const el = renderWord(token, wordIdx)
      wordIdx++
      return el
    })
  }

  const handleAnswer = (questionId: string, answer: string) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const submitAnswers = () => {
    let correct = 0
    questions.forEach(q => {
      const chosen = answers[q.id]
      if (!chosen) return
      const correctOpt = q.options?.find(o => o.is_correct)
      if (correctOpt && chosen === correctOpt.text) correct++
    })
    const finalScore = Math.round((correct / questions.length) * 100)
    setScore(finalScore)
    setSubmitted(true)
    setPhase('done')
    speak(finalScore >= 80 ? 'Excellent reading! Great job!' : 'Good effort! Keep practicing!')
    setTimeout(() => onComplete(finalScore), 2000)
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
      {/* ELL Toolbar */}
      <ELLAudioToolbar
        speaking={speaking}
        speed={speed}
        onSetSpeed={setSpeed}
        onStop={stop}
        onReadPage={handleReadAloud}
        nativeLang={nativeLang}
        onSetLang={setNativeLang}
      />

      {/* Passage */}
      <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-bold text-gray-800">{title}</h2>
          {highlight_phonogram && (
            <span className="text-xs px-2 py-1 bg-brand-50 text-brand-600 rounded-full font-semibold">
              Focus: <span className="font-black">{highlight_phonogram}</span>
            </span>
          )}
        </div>

        {/* Word-by-word highlighted passage */}
        <div className="text-gray-700 text-lg leading-[2.2] font-body select-none">
          {renderPassage()}
        </div>

        {/* Legend */}
        {highlight_phonogram && (
          <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="inline-block px-1 bg-yellow-300 rounded text-gray-800 font-bold">word</span>
              = currently reading
            </span>
            <span className="flex items-center gap-1">
              <span className="text-brand-700 font-black underline">{highlight_phonogram}</span>
              = target sound
            </span>
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="flex flex-col gap-3">
        <h3 className="font-display font-bold text-lg text-gray-700">Check for Understanding</h3>
        {questions.map((q, qi) => (
          <div key={q.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="font-medium text-gray-800 mb-3">{qi + 1}. {q.question}</p>
            {q.options && (
              <div className="flex flex-col gap-2">
                {q.options.map(opt => {
                  const isSelected = answers[q.id] === opt.text
                  const isCorrect  = opt.is_correct
                  let cls = 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  if (submitted && isSelected && isCorrect)  cls = 'border-green-400 bg-green-50'
                  if (submitted && isSelected && !isCorrect) cls = 'border-red-400 bg-red-50'
                  if (submitted && !isSelected && isCorrect) cls = 'border-green-300 bg-green-50'

                  return (
                    <button
                      key={opt.text}
                      onClick={() => { handleAnswer(q.id, opt.text); speak(opt.text) }}
                      className={`text-left px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-colors ${cls} ${!submitted ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {opt.text}
                      {submitted && isCorrect  && <span className="ml-2 text-green-600">✓</span>}
                      {submitted && isSelected && !isCorrect && <span className="ml-2 text-red-500">✗</span>}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {phase !== 'done' && (
        <button
          onClick={submitAnswers}
          disabled={Object.keys(answers).length < questions.length}
          className="flex items-center justify-center gap-2 py-3 px-8 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg disabled:opacity-40 transition-colors"
        >
          <CheckCircle className="w-5 h-5" /> Submit Answers
        </button>
      )}

      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <p className="text-4xl font-display font-black text-brand-700">{score}%</p>
            <p className="text-gray-500 mt-1">
              {score >= 80 ? '🎉 Excellent reading!' : score >= 60 ? '👍 Good effort!' : '📚 Keep practicing!'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
