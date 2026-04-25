'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flame, Gift, Lock, CheckCircle2, Star, Timer } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'

// ── Mock data (replace with Supabase) ───────────────────────────────────────
const student = {
  name: 'Amara',
  grade: '2',
  stars: 340,
  streak: 5,
  dailyProgress: 10,   // minutes read today
  dailyGoal: 15,
}

const WORLDS = [
  {
    id: 'phonics_island',
    title: 'Phonics Island',
    emoji: '🏝️',
    color: '#1E88E5',
    shadow: '#1565C0',
    description: 'Short vowels & CVC words',
    levelNum: 1,
    total: 10,
    completed: 0,
    unlocked: true,
  },
  {
    id: 'digraphs_forest',
    title: 'Digraphs Forest',
    emoji: '🌲',
    color: '#4CAF50',
    shadow: '#2E7D32',
    description: 'sh, ch, th, wh & more',
    levelNum: 2,
    total: 7,
    completed: 2,
    unlocked: true,
  },
  {
    id: 'long_vowels_castle',
    title: 'Long Vowels Castle',
    emoji: '🏰',
    color: '#7E57C2',
    shadow: '#4527A0',
    description: 'Silent-e & vowel teams',
    levelNum: 3,
    total: 6,
    completed: 0,
    unlocked: true,
  },
]

const positions = ['self-start ml-10', 'self-end mr-10', 'self-start ml-10']

// ── Sub-components ───────────────────────────────────────────────────────────

function WorldNode({
  world,
  index,
}: {
  world: typeof WORLDS[0]
  index: number
}) {
  const progress  = world.total > 0 ? (world.completed / world.total) * 100 : 0
  const isComplete = progress >= 100
  const align     = positions[index] || 'self-center'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 200 }}
      className={`flex flex-col items-center gap-2 ${align} w-36`}
    >
      <Link href={`/levels/${world.levelNum}`} className="flex flex-col items-center">
        <motion.div
          className="relative flex flex-col items-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Pulse ring for active/unlocked */}
          {world.unlocked && !isComplete && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: world.color }}
            />
          )}

          {/* Main circle */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4 border-white/30 relative z-10"
            style={{
              background: world.unlocked
                ? `linear-gradient(145deg, ${world.color}, ${world.shadow})`
                : '#374151',
              boxShadow: world.unlocked ? `0 8px 24px ${world.color}66` : 'none',
            }}
          >
            {world.unlocked ? world.emoji : <Lock className="w-8 h-8 text-gray-400" />}

            {isComplete && (
              <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-kelo-green border-2 border-white flex items-center justify-center z-20">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center z-20 text-white text-[10px] font-display font-bold"
              style={{ background: world.shadow }}
            >
              {world.levelNum}
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Label */}
      <div className="text-center">
        <p className="font-display font-bold text-sm text-white leading-tight">{world.title}</p>
        {world.unlocked && (
          <p className="text-[10px] text-white/60 mt-0.5">{world.completed}/{world.total} done</p>
        )}
      </div>

      {/* Progress bar */}
      {world.unlocked && world.total > 0 && (
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${progress}%`, background: world.color }}
          />
        </div>
      )}
    </motion.div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function StudentDashboard() {
  const dailyPct = Math.min((student.dailyProgress / student.dailyGoal) * 100, 100)

  return (
    <div
      className="min-h-screen pb-24"
      style={{ background: 'linear-gradient(180deg, #1a2744 0%, #0f3460 40%, #1a5276 100%)' }}
    >
      {/* ── Top bar ── */}
      <div className="max-w-lg mx-auto px-4 pt-5 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs font-display">Welcome back!</p>
          <h1 className="text-white font-display font-black text-2xl leading-tight">
            Hey, {student.name}! 👋
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5 border border-kelo-gold/30">
            <Star className="w-4 h-4 text-kelo-gold fill-kelo-gold" />
            <span className="font-display font-bold text-sm text-white">{student.stars}</span>
          </div>
        </div>
      </div>

      {/* ── Character greeting ── */}
      <div className="max-w-lg mx-auto px-4 pt-4 flex items-end gap-3">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl flex-shrink-0 drop-shadow-xl"
        >
          🧒🏾
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <div className="relative bg-white rounded-2xl rounded-bl-none px-4 py-2.5 shadow-md max-w-xs">
            <p className="font-display font-bold text-kelo-navy text-sm">
              Ready for today&apos;s adventure?
            </p>
            <p className="text-xs text-gray-500 font-body">Keep reading and earn stars! ⭐</p>
            {/* Bubble tail */}
            <div
              className="absolute bottom-0 left-0 w-0 h-0"
              style={{
                transform: 'translate(-6px, 4px)',
                borderTop: '8px solid white',
                borderLeft: '8px solid transparent',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Daily Quest + Streak row ── */}
      <div className="px-4 pt-4 flex gap-3 max-w-lg mx-auto">
        {/* Daily quest card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 rounded-2xl p-4 border border-kelo-gold/30"
          style={{ background: 'rgba(255,193,7,0.12)' }}
        >
          <div className="flex items-center gap-1.5 mb-1">
            <Gift className="w-3.5 h-3.5 text-kelo-gold" />
            <span className="text-[10px] font-display font-bold text-kelo-gold uppercase tracking-wide">Daily Quest</span>
          </div>
          <p className="font-display font-bold text-white text-sm leading-snug mb-2">
            {dailyPct >= 100 ? '🎉 Complete!' : 'Read 15 min today!'}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-3 h-3 text-white/50" />
            <span className="text-[11px] text-white/60">{student.dailyProgress}/{student.dailyGoal} min</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${dailyPct}%` }}
              transition={{ duration: 1 }}
              className="h-full rounded-full"
              style={{ background: '#FFC107' }}
            />
          </div>
          {dailyPct < 100 && (
            <Link href="/levels/1">
              <button
                className="mt-3 w-full rounded-xl font-display font-bold text-xs h-8 transition-opacity hover:opacity-90"
                style={{ background: '#FFC107', color: '#1a2744' }}
              >
                Keep it up! →
              </button>
            </Link>
          )}
        </motion.div>

        {/* Streak card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="w-24 rounded-2xl p-4 border border-kelo-red/30 flex flex-col items-center justify-center gap-1"
          style={{ background: 'rgba(229,57,53,0.12)' }}
        >
          <Flame className="w-7 h-7 text-kelo-red" />
          <p className="font-display font-bold text-white text-2xl leading-none">{student.streak}</p>
          <p className="text-[10px] text-white/60 font-display text-center leading-tight">Day Streak</p>
        </motion.div>
      </div>

      {/* ── Quest Map ── */}
      <div className="px-4 pt-5 max-w-lg mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🗺️</span>
          <h2 className="font-display font-bold text-white text-lg">Your Quest Map</h2>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden p-6 min-h-[420px]"
          style={{ background: 'linear-gradient(180deg, #0d7377 0%, #14a085 50%, #1a8a5a 100%)' }}
        >
          {/* Decorative emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <span className="absolute top-4 left-4 text-4xl opacity-30">🌴</span>
            <span className="absolute top-8 right-6 text-3xl opacity-25">🌴</span>
            <span className="absolute bottom-14 left-8 text-2xl opacity-20">🌊</span>
            <span className="absolute top-1/2 right-4 text-3xl opacity-15">⭐</span>
            <span className="absolute bottom-4 right-8 text-2xl opacity-30">🌊</span>
            <span className="absolute top-1/3 left-3 text-xl opacity-20">🦜</span>
          </div>

          {/* Lexi the parrot guide */}
          <motion.div
            className="absolute top-3 right-4 z-20 flex flex-col items-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="w-13 h-13 rounded-full border-2 border-white/40 shadow-xl flex items-center justify-center text-3xl"
              style={{ background: 'linear-gradient(135deg, #1E88E5, #7E57C2)', width: 52, height: 52 }}
            >
              🦜
            </div>
            <div className="mt-1 rounded-xl px-2 py-0.5 border border-white/30" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <span className="text-white text-[9px] font-display font-bold">Lexi Guide!</span>
            </div>
          </motion.div>

          {/* Winding dotted path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 420" preserveAspectRatio="none">
            <path
              d="M 200 50 C 100 80, 80 140, 180 180 C 280 220, 260 290, 120 330 C 80 350, 100 390, 160 410"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="6"
              strokeDasharray="12 8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* World nodes */}
          <div className="relative z-10 flex flex-col gap-8">
            {WORLDS.map((world, i) => (
              <WorldNode key={world.id} world={world} index={i} />
            ))}

            {/* Coming Soon node */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="self-end mr-8 flex flex-col items-center gap-2 w-36"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl border-4 border-dashed border-white/20"
                style={{ background: 'rgba(26,39,68,0.6)' }}
              >
                🔒
              </div>
              <p className="font-display font-bold text-sm text-white/40 text-center leading-tight">
                More coming<br />soon…
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Quick links ── */}
      <div className="px-4 pt-5 max-w-lg mx-auto">
        <div className="flex gap-3">
          <Link href="/sight-words" className="flex-1">
            <div className="rounded-2xl p-4 border border-white/20 flex items-center gap-3 transition-colors hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <span className="text-2xl">👁️</span>
              <div>
                <p className="text-white font-display font-bold text-sm">Sight Words</p>
                <p className="text-white/50 text-xs">Flashcard practice</p>
              </div>
            </div>
          </Link>
          <Link href="/placement" className="flex-1">
            <div className="rounded-2xl p-4 border border-white/20 flex items-center gap-3 transition-colors hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <span className="text-2xl">🎯</span>
              <div>
                <p className="text-white font-display font-bold text-sm">Placement</p>
                <p className="text-white/50 text-xs">Check your level</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Badges preview ── */}
      <div className="px-4 pt-5 max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-bold text-white">My Badges</h2>
          <span className="text-white/40 text-xs">3 earned</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[
            { emoji: '⭐', name: 'Reading Star', earned: true  },
            { emoji: '📝', name: 'Word Master',  earned: true  },
            { emoji: '🗣️', name: 'Phonics Pro',  earned: true  },
            { emoji: '🏰', name: 'Story Explorer', earned: false },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border transition-all ${
                badge.earned
                  ? 'border-kelo-gold/40 bg-kelo-gold/10'
                  : 'border-white/10 bg-white/5 opacity-40'
              }`}
            >
              <span className="text-2xl">{badge.emoji}</span>
              <p className="text-[9px] font-display font-bold text-white text-center leading-tight">{badge.name}</p>
              {badge.earned && (
                <span className="text-[9px] text-kelo-gold font-bold">Earned!</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
