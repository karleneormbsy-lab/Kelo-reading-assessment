import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Star, Users, Zap } from 'lucide-react'

const steps = [
  { icon: '🎯', label: 'Assess',   href: '/placement' },
  { icon: '📍', label: 'Place',    href: '/placement' },
  { icon: '📈', label: 'Progress', href: '/signup'    },
  { icon: '🏆', label: 'Succeed',  href: '/signup'    },
]

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: '10-Step Structured Lessons',
    desc:  'Every lesson follows a structured 10-step model — from phonogram review to sentence dictation.',
    color: 'bg-brand-100 text-brand-700',
    href:  '/signup',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Interactive Activities',
    desc:  'Drag-and-drop phoneme segmentation, word building, flashcards, and more.',
    color: 'bg-gold-400/20 text-gold-600',
    href:  '/signup',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Gamified Progress',
    desc:  'Points, badges, streaks, and level-up moments keep young readers motivated.',
    color: 'bg-brand-100 text-brand-700',
    href:  '/signup',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Teacher Dashboard',
    desc:  'Assign lessons, track fluency growth, and get real-time alerts on at-risk students.',
    color: 'bg-gold-400/20 text-gold-600',
    href:  '/signup?role=teacher',
  },
]

const levels = [
  { num: 1, title: 'Foundations', focus: 'Short vowels, CVC words',           color: 'from-brand-600 to-brand-700', icon: '🌱' },
  { num: 2, title: 'Digraphs',    focus: 'sh, ch, th, wh, ff, ll, ss, ck',    color: 'from-brand-500 to-brand-600', icon: '🔵' },
  { num: 3, title: 'Long Vowels', focus: 'Silent e, ai, ay, ea, ee, oa',       color: 'from-brand-700 to-brand-800', icon: '⭐' },
  { num: 4, title: 'Syllables',   focus: 'Open/closed, vowel teams, suffixes', color: 'from-gold-500 to-gold-600',   icon: '🚀' },
  { num: 5, title: 'Advanced',    focus: 'Prefixes, suffixes, roots',           color: 'from-brand-800 to-brand-900', icon: '🌟' },
  { num: 6, title: 'Mastery',     focus: 'Multisyllabic words, fluency',        color: 'from-gold-400 to-gold-500',   icon: '🏆' },
]

const lessonSteps = [
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
]

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef9e7' }}>

      {/* ── Navbar ── */}
      <nav className="border-b border-brand-200/40 px-6 py-3 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-11 h-11 flex-shrink-0">
              <Image src="/images/mascot-thumb.png" alt="KELO mascot" fill className="object-contain" priority />
            </div>
            <div>
              <span className="text-xl font-display font-black text-brand-800 tracking-tight">KELO</span>
              <p className="text-xs text-brand-500 leading-none">Knowledge Empowers, Literacy Opens Doors</p>
            </div>
          </Link>
          <div className="flex gap-3">
            <Link href="/login"  className="px-4 py-2 text-brand-700 hover:text-brand-900 font-medium transition-colors">Log In</Link>
            <Link href="/signup" className="px-4 py-2 bg-brand-700 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <Link href="/placement" className="flex justify-center group">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-brand-300/50 transition-shadow duration-300">
            <Image
              src="/images/poster.png"
              alt="KELO Literacy Program — Knowledge Empowers, Literacy Opens Doors"
              width={500}
              height={400}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        <div>
          <Link href="/placement" className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6 hover:bg-brand-200 transition-colors">
            🇯🇲 Building Brighter Futures Through Literacy
          </Link>
          <h1 className="text-5xl md:text-6xl font-display font-black text-brand-900 leading-tight mb-4">
            Literacy<br />
            <span className="text-brand-600">Placement</span><br />
            Assessment
          </h1>
          <p className="text-lg text-brand-800/70 mb-8">
            Research-backed phonics instruction through interactive 10-step lessons, decodable passages, and real-time progress monitoring.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {steps.map((s, i) => (
              <Link key={i} href={s.href} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-brand-200 rounded-full text-sm font-semibold text-brand-700 shadow-sm hover:bg-brand-50 hover:border-brand-400 transition-colors">
                {s.icon} {s.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/placement"       className="px-8 py-4 bg-brand-700 hover:bg-brand-800 text-white rounded-2xl font-bold text-lg transition-colors shadow-md">🎯 Take Placement Test</Link>
            <Link href="/signup?role=teacher" className="px-8 py-4 bg-white border-2 border-brand-300 hover:border-brand-500 text-brand-700 rounded-2xl font-bold text-lg transition-colors">I'm a Teacher</Link>
          </div>
          <p className="text-sm text-brand-500 mt-4">Free 10-minute assessment · No account required to start</p>
        </div>
      </section>

      {/* ── Brand strip ── */}
      <section className="bg-brand-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <Link href="/signup" className="relative w-52 h-52 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl hover:opacity-90 transition-opacity">
            <Image src="/images/mascot.png" alt="KELO mascot" fill className="object-contain bg-white/10" />
          </Link>
          <div className="flex-1 text-center md:text-left">
            <p className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3">Our Promise</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
              {[
                { word: 'Read',  href: '/placement' },
                { word: 'Learn', href: '/signup'    },
                { word: 'Grow',  href: '/signup'    },
              ].map(({ word, href }) => (
                <Link key={word} href={href} className="px-5 py-2 bg-gold-400 text-brand-900 font-display font-black text-xl rounded-xl hover:bg-gold-500 transition-colors">
                  {word}
                </Link>
              ))}
            </div>
            <p className="text-brand-200 text-lg max-w-md">
              Every word you read takes you further. Education → Opportunity → Confidence → Success.
            </p>
            <p className="text-brand-400 text-sm mt-3 italic">Your future starts here. 🇯🇲</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20" style={{ backgroundColor: '#fdf0c2' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-black text-center text-brand-900 mb-12">
            Built on proven literacy science
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Link key={i} href={f.href} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 hover:-translate-y-1 transition-all duration-200 block">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-brand-900 mb-2">{f.title}</h3>
                <p className="text-brand-700/70 text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Levels ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-display font-black text-center text-brand-900 mb-3">6 Progressive Levels</h2>
        <p className="text-brand-700/60 text-center mb-12">From consonant-vowel-consonant words to multisyllabic mastery</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {levels.map(lvl => (
            <Link key={lvl.num} href="/placement" className={`bg-gradient-to-br ${lvl.color} rounded-2xl p-6 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block`}>
              <div className="text-3xl mb-2">{lvl.icon}</div>
              <p className="text-sm font-semibold opacity-80">Level {lvl.num}</p>
              <h3 className="text-xl font-display font-black mb-1">{lvl.title}</h3>
              <p className="text-sm opacity-80">{lvl.focus}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 10 Steps ── */}
      <section style={{ backgroundColor: '#fdf0c2' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-display font-black text-center text-brand-900 mb-3">Every Lesson. 10 Steps.</h2>
          <p className="text-brand-700/60 text-center mb-12">The same systematic structure every time — building automaticity through repetition.</p>
          <div className="flex flex-col gap-3">
            {lessonSteps.map(([num, title, desc]) => (
              <Link key={num} href="/signup" className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-700 text-white flex items-center justify-center font-display font-black text-sm">
                  {num}
                </div>
                <div>
                  <p className="font-bold text-brand-900">{title}</p>
                  <p className="text-brand-700/60 text-sm">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <Link href="/signup" className="relative w-48 h-48 flex-shrink-0 hover:opacity-90 transition-opacity">
            <Image src="/images/mascot-thumb.png" alt="KELO mascot thumbs up" fill className="object-contain drop-shadow-xl" />
          </Link>
          <div className="text-center md:text-left text-white">
            <h2 className="text-4xl font-display font-black mb-4">Ready to unlock reading?</h2>
            <p className="text-brand-200 mb-8 max-w-md">Free to get started. No credit card. Built for classrooms and home learners alike.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/placement" className="inline-block px-8 py-4 bg-gold-400 text-brand-900 rounded-2xl font-bold text-lg hover:bg-gold-500 transition-colors shadow-md">
                🎯 Start Placement Test
              </Link>
              <Link href="/signup" className="inline-block px-8 py-4 bg-white/20 text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/30 transition-colors">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-200 text-center py-8 text-sm text-brand-500" style={{ backgroundColor: '#fef9e7' }}>
        <div className="flex justify-center gap-6 mb-3">
          <Link href="/placement" className="hover:text-brand-700 transition-colors">Take the Test</Link>
          <Link href="/signup"    className="hover:text-brand-700 transition-colors">Sign Up</Link>
          <Link href="/login"     className="hover:text-brand-700 transition-colors">Log In</Link>
          <Link href="/signup?role=teacher" className="hover:text-brand-700 transition-colors">For Teachers</Link>
        </div>
        KELO Literacy Program © {new Date().getFullYear()} · <em>Knowledge Empowers, Literacy Opens Doors</em> 🇯🇲
      </footer>
    </div>
  )
}
