// Lesson registry — maps lesson IDs to FullLesson objects
// As you add lesson JSON files, import and register them here

import type { FullLesson } from '@/types'

// To add a lesson:
// 1. Create src/data/lessons/l2-02-ch.json (copy sample-lesson.json as template)
// 2. Import it below and add to registry
// import l2_02 from './l2-02-ch.json'

const registry: Record<string, FullLesson> = {
  // 'lesson-l2-02': l2_02 as unknown as FullLesson,
}

export function getLessonById(id: string): FullLesson | null {
  return registry[id] ?? null
}

export function getAllLessonIds(): string[] {
  return Object.keys(registry)
}
