'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import type { FullLesson, LessonStep, StepResult } from '@/types'

// Lazy-load each step component to keep bundles small
const PhonogramFlashcard   = dynamic(() => import('./steps/PhonogramFlashcard'))
const PhonemeSegmentation  = dynamic(() => import('./steps/PhonemeSegmentation'))
const WordBuilder          = dynamic(() => import('./steps/WordBuilder'))
const ReadingPassage       = dynamic(() => import('./steps/ReadingPassage'))
const SpellingActivity     = dynamic(() => import('./steps/SpellingActivity'))
const PictureMatching      = dynamic(() => import('./steps/PictureMatching'))
const GenericStep          = dynamic(() => import('./steps/GenericStep'))

const STEP_LABELS: Record<string, string> = {
  phonogram_review:       '1. Phonogram Review',
  phonological_awareness: '2. Sound Segmentation',
  word_building:          '3. Word Building',
  decoding:               '4. Decoding',
  pre_reading:            '5. Pre-Reading',
  reading_passage:        '6. Reading Passage',
  sound_dictation:        '7. Sound Dictation',
  pre_spelling:           '8. Pre-Spelling',
  spelling:               '9. Spelling',
  sentence_dictation:     '10. Sentence Dictation',
}

const STEP_ICONS: Record<string, string> = {
  phonogram_review: '🔤',
  phonological_awareness: '👂',
  word_building: '🧩',
  decoding: '📖',
  pre_reading: '🔍',
  reading_passage: '📚',
  sound_dictation: '🎤',
  pre_spelling: '✏️',
  spelling: '🐝',
  sentence_dictation: '📝',
}

interface Props {
  fullLesson: FullLesson
  onExit: () => void
  onSaveProgress: (result: StepResult) => Promise<void>
}

export default function LessonStepper({ fullLesson, onExit, onSaveProgress }: Props) {
  const { lesson, steps } = fullLesson
  const [currentStep, setCurrentStep] = useState(0)
  const [results, setResults]         = useState<StepResult[]>([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [isComplete, setIsComplete]   = useState(false)
  const [startTime]                   = useState(Date.now())

  const step: LessonStep = steps[currentStep]
  const progress = ((currentStep) / steps.length) * 100

  const handleStepComplete = useCallback(async (score: number) => {
    const elapsed = Math.round((Date.now() - startTime) / 1000)
    const earned  = Math.round((score / 100) * step.points)
    const result: StepResult = {
      step_number: step.step_number,
      score,
      time_spent_sec: elapsed,
      responses: [],
    }
    setResults(prev => [...prev, result])
    setTotalPoints(p => p + earned)
    await onSaveProgress(result)

    if (currentStep + 1 < steps.length) {
      setCurrentStep(i => i + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, step, steps.length, startTime, onSaveProgress])

  const renderStep = () => {
    const content = step.content
    switch (content.type) {
      case 'phonogram_review':
        return <PhonogramFlashcard content={content} onComplete={handleStepComplete} />
      case 'phonological_awareness':
        return <PhonemeSegmentation content={content} onComplete={handleStepComplete} />
      case 'word_building':
        return <WordBuilder content={content} onComplete={handleStepComplete} />
      case 'reading_passage':
        return <ReadingPassage content={content} onComplete={handleStepComplete} />
      case 'spelling':
        return <SpellingActivity content={content} onComplete={handleStepComplete} />
      case 'picture_matching':
        return (
          <PictureMatching
            words={(content as any).words ?? []}
            phonogram={(content as any).phonogram}
            onComplete={handleStepComplete}
          />
        )
      default:
        return <GenericStep step={step} onComplete={handleStepComplete} />
    }
  }

  // Lesson complete screen
  if (isComplete) {
    const totalScore  = results.reduce((a, r) => a + r.score, 0)
    const avgScore    = Math.round(totalScore / results.length)
    const passed      = avgScore >= lesson.mastery_threshold

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-purple-50 p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center"
        >
          <div className="text-7xl mb-4">{passed ? '🏆' : '📚'}</div>
          <h1 className="text-3xl font-display font-black text-gray-800 mb-2">
            {passed ? 'Lesson Complete!' : 'Good Effort!'}
          </h1>
          <p className="text-gray-500 mb-6">
            {lesson.title} • Level {lesson.level_id}
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-display font-black text-brand-600">{avgScore}%</p>
              <p className="text-xs text-gray-400 mt-1">Average Score</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display font-black text-accent-yellow">+{totalPoints}</p>
              <p className="text-xs text-gray-400 mt-1">Points Earned</p>
            </div>
          </div>

          {/* Step breakdown */}
          <div className="flex flex-col gap-2 mb-8 text-left">
            {results.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-xl text-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  {STEP_ICONS[steps[i]?.step_type] ?? '📌'}
                  <span>{STEP_LABELS[steps[i]?.step_type] ?? `Step ${r.step_number}`}</span>
                </span>
                <span className={`font-bold ${r.score >= 80 ? 'text-green-600' : r.score >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
                  {r.score}%
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={onExit}
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg transition-colors"
          >
            {passed ? 'Next Lesson →' : 'Practice Again'}
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button onClick={onExit} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{STEP_ICONS[step.step_type]} {STEP_LABELS[step.step_type]}</span>
              <span>{currentStep + 1}/{steps.length}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">Points</p>
            <p className="text-sm font-bold text-accent-yellow">+{totalPoints}</p>
          </div>
        </div>
      </header>

      {/* Step content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step header */}
            <div className="mb-6">
              <h1 className="text-2xl font-display font-bold text-gray-800">{step.title}</h1>
              {step.instructions && (
                <p className="text-gray-500 mt-1">{step.instructions}</p>
              )}
            </div>
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Step rail (mini nav at bottom) */}
      <footer className="bg-white border-t border-gray-100 px-4 py-2 overflow-x-auto">
        <div className="flex gap-1 max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`flex-1 h-1.5 rounded-full transition-colors ${
                i < currentStep  ? 'bg-green-400' :
                i === currentStep ? 'bg-brand-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}
