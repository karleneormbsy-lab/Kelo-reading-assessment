// ─────────────────────────────────────────────
// Core Domain Types
// ─────────────────────────────────────────────

export type UserRole = 'student' | 'teacher' | 'admin'

export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: UserRole
  created_at: string
}

export interface StudentProfile {
  id: string
  teacher_id?: string
  grade: string
  current_level: number
  current_lesson: number
  total_points: number
  streak_days: number
  last_active?: string
}

export interface TeacherProfile {
  id: string
  school?: string
  grade_range: string[]
}

// ─────────────────────────────────────────────
// Curriculum Types
// ─────────────────────────────────────────────

export interface Level {
  id: number
  number: number
  title: string
  description: string
  phonics_focus: string[]
  color: string
  icon: string
}

export interface Lesson {
  id: string
  level_id: number
  lesson_number: number
  title: string
  phonogram: string
  phonics_rule: string
  keywords: string[]
  is_reinforcing: boolean
  mastery_threshold: number
  estimated_minutes: number
}

export type StepType =
  | 'phonogram_review'
  | 'phonological_awareness'
  | 'word_building'
  | 'decoding'
  | 'pre_reading'
  | 'reading_passage'
  | 'sound_dictation'
  | 'pre_spelling'
  | 'spelling'
  | 'sentence_dictation'
  | 'picture_matching'

export interface LessonStep {
  id: string
  lesson_id: string
  step_number: number
  step_type: StepType
  title: string
  instructions: string
  content: StepContent
  audio_url?: string
  time_limit?: number
  points: number
}

// ─────────────────────────────────────────────
// Step Content (discriminated union per step type)
// ─────────────────────────────────────────────

export type StepContent =
  | PhonogramReviewContent
  | PhonologicalAwarenessContent
  | WordBuildingContent
  | DecodingContent
  | PreReadingContent
  | ReadingPassageContent
  | DictationContent
  | SpellingContent
  | PictureMatchingContent

export interface PhonogramReviewContent {
  type: 'phonogram_review'
  flashcards: Flashcard[]
}

export interface Flashcard {
  id: string
  grapheme: string        // written form: 'sh'
  phoneme: string         // sound description: '/sh/'
  example_word: string    // 'ship'
  example_image?: string
  audio_url?: string
  back_text?: string      // optional hint
}

export interface PhonologicalAwarenessContent {
  type: 'phonological_awareness'
  activity: 'segment' | 'blend' | 'manipulate'
  words: PhonemeWord[]
}

export interface PhonemeWord {
  word: string
  phonemes: string[]   // ['sh','i','p']
  syllables: string[]  // ['ship']
  audio_url?: string
}

export interface WordBuildingContent {
  type: 'word_building'
  letter_bank: string[]
  target_words: string[]
  allow_extra: boolean
}

export interface DecodingContent {
  type: 'decoding'
  word_columns: string[][]
  sentences: string[]
}

export interface PreReadingContent {
  type: 'pre_reading'
  vocabulary: VocabWord[]
}

export interface VocabWord {
  word: string
  definition: string
  image_url?: string
  sentence: string
}

export interface ReadingPassageContent {
  type: 'reading_passage'
  passage_id: string
  title: string
  body: string
  highlight_phonogram?: string
  questions: ComprehensionQuestion[]
}

export interface ComprehensionQuestion {
  id: string
  question: string
  question_type: 'multiple_choice' | 'true_false' | 'short_answer'
  options?: { text: string; is_correct: boolean }[]
  answer?: string
}

export interface DictationContent {
  type: 'sound_dictation' | 'sentence_dictation' | 'pre_spelling'
  items: DictationItem[]
}

export interface DictationItem {
  prompt: string       // what teacher says
  answer: string       // expected response
  audio_url?: string
  hint?: string
}

export interface SpellingContent {
  type: 'spelling'
  words: SpellingWord[]
}

export interface SpellingWord {
  word: string
  phonogram: string
  audio_url?: string
  use_in_sentence: string
}

export interface PictureMatchingContent {
  type: 'picture_matching'
  words: string[]
  phonogram?: string
}

// ─────────────────────────────────────────────
// Progress & Gamification
// ─────────────────────────────────────────────

export interface StudentProgress {
  id: string
  student_id: string
  lesson_id: string
  step_number?: number
  score: number
  attempts: number
  time_spent_sec: number
  completed: boolean
  completed_at?: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  criteria: { type: string; threshold: number }
  points: number
}

export interface FluencyRecord {
  id: string
  student_id: string
  passage_id: string
  wcpm: number
  accuracy_pct: number
  errors: string[]
  recorded_at: string
}

// ─────────────────────────────────────────────
// Full Lesson with all steps (client-side assembled)
// ─────────────────────────────────────────────

export interface FullLesson {
  lesson: Lesson
  steps: LessonStep[]
  word_lists: {
    phonogram: WordEntry[]
    sight: WordEntry[]
    spelling: WordEntry[]
  }
}

export interface WordEntry {
  word: string
  syllables?: string[]
  phonemes?: string[]
  audio_url?: string
  image_url?: string
}

// ─────────────────────────────────────────────
// Step result submitted by student
// ─────────────────────────────────────────────

export interface StepResult {
  step_number: number
  score: number          // 0–100
  time_spent_sec: number
  responses: unknown[]   // step-specific answers
}
