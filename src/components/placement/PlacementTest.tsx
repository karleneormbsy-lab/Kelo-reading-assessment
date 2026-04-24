'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, ChevronRight, Clock, CheckCircle, Mic, Square } from 'lucide-react'
import { useAudio } from '@/hooks/useAudio'
import ELLAudioToolbar from '@/components/ui/ELLAudioToolbar'
import {
  ALL_SECTIONS,
  scoreSection,
  computeRecommendedLevel,
  type PlacementSection,
  type SectionResult,
} from '@/lib/placementData'
import type { PlacementAnalysis } from '@/app/api/placement/analyze/route'

// ─── Step 0: Student Info ─────────────────────────────────────────────────

function StudentInfoStep({ onNext }: { onNext: (name: string, grade: string, lang: string) => void }) {
  const [name, setName]   = useState('')
  const [grade, setGrade] = useState('1')
  const [lang, setLang]   = useState('en-US')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 max-w-md mx-auto"
    >
      <div className="text-center">
        <div className="text-5xl mb-3">📋</div>
        <h2 className="text-2xl font-display font-black text-gray-800">Before We Start</h2>
        <p className="text-gray-500 mt-1">We'll find the perfect starting point for you.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-bold text-gray-600 block mb-1.5">Student Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-400 outline-none text-lg font-display font-bold text-gray-800 transition-colors"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-gray-600 block mb-1.5">Grade</label>
          <select
            value={grade}
            onChange={e => setGrade(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-400 outline-none text-gray-700 bg-white transition-colors"
          >
            {['K', '1', '2', '3', '4', '5'].map(g => (
              <option key={g} value={g}>Grade {g}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-600 block mb-1.5">
            Home Language <span className="text-gray-400 font-normal">(helps us support you better)</span>
          </label>
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-400 outline-none text-gray-700 bg-white"
          >
            <option value="en-US">🇺🇸 English</option>
            <option value="es-ES">🇪🇸 Español</option>
            <option value="ht">🇭🇹 Kreyòl Ayisyen</option>
            <option value="fr-FR">🇫🇷 Français</option>
            <option value="pt-BR">🇧🇷 Português</option>
            <option value="zh-CN">🇨🇳 中文</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="vi-VN">🇻🇳 Tiếng Việt</option>
            <option value="so">🇸🇴 Soomaali</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => name.trim() && onNext(name.trim(), grade, lang)}
        disabled={!name.trim()}
        className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg disabled:opacity-40 transition-colors"
      >
        Start Placement Test →
      </button>
    </motion.div>
  )
}

// ─── Section Runner ───────────────────────────────────────────────────────

interface SectionRunnerProps {
  section:     PlacementSection
  nativeLang:  string
  onComplete:  (result: SectionResult, wcpm?: number) => void
}

function SectionRunner({ section, nativeLang, onComplete }: SectionRunnerProps) {
  const [itemIndex, setItemIndex]     = useState(0)
  const [responses, setResponses]     = useState<Record<string, string>>({})
  const [input, setInput]             = useState('')
  const [submitted, setSubmitted]     = useState(false)
  const [feedback, setFeedback]       = useState<'correct' | 'wrong' | null>(null)
  const [timeLeft, setTimeLeft]       = useState(section.timeLimit ?? 0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [wcpm, setWcpm]               = useState<number | undefined>()
  const [passageTyped, setPassageTyped] = useState('')
  const sectionStart                  = useRef(Date.now())
  const inputRef                      = useRef<HTMLInputElement>(null)

  const { speak, speakOpenAI, speaking, speed, setSpeed, stop } = useAudio({ speed: 'slow', lang: nativeLang })

  const currentItem = section.items[itemIndex]
  const isPassage   = section.type === 'passage'
  const isSpelling  = section.type === 'spelling'

  // Timer for passage section
  useEffect(() => {
    if (!timerRunning || !section.timeLimit) return
    if (timeLeft <= 0) {
      setTimerRunning(false)
      finishPassage()
      return
    }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [timerRunning, timeLeft])

  const finishPassage = useCallback(() => {
    // Count words typed as a proxy for WCPM
    const wordsTyped = passageTyped.trim().split(/\s+/).filter(Boolean).length
    const elapsed    = Math.max(1, (section.timeLimit ?? 60) - timeLeft)
    const calculatedWcpm = Math.round((wordsTyped / elapsed) * 60)
    setWcpm(calculatedWcpm)
    setSubmitted(true)
    const result = scoreSection(section, { [currentItem.id]: passageTyped })
    result.timeSpent = elapsed
    onComplete(result, calculatedWcpm)
  }, [passageTyped, timeLeft, section, currentItem, onComplete])

  const checkAnswer = useCallback(() => {
    if (isPassage) return
    const r = input.trim().toLowerCase()
    const a = currentItem.answer.toLowerCase()
    const correct = r === a
    setFeedback(correct ? 'correct' : 'wrong')
    const newResponses = { ...responses, [currentItem.id]: r }
    setResponses(newResponses)

    if (isSpelling) speak(correct ? 'Correct!' : `The word is ${currentItem.answer}`)

    setTimeout(() => {
      setFeedback(null)
      setInput('')
      if (itemIndex + 1 < section.items.length) {
        setItemIndex(i => i + 1)
      } else {
        const result = scoreSection(section, newResponses)
        result.timeSpent = Math.round((Date.now() - sectionStart.current) / 1000)
        onComplete(result)
      }
    }, 900)
  }, [input, currentItem, responses, itemIndex, section, isPassage, isSpelling, speak, onComplete])

  // Auto-focus input
  useEffect(() => { inputRef.current?.focus() }, [itemIndex])

  const progress = ((itemIndex) / section.items.length) * 100

  // ── Passage layout ─────────────────────────────────────────────────────
  if (isPassage) {
    return (
      <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-700">
          <strong>Instructions:</strong> Read the passage below. If you're using this digitally, you can also type along as you read to help us measure your speed.
        </div>

        {/* Timer */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-lg ${timerRunning ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
            <Clock className="w-5 h-5" />
            <span>{String(Math.floor(timeLeft / 60)).padStart(2,'0')}:{String(timeLeft % 60).padStart(2,'0')}</span>
          </div>
          {!timerRunning ? (
            <button
              onClick={() => { setTimerRunning(true); speak('Begin reading now') }}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors"
            >
              ▶ Start Reading
            </button>
          ) : (
            <button
              onClick={() => { setTimerRunning(false); finishPassage() }}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold flex items-center gap-2 transition-colors"
            >
              <Square className="w-4 h-4" /> Done
            </button>
          )}
        </div>

        {/* Passage */}
        <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
          <p className="text-xl leading-[2] text-gray-800 font-body select-none">
            {currentItem.prompt}
          </p>
        </div>

        {/* Optional typing area */}
        {timerRunning && (
          <textarea
            value={passageTyped}
            onChange={e => setPassageTyped(e.target.value)}
            placeholder="Type along as you read (optional)..."
            className="w-full h-28 px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-brand-400 outline-none text-gray-700 resize-none"
          />
        )}

        <p className="text-xs text-gray-400 text-center">
          {currentItem.hint}
        </p>
      </div>
    )
  }

  // ── Standard item layout ───────────────────────────────────────────────
  const isLetterSection = section.type === 'letter_name' || section.type === 'letter_sound'

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      {/* ELL Toolbar */}
      <ELLAudioToolbar
        speaking={speaking} speed={speed} onSetSpeed={setSpeed} onStop={stop}
        onReadPage={() => {
          if (isSpelling) speakOpenAI(currentItem.prompt, 'nova')
          else speak(currentItem.prompt)
        }}
      />

      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{itemIndex + 1} of {section.items.length}</span>
          <span>Level {currentItem.level} words</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div className="h-full bg-brand-500 rounded-full" animate={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Prompt card */}
      <motion.div
        key={currentItem.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`w-full rounded-3xl shadow-md border flex flex-col items-center justify-center gap-3 p-10 ${
          feedback === 'correct' ? 'border-green-400 bg-green-50' :
          feedback === 'wrong'   ? 'border-red-400 bg-red-50'     :
          'border-gray-100 bg-white'
        }`}
      >
        {isSpelling ? (
          // Spelling: just show item number, student types what they hear
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center font-display font-black text-2xl text-brand-700">
              {itemIndex + 1}
            </div>
            <button
              onClick={() => speakOpenAI(currentItem.prompt, 'nova')}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded-2xl font-bold transition-colors"
            >
              <Volume2 className="w-5 h-5" /> Hear Word
            </button>
            <p className="text-gray-400 text-sm">Listen and write what you hear</p>
          </div>
        ) : (
          // Letter / word display
          <div className="flex flex-col items-center gap-4">
            <p className={`font-display font-black text-gray-800 text-center ${
              isLetterSection ? 'text-[96px] leading-none' :
              currentItem.prompt.length <= 5 ? 'text-5xl' : 'text-3xl'
            }`}>
              {currentItem.prompt}
            </p>
            <button onClick={() => speak(currentItem.prompt)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Volume2 className="w-4 h-4 text-gray-500" />
            </button>
            {currentItem.hint && (
              <p className="text-xs text-gray-400">{currentItem.hint}</p>
            )}
          </div>
        )}

        {/* Feedback overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`text-3xl ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}
            >
              {feedback === 'correct' ? '✅' : `✗ ${currentItem.answer}`}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Answer input */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && input.trim() && checkAnswer()}
        disabled={!!feedback}
        placeholder={
          isSpelling           ? 'Type the word...' :
          isLetterSection      ? 'Type the name or sound...' :
          'Type the word...'
        }
        className="w-full text-center text-2xl font-display font-bold py-4 px-6 rounded-2xl border-2 border-gray-200 focus:border-brand-400 outline-none bg-white transition-colors"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
      />

      <button
        onClick={checkAnswer}
        disabled={!input.trim() || !!feedback}
        className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg disabled:opacity-40 transition-colors flex items-center justify-center gap-2"
      >
        <CheckCircle className="w-5 h-5" /> Submit
      </button>
    </div>
  )
}

// ─── Results Screen ───────────────────────────────────────────────────────

function ResultsScreen({
  studentName,
  grade,
  nativeLang,
  sectionResults,
  wcpm,
}: {
  studentName:    string
  grade:          string
  nativeLang:     string
  sectionResults: SectionResult[]
  wcpm?:          number
}) {
  const [analysis, setAnalysis]   = useState<PlacementAnalysis | null>(null)
  const [loading, setLoading]     = useState(true)
  const computedLevel             = computeRecommendedLevel(sectionResults)

  useEffect(() => {
    fetch('/api/placement/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentName, grade, results: sectionResults, wcpm, nativeLang, computedLevel }),
    })
      .then(r => r.json())
      .then(data => { setAnalysis(data); setLoading(false) })
      .catch(() => {
        setAnalysis({
          recommended_level: computedLevel,
          recommended_lesson: 1,
          confidence: 'medium',
          strengths: ['Completed full placement assessment'],
          gaps: ['Further teacher review recommended'],
          observations: `Based on your responses, Level ${computedLevel} is the recommended starting point.`,
          next_steps: [`Begin Level ${computedLevel}, Lesson 1`],
        })
        setLoading(false)
      })
  }, [])

  const LEVEL_COLORS = ['', 'from-green-400 to-emerald-500', 'from-blue-400 to-brand-500', 'from-purple-400 to-violet-500', 'from-orange-400 to-amber-500', 'from-red-400 to-rose-500', 'from-yellow-400 to-amber-400']

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <div className="w-16 h-16 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <div className="text-center">
          <p className="font-display font-bold text-gray-800 text-lg">Analyzing your results...</p>
          <p className="text-gray-400 text-sm mt-1">Our AI reading specialist is reviewing your responses</p>
        </div>
      </div>
    )
  }

  if (!analysis) return null
  const lvl = analysis.recommended_level

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
    >
      {/* Level badge */}
      <div className={`bg-gradient-to-br ${LEVEL_COLORS[lvl] ?? 'from-brand-500 to-brand-700'} rounded-3xl p-8 text-white text-center`}>
        <p className="text-white/80 text-sm font-semibold mb-1">Recommended Starting Point</p>
        <h2 className="text-5xl font-display font-black mb-2">Level {lvl}</h2>
        <p className="text-white/80">Lesson {analysis.recommended_lesson}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-sm">
          {analysis.confidence === 'high' ? '🎯' : analysis.confidence === 'medium' ? '📊' : '🔍'} {analysis.confidence} confidence
        </div>
      </div>

      {/* Section scores */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-display font-bold text-gray-800 mb-4">Section Results</h3>
        <div className="flex flex-col gap-3">
          {sectionResults.map(r => {
            const labels: Record<string, string> = {
              letter_names: 'A – Letter Names', letter_sounds: 'B – Letter Sounds',
              nonsense_words: 'C – Nonsense Words', real_words: 'D – Word Reading',
              passage: 'E – Reading Passage', spelling: 'F – Spelling',
            }
            const label = labels[r.sectionId] ?? r.sectionId
            return (
              <div key={r.sectionId}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 font-medium">{label}</span>
                  <span className={`font-bold ${r.score >= 80 ? 'text-green-600' : r.score >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
                    {r.sectionId === 'passage' && wcpm ? `${wcpm} WCPM` : `${r.score}%`}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${r.score >= 80 ? 'bg-green-400' : r.score >= 60 ? 'bg-amber-400' : 'bg-red-400'}`}
                    style={{ width: `${r.sectionId === 'passage' ? 100 : r.score}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <h3 className="font-display font-bold text-gray-800">AI Reading Specialist Analysis</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{analysis.observations}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-2xl p-4">
            <h4 className="font-bold text-green-700 text-sm mb-2">✅ Strengths</h4>
            <ul className="flex flex-col gap-1">
              {analysis.strengths.map((s, i) => (
                <li key={i} className="text-green-700 text-sm flex gap-2"><span>•</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 rounded-2xl p-4">
            <h4 className="font-bold text-amber-700 text-sm mb-2">🎯 Areas to Build</h4>
            <ul className="flex flex-col gap-1">
              {analysis.gaps.map((g, i) => (
                <li key={i} className="text-amber-700 text-sm flex gap-2"><span>•</span>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-brand-50 rounded-2xl p-4">
          <h4 className="font-bold text-brand-700 text-sm mb-2">📚 Next Steps</h4>
          <ol className="flex flex-col gap-1">
            {analysis.next_steps.map((s, i) => (
              <li key={i} className="text-brand-700 text-sm flex gap-2"><span className="font-bold">{i + 1}.</span>{s}</li>
            ))}
          </ol>
        </div>

        {analysis.ell_notes && (
          <div className="bg-purple-50 rounded-2xl p-4">
            <h4 className="font-bold text-purple-700 text-sm mb-2">🌍 ELL Support Notes</h4>
            <p className="text-purple-700 text-sm">{analysis.ell_notes}</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href={`/levels/${lvl}`}
          className="flex-1 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-center text-lg transition-colors"
        >
          Start Level {lvl} →
        </a>
        <a
          href="/dashboard"
          className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-colors"
        >
          Dashboard
        </a>
      </div>
    </motion.div>
  )
}

// ─── Main Orchestrator ────────────────────────────────────────────────────

export default function PlacementTest() {
  const [phase, setPhase]               = useState<'intro' | 'section' | 'results'>('intro')
  const [studentName, setStudentName]   = useState('')
  const [grade, setGrade]               = useState('1')
  const [nativeLang, setNativeLang]     = useState('en-US')
  const [sectionIndex, setSectionIndex] = useState(0)
  const [allResults, setAllResults]     = useState<SectionResult[]>([])
  const [wcpm, setWcpm]                 = useState<number | undefined>()

  const currentSection = ALL_SECTIONS[sectionIndex]

  const handleStudentInfo = (name: string, g: string, lang: string) => {
    setStudentName(name)
    setGrade(g)
    setNativeLang(lang)
    setPhase('section')
  }

  const handleSectionComplete = (result: SectionResult, passageWcpm?: number) => {
    const updated = [...allResults, result]
    setAllResults(updated)
    if (passageWcpm) setWcpm(passageWcpm)

    if (sectionIndex + 1 < ALL_SECTIONS.length) {
      setSectionIndex(i => i + 1)
    } else {
      setPhase('results')
    }
  }

  const totalSections = ALL_SECTIONS.length
  const overallProgress = phase === 'results' ? 100 : ((sectionIndex) / totalSections) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-display font-black text-gray-800">
              {phase === 'intro'    ? 'Placement Assessment'   :
               phase === 'results' ? 'Your Results'            :
               currentSection.title}
            </h1>
            {phase === 'section' && (
              <span className="text-xs text-gray-400 font-medium">
                Section {sectionIndex + 1} of {totalSections}
              </span>
            )}
          </div>
          {phase !== 'intro' && (
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-500 rounded-full"
                animate={{ width: `${overallProgress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <StudentInfoStep onNext={handleStudentInfo} />
            </motion.div>
          )}

          {phase === 'section' && (
            <motion.div key={`section-${sectionIndex}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              {/* Section intro banner */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {['🔤','🔊','🧩','📖','📚','✏️'][sectionIndex] ?? '📋'}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-gray-800">{currentSection.title}</h2>
                    <p className="text-gray-500 text-sm mt-0.5">{currentSection.instruction}</p>
                    {currentSection.timeLimit && (
                      <p className="text-amber-600 text-xs mt-1 font-medium">⏱ Timed: {currentSection.timeLimit} seconds</p>
                    )}
                  </div>
                </div>
              </div>

              <SectionRunner
                key={`runner-${sectionIndex}`}
                section={currentSection}
                nativeLang={nativeLang}
                onComplete={handleSectionComplete}
              />
            </motion.div>
          )}

          {phase === 'results' && (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <ResultsScreen
                studentName={studentName}
                grade={grade}
                nativeLang={nativeLang}
                sectionResults={allResults}
                wcpm={wcpm}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
