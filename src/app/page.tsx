import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Star, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '10-Step Structured Lessons',
    desc: 'Every lesson follows a structured 10-step model — from phonogram review to sentence dictation.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Interactive Activities',
    desc: 'Drag-and-drop phoneme segmentation, word building, flashcards, and more.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Gamified Progress',
    desc: 'Points, badges, streaks, and level-up moments keep young readers motivated.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Teacher Dashboard',
    desc: 'Assign lessons, track fluency growth, and get real-time alerts on at-risk students.',
    color: 'bg-green-50 text-green-600',
  },
]

const levels = [
  { num: 1, title: 'Foundations',  focus: 'Short vowels, CVC words',            color: 'from-green-400 to-emerald-500',  icon: '🌱' },
  { num: 2, title: 'Digraphs',     focus: 'sh, ch, th, wh, ff, ll, ss, ck',     color: 'from-blue-400 to-brand-500',     icon: '🔵' },
  { num: 3, title: 'Long Vowels',  focus: 'Silent e, ai, ay, ea, ee, oa',        color: 'from-purple-400 to-violet-500',  icon: '⭐' },
  { num: 4, title: 'Syllables',    focus: 'Open/closed, vowel teams, suffixes',  color: 'from-orange-400 to-amber-500',   icon: '🚀' },
  { num: 5, title: 'Advanced',     focus: 'Prefixes, suffixes, roots',            color: 'from-red-400 to-rose-500',      icon: '🌟' },
  { num: 6, title: 'Mastery',      focus: 'Multisyllabic words, fluency',         color: 'from-yellow-400 to-amber-400',  icon: '🏆' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Navbar ── */}
      <nav className="border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo + mascot thumb */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/mascot-thumb.png"
                alt="KELO mascot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-display font-black text-gray-900 tracking-tight">KELO</span>
              <p className="text-xs text-gray-400 leading-none">Knowledge Empowers, Literacy Opens Doors</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Log In
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero — split layout ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Left: text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-6">
            🎓 Knowledge Empowers · Literacy Opens Doors
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 leading-tight mb-6">
            Every child can<br />
            <span className="text-brand-600">learn to read.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            KELO Literacy Program delivers research-backed phonics instruction through interactive
            10-step lessons, decodable passages, and real-time progress monitoring.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/placement" className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg transition-colors flex items-center gap-2">
              🎯 Take Placement Test
            </Link>
            <Link href="/signup?role=teacher" className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-brand-300 text-gray-700 rounded-2xl font-bold text-lg transition-colors">
              I'm a Teacher
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">Free 10-minute assessment · No account required to start</p>
        </div>

        {/* Right: mascot */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-square">
            <Image
              src="/images/mascot.png"
              alt="KELO mascot — Knowledge Empowers, Literacy Opens Doors"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Brand strip: Read · Learn · Grow ── */}
      <section className="bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

          {/* Poster */}
          <div className="relative w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/poster.png"
              alt="KELO Literacy Program poster"
              fill
              className="object-cover"
            />
          </div>

          {/* Mottos */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Promise</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
              {['Read', 'Learn', 'Grow'].map(word => (
                <span
                  key={word}
                  className="px-5 py-2 bg-brand-600 text-white font-display font-black text-xl rounded-xl"
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-lg max-w-md">
              Every word you read takes you further. Education → Opportunity → Confidence → Success.
            </p>
            <p className="text-gray-500 text-sm mt-3 italic">Your future starts here.</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-black text-center text-gray-900 mb-12">
            Built on proven literacy science
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Levels ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-display font-black text-center text-gray-900 mb-3">
          6 Progressive Levels
        </h2>
        <p className="text-gray-500 text-center mb-12">From consonant-vowel-consonant words to multisyllabic mastery</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {levels.map(lvl => (
            <div key={lvl.num} className={`bg-gradient-to-br ${lvl.color} rounded-2xl p-6 text-white`}>
              <div className="text-3xl mb-2">{lvl.icon}</div>
              <p className="text-sm font-semibold opacity-80">Level {lvl.num}</p>
              <h3 className="text-xl font-display font-black mb-1">{lvl.title}</h3>
              <p className="text-sm opacity-80">{lvl.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10 Steps ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display font-black text-center text-gray-900 mb-3">
            Every Lesson. 10 Steps.
          </h2>
          <p className="text-gray-500 text-center mb-12">The same systematic structure every time — building automaticity through repetition.</p>
          <div className="flex flex-col gap-3">
            {[
              ['1',  'Phonogram Review',       'Flashcard review of sounds — auditory + visual'],
              ['2',  'Phonological Awareness', 'Tap and segment phonemes in spoken words'],
              ['3',  'Word Building',          'Arrange letter tiles to build target words'],
              ['4',  'Decoding',               'Read word lists and decodable sentences'],
              ['5',  'Pre-Reading',            'Preview vocabulary before the passage'],
              ['6',  'Reading Passage',        'Read a phonics-controlled story with audio'],
              ['7',  'Sound Dictation',        'Write the letters that match each sound heard'],
              ['8',  'Pre-Spelling',           'Practice segmenting before formal spelling'],
              ['9',  'Spelling',               'Spell dictated words using target phonogram'],
              ['10', 'Sentence Dictation',     'Write a complete sentence from dictation'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-600 text-white flex items-center justify-center font-display font-black text-sm">
                  {num}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{title}</p>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA with mascot ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-8">

          {/* Mascot giving thumbs up */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src="/images/mascot-thumb.png"
              alt="KELO mascot thumbs up"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>

          <div className="text-center md:text-left text-white">
            <h2 className="text-4xl font-display font-black mb-4">Ready to unlock reading?</h2>
            <p className="text-brand-200 mb-8 max-w-md">
              Free to get started. No credit card. Built for classrooms and home learners alike.
            </p>
            <Link href="/signup" className="inline-block px-10 py-4 bg-white text-brand-700 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-colors">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 text-center py-8 text-sm text-gray-400">
        KELO Literacy Program © {new Date().getFullYear()} · <em>Knowledge Empowers, Literacy Opens Doors</em>
      </footer>
    </div>
  )
}
