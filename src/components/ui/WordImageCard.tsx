'use client'

import { Volume2 } from 'lucide-react'
import { useWordImage } from '@/hooks/useWordImage'
import { useAudio } from '@/hooks/useAudio'

interface Props {
  word:         string
  showWord?:    boolean
  size?:        'sm' | 'md' | 'lg'
  highlight?:   string   // substring to highlight (e.g. the target phonogram)
  onTap?:       () => void
  className?:   string
}

const SIZE = {
  sm: { img: 80,  text: 'text-base', card: 'w-24' },
  md: { img: 120, text: 'text-xl',   card: 'w-36' },
  lg: { img: 160, text: 'text-2xl',  card: 'w-48' },
}

export default function WordImageCard({
  word, showWord = true, size = 'md', highlight, onTap, className = '',
}: Props) {
  const { image, loading } = useWordImage(word)
  const { speak, speaking } = useAudio()
  const s = SIZE[size]

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation()
    speak(word)
  }

  // Highlight target phonogram within the word
  const renderWord = () => {
    if (!highlight) return <span>{word}</span>
    const regex = new RegExp(`(${highlight})`, 'gi')
    const parts  = word.split(regex)
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part)
            ? <span key={i} className="text-brand-600 underline decoration-2">{part}</span>
            : <span key={i}>{part}</span>
        )}
      </>
    )
  }

  return (
    <div
      onClick={onTap}
      className={`flex flex-col items-center gap-2 ${s.card} cursor-pointer group ${className}`}
    >
      {/* Image */}
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border-2 border-gray-100 group-hover:border-brand-300 transition-colors"
        style={{ width: s.img, height: s.img }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-brand-300 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {image && !loading && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
        )}
        {!image && !loading && (
          <div className="absolute inset-0 flex items-center justify-center text-3xl">
            🖼️
          </div>
        )}
        {/* Audio button overlay */}
        <button
          onClick={handleSpeak}
          className={`absolute bottom-1 right-1 p-1 rounded-full bg-white/90 shadow transition-opacity ${speaking ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          <Volume2 className="w-3 h-3 text-brand-600" />
        </button>
      </div>

      {/* Word label */}
      {showWord && (
        <p className={`font-display font-black text-gray-800 text-center ${s.text}`}>
          {renderWord()}
        </p>
      )}
    </div>
  )
}
