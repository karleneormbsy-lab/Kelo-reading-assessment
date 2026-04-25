'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lock, CheckCircle, BookOpen } from 'lucide-react'

const LEVEL_INFO: Record<number, {
  title: string
  icon: string
  color: string
  focus: string
  lessons: { id: string; num: number; title: string; phonogram: string; unlocked: boolean; completed: boolean }[]
}> = {
  1: {
    title: 'Foundations', icon: '🌱', color: 'from-green-400 to-emerald-500', focus: 'Short vowels, CVC words',
    lessons: [
      { id: 'lesson-l1-01', num: 1,  title: 'Short /a/ Sound',       phonogram: 'a',  unlocked: true, completed: false },
      { id: 'lesson-l1-02', num: 2,  title: 'Short /i/ Sound',           phonogram: 'i',         unlocked: true, completed: false },
      { id: 'lesson-l1-03', num: 3,  title: 'Short /o/ Sound',           phonogram: 'o',         unlocked: true, completed: false },
      { id: 'lesson-l1-04', num: 4,  title: 'Short /u/ Sound',           phonogram: 'u',         unlocked: true, completed: false },
      { id: 'lesson-l1-05', num: 5,  title: 'Short /e/ Sound',           phonogram: 'e',         unlocked: true, completed: false },
      { id: 'lesson-l1-06', num: 6,  title: 'CVC Words – Set 1',         phonogram: 'CVC',       unlocked: true, completed: false },
      { id: 'lesson-l1-07', num: 7,  title: 'CVC Words – Set 2',         phonogram: 'CVC',       unlocked: true, completed: false },
      { id: 'lesson-l1-08', num: 8,  title: 'Blending Practice',         phonogram: 'blend',     unlocked: true, completed: false },
      { id: 'lesson-l1-09', num: 9,  title: 'Segmenting Practice',       phonogram: 'seg',       unlocked: true, completed: false },
      { id: 'lesson-l1-10', num: 10, title: 'Review – All Short Vowels', phonogram: 'a,e,i,o,u', unlocked: true, completed: false },
    ],
  },
  2: {
    title: 'Digraphs', icon: '🔵', color: 'from-blue-400 to-brand-500', focus: 'sh, ch, th, wh, ff, ll, ss, ck',
    lessons: [
      { id: 'lesson-l2-01', num: 1,  title: 'The /th/ Digraph',   phonogram: 'th', unlocked: true,  completed: true  },
      { id: 'lesson-l2-02', num: 2,  title: 'The /ch/ Digraph',   phonogram: 'ch', unlocked: true,  completed: true  },
      { id: 'lesson-l2-03', num: 3,  title: 'The /sh/ Digraph',   phonogram: 'sh', unlocked: true,  completed: false },
      { id: 'lesson-l2-04', num: 4,  title: 'The /wh/ Digraph',   phonogram: 'wh', unlocked: true, completed: false },
      { id: 'lesson-l2-05', num: 5,  title: 'Double /ff/ & /ll/', phonogram: 'ff,ll', unlocked: true, completed: false },
      { id: 'lesson-l2-06', num: 6,  title: 'Double /ss/ & /ck/', phonogram: 'ss,ck', unlocked: true, completed: false },
      { id: 'lesson-l2-07', num: 7,  title: 'Digraph Review',     phonogram: 'digraphs', unlocked: true, completed: false },
    ],
  },
  3: {
    title: 'Long Vowels', icon: '⭐', color: 'from-purple-400 to-violet-500', focus: 'Silent e, ai, ay, ea, ee, oa',
    lessons: [
      { id: 'lesson-l3-01', num: 1, title: 'Silent-e – a_e',    phonogram: 'a_e', unlocked: true, completed: false },
      { id: 'lesson-l3-02', num: 2, title: 'Silent-e – i_e',    phonogram: 'i_e', unlocked: true, completed: false },
      { id: 'lesson-l3-03', num: 3, title: 'Silent-e – o_e',    phonogram: 'o_e', unlocked: true, completed: false },
      { id: 'lesson-l3-04', num: 4, title: 'Vowel Team ai/ay',  phonogram: 'ai,ay', unlocked: true, completed: false },
      { id: 'lesson-l3-05', num: 5, title: 'Vowel Team ea/ee',  phonogram: 'ea,ee', unlocked: true, completed: false },
      { id: 'lesson-l3-06', num: 6, title: 'Vowel Team oa/ow',  phonogram: 'oa,ow', unlocked: true, completed: false },
    ],
  },
  4: {
    title: 'Syllables', icon: '🚀', color: 'from-orange-400 to-amber-500', focus: 'Open/closed syllables, suffixes',
    lessons: [
      { id: 'lesson-l4-01', num: 1, title: 'Closed Syllables',      phonogram: 'CVC', unlocked: true, completed: false },
      { id: 'lesson-l4-02', num: 2, title: 'Open Syllables',        phonogram: 'CV',  unlocked: true, completed: false },
      { id: 'lesson-l4-03', num: 3, title: 'Suffix -ing',           phonogram: '-ing', unlocked: true, completed: false },
      { id: 'lesson-l4-04', num: 4, title: 'Suffix -ed',            phonogram: '-ed',  unlocked: true, completed: false },
      { id: 'lesson-l4-05', num: 5, title: 'Two-Syllable Words',    phonogram: '2-syl', unlocked: true, completed: false },
    ],
  },
  5: {
    title: 'Advanced', icon: '🌟', color: 'from-red-400 to-rose-500', focus: 'Prefixes, suffixes, roots',
    lessons: [
      { id: 'lesson-l5-01', num: 1, title: 'Prefix un-',     phonogram: 'un-',  unlocked: true, completed: false },
      { id: 'lesson-l5-02', num: 2, title: 'Prefix re-',     phonogram: 're-',  unlocked: true, completed: false },
      { id: 'lesson-l5-03', num: 3, title: 'Prefix pre-',    phonogram: 'pre-', unlocked: true, completed: false },
      { id: 'lesson-l5-04', num: 4, title: 'Suffix -tion',   phonogram: '-tion', unlocked: true, completed: false },
      { id: 'lesson-l5-05', num: 5, title: 'Greek/Latin Roots', phonogram: 'roots', unlocked: true, completed: false },
    ],
  },
  6: {
    title: 'Mastery', icon: '🏆', color: 'from-yellow-400 to-amber-400', focus: 'Multisyllabic words, fluency',
    lessons: [
      { id: 'lesson-l6-01', num: 1, title: 'Multisyllabic Decoding', phonogram: 'multi', unlocked: true, completed: false },
      { id: 'lesson-l6-02', num: 2, title: 'Fluency Building',       phonogram: 'fluency', unlocked: true, completed: false },
      { id: 'lesson-l6-03', num: 3, title: 'Advanced Vocabulary',    phonogram: 'vocab',   unlocked: true, completed: false },
      { id: 'lesson-l6-04', num: 4, title: 'Mastery Assessment',     phonogram: 'assess',  unlocked: true, completed: false },
    ],
  },
}

/** Format phonogram for display: a_e → a•e, i_e → i•e, etc. */
function fmtPhonogram(p: string) {
  return p.replace(/_e\b/g, '•e')
}

export default function LevelPage({ params }: { params: { num: string } }) {
  const levelNum = parseInt(params.num)
  const info = LEVEL_INFO[levelNum]

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-2xl font-display font-black text-gray-800 mb-2">Level not found</h1>
          <Link href="/dashboard" className="text-brand-600 hover:underline">← Back to Dashboard</Link>
        </div>
      </div>
    )
  }

  const completed = info.lessons.filter(l => l.completed).length
  const total     = info.lessons.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${info.color} text-white px-6 py-8`}>
        <div className="max-w-2xl mx-auto">
          <Link href="/dashboard" className="flex items-center gap-1 text-white/80 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{info.icon}</span>
            <div>
              <p className="text-white/80 text-sm font-medium">Level {levelNum}</p>
              <h1 className="text-3xl font-display font-black">{info.title}</h1>
              <p className="text-white/80 text-sm mt-1">{info.focus}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
          <p className="text-white/80 text-sm mt-2">{completed} of {total} lessons complete</p>
        </div>
      </div>

      {/* Lesson list */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-3">
          {info.lessons.map((lesson, i) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {lesson.unlocked ? (
                <Link
                  href={`/lesson/${lesson.id}`}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-black text-lg bg-gradient-to-br ${info.color} flex-shrink-0`}>
                    {lesson.completed ? <CheckCircle className="w-6 h-6" /> : lesson.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800">Lesson {lesson.num} — {lesson.title}</p>
                    <p className="text-gray-500 text-sm">Phonogram: {fmtPhonogram(lesson.phonogram)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.completed && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Done ✓</span>}
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 opacity-50">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 flex-shrink-0">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-500">Lesson {lesson.num} — {lesson.title}</p>
                    <p className="text-gray-400 text-sm">Complete previous lesson to unlock</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/lesson/${info.lessons.find(l => l.unlocked && !l.completed)?.id ?? info.lessons[0].id}`}
            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${info.color} text-white rounded-2xl font-bold text-lg shadow-md hover:opacity-90 transition-opacity`}
          >
            <BookOpen className="w-5 h-5" />
            {completed > 0 ? 'Continue Level' : 'Start Level'} →
          </Link>
        </div>
      </div>
    </div>
  )
}
