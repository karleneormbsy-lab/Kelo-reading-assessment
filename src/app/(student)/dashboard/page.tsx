'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Star, Flame, Award, ChevronRight, Lock, CheckCircle } from 'lucide-react'

// Mock data — replace with Supabase queries
const student = {
  name: 'Amara',
  grade: '2',
  level: 2,
  lesson: 4,
  points: 340,
  streak: 5,
}

const levels = [
  {
    number: 1, title: 'Level 1 – Foundations', icon: '🌱', color: 'from-green-400 to-emerald-500',
    lessons: 12, completed: 12, unlocked: true,
  },
  {
    number: 2, title: 'Level 2 – Digraphs', icon: '🔵', color: 'from-blue-400 to-brand-500',
    lessons: 15, completed: 3, unlocked: true,
  },
  {
    number: 3, title: 'Level 3 – Long Vowels', icon: '⭐', color: 'from-purple-400 to-violet-500',
    lessons: 18, completed: 0, unlocked: false,
  },
]

const badges = [
  { icon: '👣', name: 'First Step',  earned: true },
  { icon: '🔥', name: 'Streak Star', earned: true },
  { icon: '💯', name: 'Perfect!',    earned: true },
  { icon: '🧙', name: 'Word Wizard', earned: false },
  { icon: '📖', name: 'Bookworm',    earned: false },
]

const recentActivity = [
  { lesson: 'L2 · #3 – /sh/ Sound',   score: 92, date: 'Yesterday' },
  { lesson: 'L2 · #2 – /ch/ Digraph', score: 88, date: '2 days ago' },
  { lesson: 'L2 · #1 – /th/ Digraph', score: 95, date: '3 days ago' },
]

export default function StudentDashboard() {
  const [tab, setTab] = useState<'lessons' | 'badges' | 'progress'>('lessons')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-brand-200 text-sm">Welcome back!</p>
              <h1 className="text-3xl font-display font-black">Hey, {student.name}! 👋</h1>
              <p className="text-brand-200 text-sm mt-1">Grade {student.grade} · Level {student.level}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="font-bold text-sm">{student.points} pts</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                <span className="font-bold text-sm">{student.streak} day streak</span>
              </div>
            </div>
          </div>

          {/* Continue button */}
          <Link href={`/lesson/lesson-l2-${String(student.lesson).padStart(2, '0')}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-5 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-2xl">📚</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Continue where you left off</p>
                  <p className="font-display font-black text-gray-800 text-lg">
                    Level 2 · Lesson {student.lesson}
                  </p>
                  <p className="text-gray-500 text-sm">The /sh/ Sound</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                Go! <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>

          {/* Placement test shortcut */}
          <Link href="/placement">
            <div className="bg-white/20 hover:bg-white/30 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-colors mt-2">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-white font-bold text-sm">Take Placement Test</p>
                <p className="text-brand-200 text-xs">Re-assess your reading level</p>
              </div>
              <ChevronRight className="w-4 h-4 text-brand-200 ml-auto" />
            </div>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex gap-2 py-4">
          {(['lessons', 'badges', 'progress'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl font-medium text-sm capitalize transition-colors ${
                tab === t ? 'bg-brand-600 text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'lessons' && (
          <div className="flex flex-col gap-4 pb-8">
            {levels.map((lvl, i) => (
              <motion.div
                key={lvl.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${lvl.color} p-4 flex items-center justify-between text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lvl.icon}</span>
                    <div>
                      <p className="font-display font-black">{lvl.title}</p>
                      <p className="text-white/80 text-sm">{lvl.completed}/{lvl.lessons} lessons</p>
                    </div>
                  </div>
                  {!lvl.unlocked && <Lock className="w-5 h-5 text-white/70" />}
                  {lvl.unlocked && lvl.completed === lvl.lessons && <CheckCircle className="w-5 h-5 text-white" />}
                </div>
                <div className="p-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full bg-gradient-to-r ${lvl.color} rounded-full transition-all`}
                      style={{ width: `${(lvl.completed / lvl.lessons) * 100}%` }}
                    />
                  </div>
                  {lvl.unlocked ? (
                    <Link
                      href={`/levels/${lvl.number}`}
                      className="block text-center py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-medium text-sm transition-colors"
                    >
                      {lvl.completed > 0 ? 'Continue Level →' : 'Start Level →'}
                    </Link>
                  ) : (
                    <div className="text-center py-2 text-gray-400 text-sm">
                      🔒 Complete Level {lvl.number - 1} to unlock
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {tab === 'badges' && (
          <div className="pb-8">
            <div className="grid grid-cols-3 gap-4">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                    b.earned
                      ? 'border-amber-300 bg-amber-50'
                      : 'border-gray-100 bg-gray-50 opacity-50'
                  }`}
                >
                  <span className="text-4xl">{b.icon}</span>
                  <span className="text-xs font-bold text-center text-gray-600">{b.name}</span>
                  {b.earned && <span className="text-xs text-amber-600 font-medium">Earned!</span>}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {tab === 'progress' && (
          <div className="flex flex-col gap-4 pb-8">
            <h3 className="font-display font-bold text-gray-700">Recent Activity</h3>
            {recentActivity.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{a.lesson}</p>
                    <p className="text-xs text-gray-400">{a.date}</p>
                  </div>
                </div>
                <span className={`font-bold text-lg ${a.score >= 80 ? 'text-green-600' : 'text-amber-500'}`}>
                  {a.score}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
