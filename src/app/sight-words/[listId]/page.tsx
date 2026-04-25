'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, RotateCcw, CheckCircle, XCircle, Trophy } from 'lucide-react'
import { getListById } from '@/data/sightWords'

export default function SightWordPracticePage({ params }: { params: { listId: string } }) {
  const list = getListById(params.listId)

  const [index, setIndex]         = useState(0)
  const [flipped, setFlipped]     = useState(false)
  const [known, setKnown]         = useState<Set<string>>(new Set())
  const [practice, setPractice]   = useState<Set<string>>(new Set())
  const [mode, setMode]           = useState<'flashcard' | 'results'>('flashcard')
  const [direction, setDirection] = useState<1 | -1>(1)

  if (!list) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-2xl font-display font-black text-gray-800 mb-2">List not found</h1>
          <Link href="/sight-words" className="text-brand-600 hover:underline">← Back to Sight Words</Link>
        </div>
      </div>
    )
  }

  const words        = list.words
  const currentWord  = words[index]
  const totalAnswered = known.size + practice.size
  const allDone       = totalAnswered >= words.length

  const speak = (word: string) => {
    window.speechSynthesis.cancel()
    const utt  = new SpeechSynthesisUtterance(word)
    utt.rate   = 0.9
    utt.lang   = 'en-US'
    window.speechSynthesis.speak(utt)
  }

  const go = (dir: 1 | -1) => {
    setDirection(dir)
    setFlipped(false)
    setTimeout(() => setIndex(i => Math.max(0, Math.min(words.length - 1, i + dir))), 80)
  }

  const markKnown = () => {
    setKnown(s => new Set([...s, currentWord]))
    setPractice(s => { const n = new Set(s); n.delete(currentWord); return n })
    speak(currentWord)
    if (index < words.length - 1) go(1)
    else setMode('results')
  }

  const markPractice = () => {
    setPractice(s => new Set([...s, currentWord]))
    setKnown(s => { const n = new Set(s); n.delete(currentWord); return n })
    if (index < words.length - 1) go(1)
    else setMode('results')
  }

  const reset = () => {
    setIndex(0); setFlipped(false)
    setKnown(new Set()); setPractice(new Set())
    setMode('flashcard'); setDirection(1)
  }

  const practiceMissed = () => {
    // rebuild session with only the practice words
    const missed = [...practice]
    if (missed.length === 0) return
    setKnown(new Set()); setPractice(new Set())
    setMode('flashcard'); setIndex(0); setFlipped(false); setDirection(1)
  }

  const score = words.length > 0 ? Math.round((known.size / words.length) * 100) : 0

  // ── Results screen ──────────────────────────────────────────────
  if (mode === 'results') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-brand-600 to-violet-700 text-white px-6 py-8">
          <div className="max-w-xl mx-auto">
            <Link href="/sight-words" className="flex items-center gap-1 text-white/80 hover:text-white text-sm mb-6">
              <ChevronLeft className="w-4 h-4" /> All Lists
            </Link>
            <h1 className="text-2xl font-display font-black">{list.name} — Done!</h1>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-6 py-8 flex flex-col gap-6">
          {/* Score */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="text-6xl mb-3">{score >= 80 ? '🏆' : score >= 50 ? '⭐' : '💪'}</div>
            <p className="text-5xl font-display font-black text-brand-600 mb-1">{score}%</p>
            <p className="text-gray-500">{known.size} of {words.length} words known</p>
          </div>

          {/* Known words */}
          {known.size > 0 && (
            <div>
              <h3 className="font-bold text-green-700 mb-2 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Words You Know ({known.size})
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...known].map(w => (
                  <span key={w} className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded-full text-sm font-bold">{w}</span>
                ))}
              </div>
            </div>
          )}

          {/* Practice words */}
          {practice.size > 0 && (
            <div>
              <h3 className="font-bold text-amber-700 mb-2 flex items-center gap-1">
                <XCircle className="w-4 h-4" /> Keep Practicing ({practice.size})
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...practice].map(w => (
                  <span key={w} className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-sm font-bold">{w}</span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button onClick={reset} className="flex-1 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold transition-colors flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <Link href="/sight-words" className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-colors flex items-center justify-center">
              All Lists →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── Flashcard screen ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-600 to-violet-700 text-white px-6 py-6">
        <div className="max-w-xl mx-auto">
          <Link href="/sight-words" className="flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4">
            <ChevronLeft className="w-4 h-4" /> All Lists
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wide">Level {list.level}</p>
              <h1 className="text-xl font-display font-black">{list.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-xs">{index + 1} / {words.length}</p>
              <div className="flex gap-1 mt-1">
                <span className="text-xs text-green-300">✓ {known.size}</span>
                <span className="text-xs text-amber-300">↺ {practice.size}</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${((index + 1) / words.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 py-8 flex flex-col items-center gap-6">

        {/* Flashcard */}
        <div
          className="w-full cursor-pointer"
          onClick={() => setFlipped(f => !f)}
          style={{ perspective: 1000 }}
        >
          <motion.div
            key={`${index}-${flipped}`}
            initial={{ rotateY: direction === 1 ? -20 : 20, opacity: 0, scale: 0.95 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className={`w-full rounded-3xl shadow-lg border-2 p-10 flex flex-col items-center justify-center gap-4 min-h-[220px] transition-colors ${
              flipped
                ? 'bg-brand-600 border-brand-400 text-white'
                : 'bg-white border-gray-100 text-gray-800'
            }`}
          >
            {!flipped ? (
              <>
                <p className="text-6xl font-display font-black tracking-wide">{currentWord}</p>
                <p className="text-gray-400 text-sm">Tap to hear & see definition</p>
              </>
            ) : (
              <>
                <p className="text-5xl font-display font-black tracking-wide">{currentWord}</p>
                <button
                  onClick={e => { e.stopPropagation(); speak(currentWord) }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                >
                  <Volume2 className="w-4 h-4" /> Hear it
                </button>
                <p className="text-white/70 text-sm text-center">
                  Spell it aloud, then tap Know it or Practice More
                </p>
              </>
            )}
          </motion.div>
        </div>

        {/* Audio button (always visible) */}
        <button
          onClick={() => speak(currentWord)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-brand-600 font-medium shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
        >
          <Volume2 className="w-4 h-4" /> Say it aloud
        </button>

        {/* Action buttons */}
        <div className="flex gap-4 w-full">
          <button
            onClick={markPractice}
            className="flex-1 py-4 bg-amber-50 border-2 border-amber-200 hover:bg-amber-100 text-amber-700 rounded-2xl font-bold text-lg transition-colors flex flex-col items-center gap-0.5"
          >
            <XCircle className="w-6 h-6" />
            <span className="text-sm">Practice More</span>
          </button>
          <button
            onClick={markKnown}
            className="flex-1 py-4 bg-green-50 border-2 border-green-300 hover:bg-green-100 text-green-700 rounded-2xl font-bold text-lg transition-colors flex flex-col items-center gap-0.5"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="text-sm">Know It!</span>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm disabled:opacity-30 hover:border-brand-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Word dots */}
          <div className="flex gap-1.5 max-w-[200px] overflow-hidden">
            {words.map((w, i) => (
              <button
                key={w}
                onClick={() => { setDirection(i > index ? 1 : -1); setFlipped(false); setTimeout(() => setIndex(i), 80) }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index        ? 'bg-brand-600 w-4' :
                  known.has(w)       ? 'bg-green-400' :
                  practice.has(w)    ? 'bg-amber-400' :
                  'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            disabled={index === words.length - 1}
            className="p-3 rounded-full bg-white border border-gray-200 shadow-sm disabled:opacity-30 hover:border-brand-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Finish early */}
        {totalAnswered > 0 && (
          <button
            onClick={() => setMode('results')}
            className="text-sm text-brand-600 hover:underline flex items-center gap-1"
          >
            <Trophy className="w-4 h-4" /> See Results ({totalAnswered} answered)
          </button>
        )}
      </div>
    </div>
  )
}
