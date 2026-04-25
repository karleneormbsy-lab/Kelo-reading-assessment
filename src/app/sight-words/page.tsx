'use client'

import Link from 'next/link'
import { ChevronLeft, BookOpen, Star } from 'lucide-react'
import { SIGHT_WORD_LISTS, groupByCategory, getListsByLevel } from '@/data/sightWords'

const CATEGORY_ICONS: Record<string, string> = {
  'Core Words':   '📖',
  'Themed Words': '🌟',
  'Contractions': '🔗',
  'Opposites':    '↔️',
}

const CATEGORY_COLORS: Record<string, string> = {
  'Core Words':   'from-brand-500 to-violet-500',
  'Themed Words': 'from-amber-400 to-orange-500',
  'Contractions': 'from-teal-400 to-cyan-500',
  'Opposites':    'from-rose-400 to-pink-500',
}

function LevelSection({ level }: { level: 1 | 2 }) {
  const lists = getListsByLevel(level)
  const grouped = groupByCategory(lists)
  const totalWords = lists.reduce((sum, l) => sum + l.words.length, 0)

  return (
    <section className="mb-12">
      <div className={`rounded-2xl p-5 mb-6 bg-gradient-to-r ${level === 1 ? 'from-brand-600 to-violet-600' : 'from-amber-500 to-orange-500'} text-white`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{level === 1 ? '⭐' : '🚀'}</span>
          <div>
            <h2 className="text-2xl font-display font-black">Level {level} Sight Words</h2>
            <p className="text-white/80 text-sm">{lists.length} lists · {totalWords} total words</p>
          </div>
        </div>
      </div>

      {Object.entries(grouped).map(([category, catLists]) => (
        <div key={category} className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{CATEGORY_ICONS[category] ?? '📚'}</span>
            <h3 className="font-display font-bold text-gray-700 text-lg">{category}</h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{catLists.length} lists</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {catLists.map(list => (
              <Link
                key={list.id}
                href={`/sight-words/${list.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-300 transition-all p-4 flex flex-col gap-2"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${CATEGORY_COLORS[category] ?? 'from-brand-500 to-violet-500'} flex items-center justify-center text-white font-display font-black text-sm flex-shrink-0`}>
                  {list.words.length}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm group-hover:text-brand-700 transition-colors leading-tight">{list.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5 truncate">{list.words.slice(0, 3).join(', ')}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default function SightWordsPage() {
  const total = SIGHT_WORD_LISTS.reduce((s, l) => s + l.words.length, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-600 to-violet-700 text-white px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/dashboard" className="flex items-center gap-1 text-white/80 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">👁️</span>
            <div>
              <h1 className="text-3xl font-display font-black">Sight Words</h1>
              <p className="text-white/80 text-sm mt-1">{SIGHT_WORD_LISTS.length} lists · {total} words to master</p>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm max-w-xl">
            Practice high-frequency words with flashcards. Tap any list to start!
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <LevelSection level={1} />
        <LevelSection level={2} />
      </div>
    </div>
  )
}
