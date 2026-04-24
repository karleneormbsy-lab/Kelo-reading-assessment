// Auto-generate this file with: npx supabase gen types typescript --project-id YOUR_PROJECT_ID
// Until then this stub keeps TypeScript happy during development

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; email: string; full_name: string | null; role: string; created_at: string }
        Insert: { id: string; email: string; full_name?: string | null; role: string }
        Update: { email?: string; full_name?: string | null; role?: string }
      }
      student_profiles: {
        Row: { id: string; teacher_id: string | null; grade: string; current_level: number; current_lesson: number; total_points: number; streak_days: number }
        Insert: { id: string; grade?: string; current_level?: number; current_lesson?: number }
        Update: { teacher_id?: string | null; grade?: string; current_level?: number; current_lesson?: number; total_points?: number; streak_days?: number }
      }
      teacher_profiles: {
        Row: { id: string; school: string | null; grade_range: string | null }
        Insert: { id: string; school?: string | null; grade_range?: string | null }
        Update: { school?: string | null; grade_range?: string | null }
      }
      levels: {
        Row: { id: string; number: number; title: string; phonics_focus: string; color: string; icon: string }
        Insert: { number: number; title: string; phonics_focus: string; color?: string; icon?: string }
        Update: { title?: string; phonics_focus?: string; color?: string; icon?: string }
      }
      lessons: {
        Row: { id: string; level_id: string; lesson_number: number; title: string; phonogram: string; phonics_rule: string | null; keywords: string[] }
        Insert: { level_id: string; lesson_number: number; title: string; phonogram: string }
        Update: { title?: string; phonogram?: string; phonics_rule?: string | null; keywords?: string[] }
      }
      lesson_steps: {
        Row: { id: string; lesson_id: string; step_number: number; step_type: string; content: Record<string, unknown> }
        Insert: { lesson_id: string; step_number: number; step_type: string; content: Record<string, unknown> }
        Update: { content?: Record<string, unknown> }
      }
      word_lists: {
        Row: { id: string; lesson_id: string; list_type: string; words: string[] }
        Insert: { lesson_id: string; list_type: string; words: string[] }
        Update: { words?: string[] }
      }
      passages: {
        Row: { id: string; lesson_id: string; title: string; body: string; level: number; word_count: number; ai_generated: boolean }
        Insert: { lesson_id: string; title: string; body: string; level: number }
        Update: { title?: string; body?: string }
      }
      comprehension_questions: {
        Row: { id: string; passage_id: string; question: string; question_type: string; options: Record<string, unknown> | null; correct_answer: string }
        Insert: { passage_id: string; question: string; question_type: string; correct_answer: string }
        Update: { question?: string; options?: Record<string, unknown> | null }
      }
      student_progress: {
        Row: { id: string; student_id: string; lesson_id: string; step_number: number; score: number; attempts: number; completed: boolean; completed_at: string | null; time_spent_sec: number | null }
        Insert: { student_id: string; lesson_id: string; step_number: number; score?: number; completed?: boolean }
        Update: { score?: number; attempts?: number; completed?: boolean; completed_at?: string | null; time_spent_sec?: number | null }
      }
      fluency_records: {
        Row: { id: string; student_id: string; passage_id: string; wcpm: number; accuracy_pct: number; recorded_at: string }
        Insert: { student_id: string; passage_id: string; wcpm: number; accuracy_pct: number }
        Update: { wcpm?: number; accuracy_pct?: number }
      }
      assessments: {
        Row: { id: string; student_id: string; type: string; level_tested: number; raw_score: number; percent: number; created_at: string }
        Insert: { student_id: string; type: string; level_tested: number; raw_score: number; percent: number }
        Update: { raw_score?: number; percent?: number }
      }
      badges: {
        Row: { id: string; name: string; description: string; icon: string; criteria: Record<string, unknown>; points: number }
        Insert: { name: string; description: string; icon: string; criteria: Record<string, unknown>; points?: number }
        Update: { name?: string; description?: string; icon?: string }
      }
      student_badges: {
        Row: { student_id: string; badge_id: string; earned_at: string }
        Insert: { student_id: string; badge_id: string }
        Update: Record<string, never>
      }
      placement_results: {
        Row: { id: string; student_name: string; grade: string; native_lang: string | null; letter_names: number; letter_sounds: number; nonsense_words: number; real_words: number; passage: number; spelling: number; wcpm: number | null; recommended_level: number; recommended_lesson: number; created_at: string }
        Insert: { student_name: string; grade: string; recommended_level: number; recommended_lesson: number }
        Update: { recommended_level?: number; recommended_lesson?: number }
      }
    }
    Enums: {
      user_role: 'student' | 'teacher' | 'admin'
      step_type: 'phonogram_review' | 'phonological_awareness' | 'word_building' | 'decoding' | 'pre_reading' | 'reading_passage' | 'sound_dictation' | 'pre_spelling' | 'spelling' | 'sentence_dictation'
    }
  }
}
