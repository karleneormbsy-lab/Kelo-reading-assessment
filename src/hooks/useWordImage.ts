'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface ImageResult {
  url: string
  alt: string
  credit?: string
}

// In-memory cache so the same word isn't fetched twice in a session
const imageCache = new Map<string, ImageResult | null>()

export function useWordImage(word?: string) {
  const [image, setImage]   = useState<ImageResult | null>(null)
  const [loading, setLoading] = useState(false)
  const mountedRef          = useRef(true)

  const fetchImage = useCallback(async (w: string) => {
    const key = w.toLowerCase().trim()
    if (imageCache.has(key)) {
      setImage(imageCache.get(key) ?? null)
      return
    }
    setLoading(true)
    try {
      const res  = await fetch(`/api/word-image?word=${encodeURIComponent(key)}`)
      const data = await res.json()
      const result: ImageResult | null = data.url ? data : null
      imageCache.set(key, result)
      if (mountedRef.current) setImage(result)
    } catch {
      imageCache.set(key, null)
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    mountedRef.current = true
    if (word) fetchImage(word)
    return () => { mountedRef.current = false }
  }, [word, fetchImage])

  return { image, loading, fetchImage }
}

// Hook for fetching multiple word images at once
export function useWordImages(words: string[]) {
  const [images, setImages] = useState<Record<string, ImageResult | null>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const uncached = words.filter(w => !imageCache.has(w.toLowerCase()))
    if (!uncached.length) {
      const result: Record<string, ImageResult | null> = {}
      words.forEach(w => { result[w] = imageCache.get(w.toLowerCase()) ?? null })
      setImages(result)
      return
    }

    setLoading(true)
    Promise.allSettled(
      uncached.map(async word => {
        const key = word.toLowerCase()
        const res = await fetch(`/api/word-image?word=${encodeURIComponent(key)}`)
        const data = await res.json()
        const img: ImageResult | null = data.url ? data : null
        imageCache.set(key, img)
        return { word, img }
      })
    ).then(results => {
      const merged: Record<string, ImageResult | null> = {}
      words.forEach(w => { merged[w] = imageCache.get(w.toLowerCase()) ?? null })
      setImages(merged)
      setLoading(false)
    })
  }, [words.join(',')])  // eslint-disable-line react-hooks/exhaustive-deps

  return { images, loading }
}
