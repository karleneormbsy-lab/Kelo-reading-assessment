import { useCallback } from 'react'
import { createClient } from '@/lib/supabase'
import type { StepResult } from '@/types'

export function useProgress(studentId: string, lessonId: string) {
  const supabase = createClient()

  const saveStepResult = useCallback(async (result: StepResult) => {
    const { error } = await supabase
      .from('student_progress')
      .upsert({
        student_id:    studentId,
        lesson_id:     lessonId,
        step_number:   result.step_number,
        score:         result.score,
        time_spent_sec: result.time_spent_sec,
        completed:     true,
        completed_at:  new Date().toISOString(),
      }, { onConflict: 'student_id,lesson_id,step_number' })

    if (error) console.error('Progress save error:', error)
  }, [supabase, studentId, lessonId])

  const getLessonProgress = useCallback(async () => {
    const { data } = await supabase
      .from('student_progress')
      .select('*')
      .eq('student_id', studentId)
      .eq('lesson_id', lessonId)
    return data ?? []
  }, [supabase, studentId, lessonId])

  const checkAndAwardBadges = useCallback(async () => {
    // Fetch student totals
    const { data: student } = await supabase
      .from('student_profiles')
      .select('total_points, streak_days')
      .eq('id', studentId)
      .single()

    if (!student) return

    const { data: allBadges } = await supabase.from('badges').select('*')
    const { data: earned }    = await supabase
      .from('student_badges')
      .select('badge_id')
      .eq('student_id', studentId)

    const earnedIds = new Set((earned ?? []).map(e => e.badge_id))

    for (const badge of allBadges ?? []) {
      if (earnedIds.has(badge.id)) continue
      const c = badge.criteria as { type: string; threshold: number }
      let qualifies = false

      if (c.type === 'streak'  && student.streak_days >= c.threshold)  qualifies = true
      if (c.type === 'points'  && student.total_points >= c.threshold) qualifies = true

      if (qualifies) {
        await supabase.from('student_badges').insert({ student_id: studentId, badge_id: badge.id })
      }
    }
  }, [supabase, studentId])

  return { saveStepResult, getLessonProgress, checkAndAwardBadges }
}
