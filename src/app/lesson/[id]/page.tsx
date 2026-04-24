'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LessonStepper from '@/components/lesson/LessonStepper'
import type { FullLesson, StepResult } from '@/types'

// In production, fetch from Supabase based on lesson id
// For now, load sample data
import sampleLesson from '@/data/sample-lesson.json'

interface Props {
  params: { id: string }
}

export default function LessonPage({ params }: Props) {
  const router = useRouter()
  const [lesson, setLesson] = useState<FullLesson | null>(null)
  const [loading, setLoading]  = useState(true)

  useEffect(() => {
    // TODO: replace with Supabase fetch
    // const { data } = await supabase.from('lessons').select(`*, lesson_steps(*)`).eq('id', params.id).single()
    setLesson(sampleLesson as unknown as FullLesson)
    setLoading(false)
  }, [params.id])

  const handleSaveProgress = async (result: StepResult) => {
    // TODO: upsert to student_progress table
    console.log('Saving progress:', result)
    // await supabase.from('student_progress').upsert({ student_id, lesson_id: params.id, ...result })
  }

  const handleExit = () => {
    router.push('/dashboard')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400">Loading your lesson...</p>
        </div>
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Lesson not found.</p>
      </div>
    )
  }

  return (
    <LessonStepper
      fullLesson={lesson}
      onExit={handleExit}
      onSaveProgress={handleSaveProgress}
    />
  )
}
