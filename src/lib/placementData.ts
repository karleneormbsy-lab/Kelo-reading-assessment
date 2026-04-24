// ─────────────────────────────────────────────────────────────────────────────
// S.P.I.R.E.-Aligned Placement Test Data
// Mirrors the structure of the official SPIRE 4E Placement Test:
//   Section A – Letter Names
//   Section B – Letter Sounds / Phonograms
//   Section C – Nonsense Words (pure decoding, no sight-word advantage)
//   Section D – Real Word Reading (leveled)
//   Section E – Oral Reading Fluency (passage + timer)
//   Section F – Spelling Dictation
// ─────────────────────────────────────────────────────────────────────────────

export interface PlacementItem {
  id:         string
  prompt:     string        // what the student sees / hears
  answer:     string        // expected response (lowercase, trimmed)
  level:      number        // 1–6 curriculum level this maps to
  hint?:      string
  image?:     string        // optional image URL
}

export interface PlacementSection {
  id:          string
  title:       string
  instruction: string       // shown to student
  teacherNote: string       // shown to teacher / AI context
  type:        'letter_name' | 'letter_sound' | 'nonsense_word' | 'real_word' | 'passage' | 'spelling'
  items:       PlacementItem[]
  timeLimit?:  number       // seconds (for passage section)
  passMark:    number       // % correct to "pass" this section
}

// ── Section A: Letter Names ────────────────────────────────────────────────
export const SECTION_LETTER_NAMES: PlacementSection = {
  id: 'letter_names',
  title: 'Section A — Letter Names',
  instruction: 'What is the name of this letter?',
  teacherNote: 'Student identifies uppercase and lowercase letter names. Foundational literacy pre-skill.',
  type: 'letter_name',
  passMark: 80,
  items: [
    { id: 'ln-01', prompt: 'M', answer: 'm',  level: 1 },
    { id: 'ln-02', prompt: 'S', answer: 's',  level: 1 },
    { id: 'ln-03', prompt: 'F', answer: 'f',  level: 1 },
    { id: 'ln-04', prompt: 'T', answer: 't',  level: 1 },
    { id: 'ln-05', prompt: 'b', answer: 'b',  level: 1 },
    { id: 'ln-06', prompt: 'D', answer: 'd',  level: 1 },
    { id: 'ln-07', prompt: 'p', answer: 'p',  level: 1 },
    { id: 'ln-08', prompt: 'G', answer: 'g',  level: 1 },
    { id: 'ln-09', prompt: 'J', answer: 'j',  level: 1 },
    { id: 'ln-10', prompt: 'k', answer: 'k',  level: 1 },
  ],
}

// ── Section B: Phonogram Sounds ────────────────────────────────────────────
export const SECTION_LETTER_SOUNDS: PlacementSection = {
  id: 'letter_sounds',
  title: 'Section B — Letter Sounds',
  instruction: 'What sound does this make?',
  teacherNote: 'Student identifies the phoneme for each grapheme. Tests phonics knowledge across levels.',
  type: 'letter_sound',
  passMark: 75,
  items: [
    // Level 1 — single consonants & short vowels
    { id: 'ls-01', prompt: 'm',  answer: '/m/',  level: 1, hint: 'mmm...' },
    { id: 'ls-02', prompt: 'a',  answer: '/a/',  level: 1, hint: 'short a as in cat' },
    { id: 'ls-03', prompt: 's',  answer: '/s/',  level: 1 },
    { id: 'ls-04', prompt: 'i',  answer: '/i/',  level: 1, hint: 'short i as in sit' },
    { id: 'ls-05', prompt: 't',  answer: '/t/',  level: 1 },
    { id: 'ls-06', prompt: 'o',  answer: '/o/',  level: 1, hint: 'short o as in hop' },
    { id: 'ls-07', prompt: 'n',  answer: '/n/',  level: 1 },
    { id: 'ls-08', prompt: 'u',  answer: '/u/',  level: 1, hint: 'short u as in cup' },
    { id: 'ls-09', prompt: 'e',  answer: '/e/',  level: 1, hint: 'short e as in bed' },
    { id: 'ls-10', prompt: 'p',  answer: '/p/',  level: 1 },
    // Level 2 — digraphs & double endings
    { id: 'ls-11', prompt: 'sh', answer: '/sh/', level: 2 },
    { id: 'ls-12', prompt: 'ch', answer: '/ch/', level: 2 },
    { id: 'ls-13', prompt: 'th', answer: '/th/', level: 2 },
    { id: 'ls-14', prompt: 'wh', answer: '/wh/', level: 2 },
    { id: 'ls-15', prompt: 'ck', answer: '/k/',  level: 2, hint: 'same as k' },
    // Level 3 — vowel teams
    { id: 'ls-16', prompt: 'ai', answer: '/ay/', level: 3 },
    { id: 'ls-17', prompt: 'ee', answer: '/ee/', level: 3 },
    { id: 'ls-18', prompt: 'oa', answer: '/oh/', level: 3 },
    { id: 'ls-19', prompt: 'ar', answer: '/ar/', level: 3 },
    { id: 'ls-20', prompt: 'or', answer: '/or/', level: 3 },
  ],
}

// ── Section C: Nonsense Words (Decoding) ─────────────────────────────────
export const SECTION_NONSENSE_WORDS: PlacementSection = {
  id: 'nonsense_words',
  title: 'Section C — Nonsense Words',
  instruction: 'These are made-up words. Read each one using phonics.',
  teacherNote: 'Nonsense words isolate decoding skill — the student cannot rely on memorized words. Level 1 = CVC, Level 2 = digraphs/blends, Level 3 = long vowels.',
  type: 'nonsense_word',
  passMark: 70,
  items: [
    // Level 1 — CVC nonsense words
    { id: 'nw-01', prompt: 'vat',   answer: 'vat',   level: 1 },
    { id: 'nw-02', prompt: 'dup',   answer: 'dup',   level: 1 },
    { id: 'nw-03', prompt: 'fib',   answer: 'fib',   level: 1 },
    { id: 'nw-04', prompt: 'mol',   answer: 'mol',   level: 1 },
    { id: 'nw-05', prompt: 'weg',   answer: 'weg',   level: 1 },
    // Level 2 — digraph nonsense words
    { id: 'nw-06', prompt: 'shig',  answer: 'shig',  level: 2 },
    { id: 'nw-07', prompt: 'chob',  answer: 'chob',  level: 2 },
    { id: 'nw-08', prompt: 'thep',  answer: 'thep',  level: 2 },
    { id: 'nw-09', prompt: 'blust', answer: 'blust', level: 2 },
    { id: 'nw-10', prompt: 'freck', answer: 'freck', level: 2 },
    // Level 3 — long vowel nonsense words
    { id: 'nw-11', prompt: 'vake',  answer: 'vake',  level: 3 },
    { id: 'nw-12', prompt: 'fime',  answer: 'fime',  level: 3 },
    { id: 'nw-13', prompt: 'boan',  answer: 'boan',  level: 3 },
    { id: 'nw-14', prompt: 'sneel', answer: 'sneel', level: 3 },
    { id: 'nw-15', prompt: 'troat', answer: 'troat', level: 3 },
  ],
}

// ── Section D: Real Word Reading ────────────────────────────────────────
export const SECTION_REAL_WORDS: PlacementSection = {
  id: 'real_words',
  title: 'Section D — Word Reading',
  instruction: 'Read each word.',
  teacherNote: 'Graded real-word lists. Level 1 = CVC + sight words, Level 2 = digraphs/blends, Level 3 = long vowels, Level 4 = complex patterns.',
  type: 'real_word',
  passMark: 80,
  items: [
    // Level 1
    { id: 'rw-01', prompt: 'sit',   answer: 'sit',   level: 1 },
    { id: 'rw-02', prompt: 'map',   answer: 'map',   level: 1 },
    { id: 'rw-03', prompt: 'cup',   answer: 'cup',   level: 1 },
    { id: 'rw-04', prompt: 'pet',   answer: 'pet',   level: 1 },
    { id: 'rw-05', prompt: 'hot',   answer: 'hot',   level: 1 },
    // Level 2
    { id: 'rw-06', prompt: 'ship',  answer: 'ship',  level: 2 },
    { id: 'rw-07', prompt: 'check', answer: 'check', level: 2 },
    { id: 'rw-08', prompt: 'blend', answer: 'blend', level: 2 },
    { id: 'rw-09', prompt: 'flash', answer: 'flash', level: 2 },
    { id: 'rw-10', prompt: 'crisp', answer: 'crisp', level: 2 },
    // Level 3
    { id: 'rw-11', prompt: 'lake',  answer: 'lake',  level: 3 },
    { id: 'rw-12', prompt: 'train', answer: 'train', level: 3 },
    { id: 'rw-13', prompt: 'greet', answer: 'greet', level: 3 },
    { id: 'rw-14', prompt: 'float', answer: 'float', level: 3 },
    { id: 'rw-15', prompt: 'sport', answer: 'sport', level: 3 },
    // Level 4
    { id: 'rw-16', prompt: 'invite',    answer: 'invite',    level: 4 },
    { id: 'rw-17', prompt: 'rainfall',  answer: 'rainfall',  level: 4 },
    { id: 'rw-18', prompt: 'contest',   answer: 'contest',   level: 4 },
    { id: 'rw-19', prompt: 'merchant',  answer: 'merchant',  level: 4 },
    { id: 'rw-20', prompt: 'displease', answer: 'displease', level: 4 },
  ],
}

// ── Section E: Oral Reading Fluency ────────────────────────────────────
export const SECTION_PASSAGES: PlacementSection = {
  id: 'passage',
  title: 'Section E — Reading Passage',
  instruction: 'Read this passage as smoothly and carefully as you can.',
  teacherNote: 'Timed 1-minute reading. Count words correct per minute (WCPM). Level 1 passage = ~50 WCPM benchmark, Level 3 = ~90 WCPM.',
  type: 'passage',
  passMark: 70,
  timeLimit: 60,
  items: [
    {
      id: 'pass-1',
      prompt: 'Sam has a big red bag. He puts his cap in the bag. He puts his dog in the bag. The bag is so full! Sam sat on the bag and it went flat. The dog got mad and ran off fast.',
      answer: '',
      level: 1,
      hint: '~40 words · CVC · Benchmark: 40 WCPM',
    },
    {
      id: 'pass-2',
      prompt: 'Shelly and her dad went to the fish shop on the hill. They had fresh fish and chips on the deck. A big ship went by on the water. Shelly wished she was on the ship. She ran to the end of the dock and waved at the ship.',
      answer: '',
      level: 2,
      hint: '~50 words · digraphs/blends · Benchmark: 65 WCPM',
    },
    {
      id: 'pass-3',
      prompt: 'The lake was still and bright in the morning light. Jake and his dog raced along the grassy trail near the shore. Jake hoped to find shells and smooth stones. He made a wish and skipped a stone five times. The dog barked and splashed in the cool water.',
      answer: '',
      level: 3,
      hint: '~55 words · long vowels/vowel teams · Benchmark: 90 WCPM',
    },
  ],
}

// ── Section F: Spelling Dictation ──────────────────────────────────────
export const SECTION_SPELLING: PlacementSection = {
  id: 'spelling',
  title: 'Section F — Spelling',
  instruction: 'Listen to each word. Write the correct spelling.',
  teacherNote: 'Dictated spelling by level. Tests whether student can apply phonics rules in production (not just recognition).',
  type: 'spelling',
  passMark: 70,
  items: [
    // Level 1 — CVC
    { id: 'sp-01', prompt: 'map',   answer: 'map',   level: 1 },
    { id: 'sp-02', prompt: 'sit',   answer: 'sit',   level: 1 },
    { id: 'sp-03', prompt: 'hot',   answer: 'hot',   level: 1 },
    // Level 2 — digraphs/blends
    { id: 'sp-04', prompt: 'ship',  answer: 'ship',  level: 2 },
    { id: 'sp-05', prompt: 'check', answer: 'check', level: 2 },
    { id: 'sp-06', prompt: 'blend', answer: 'blend', level: 2 },
    // Level 3 — long vowels
    { id: 'sp-07', prompt: 'lake',  answer: 'lake',  level: 3 },
    { id: 'sp-08', prompt: 'train', answer: 'train', level: 3 },
    { id: 'sp-09', prompt: 'float', answer: 'float', level: 3 },
    // Level 4 — multisyllabic
    { id: 'sp-10', prompt: 'contest',  answer: 'contest',  level: 4 },
    { id: 'sp-11', prompt: 'rainfall', answer: 'rainfall', level: 4 },
    { id: 'sp-12', prompt: 'invite',   answer: 'invite',   level: 4 },
  ],
}

export const ALL_SECTIONS: PlacementSection[] = [
  SECTION_LETTER_NAMES,
  SECTION_LETTER_SOUNDS,
  SECTION_NONSENSE_WORDS,
  SECTION_REAL_WORDS,
  SECTION_PASSAGES,
  SECTION_SPELLING,
]

// ── Scoring helpers ────────────────────────────────────────────────────
export interface SectionResult {
  sectionId:    string
  responses:    { itemId: string; response: string; correct: boolean; level: number }[]
  score:        number    // 0–100
  wcpm?:        number    // only for passage section
  timeSpent:    number    // seconds
}

export function scoreSection(section: PlacementSection, responses: Record<string, string>): SectionResult {
  const results = section.items.map(item => {
    const r = (responses[item.id] ?? '').toLowerCase().trim()
    const a = item.answer.toLowerCase().trim()
    // For passage section, mark correct if they wrote anything (scored separately via WCPM)
    const correct = section.type === 'passage' ? r.length > 0 : r === a
    return { itemId: item.id, response: r, correct, level: item.level }
  })
  const score = section.type === 'passage'
    ? 100
    : Math.round((results.filter(r => r.correct).length / results.length) * 100)

  return { sectionId: section.id, responses: results, score, timeSpent: 0 }
}

// Determine the highest level where student scored ≥ passMark
export function computeRecommendedLevel(results: SectionResult[]): number {
  const byLevel: Record<number, { correct: number; total: number }> = {}

  for (const section of results) {
    for (const r of section.responses) {
      if (!byLevel[r.level]) byLevel[r.level] = { correct: 0, total: 0 }
      byLevel[r.level].total++
      if (r.correct) byLevel[r.level].correct++
    }
  }

  let recommended = 1
  for (let lvl = 1; lvl <= 6; lvl++) {
    const data = byLevel[lvl]
    if (!data) break
    const pct = (data.correct / data.total) * 100
    if (pct >= 70) recommended = lvl
    else break
  }

  return recommended
}
