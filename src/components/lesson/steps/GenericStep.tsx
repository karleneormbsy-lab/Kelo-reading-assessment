'use client'

import { useState } from 'react'
import { Volume2, CheckCircle } from 'lucide-react'
import type { LessonStep, DictationContent, DecodingContent, PreReadingContent } from '@/types'

interface Props {
  step: LessonStep
  onComplete: (score: number) => void
}

export default function GenericStep({ step, onComplete }: Props) {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const [inputs, setInputs]   = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const content = step.content

  // Map graphemes to TTS strings that produce the correct phoneme sound
  const PHONEME_SPEAK: Record<string, string> = {
    'sh': 'shhhh', 'ch': 'chhhh', 'th': 'thhh', 'wh': 'whhh',
    'ph': 'ffff',  'ck': 'k',     'ng': 'nng',   'qu': 'kw',
    'ff': 'fff',   'll': 'lll',   'ss': 'sss',
    'ai': 'ayy',   'ay': 'ayy',   'ea': 'eee',   'ee': 'eee',
    'oa': 'ohh',   'ow': 'ohh',   'oo': 'ooo',
    'a': 'aaa',    'e': 'ehh',    'i': 'ih',
    'o': 'aww',    'u': 'uh',
  }

  const speak = (text: string) => {
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate  = 0.85
    window.speechSynthesis.speak(utt)
  }

  const speakPhoneme = (grapheme: string) => {
    window.speechSynthesis.cancel()
    const pronunciation = PHONEME_SPEAK[grapheme.toLowerCase()] ?? grapheme
    const utt = new SpeechSynthesisUtterance(pronunciation)
    utt.rate  = 0.65
    utt.pitch = 1.1
    window.speechSynthesis.speak(utt)
  }

  // Decoding step
  if (content.type === 'decoding') {
    const dc = content as DecodingContent
    return (
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-4">
          {dc.word_columns.map((col, ci) => (
            <div key={ci} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              {col.map((word, wi) => (
                <button
                  key={wi}
                  onClick={() => speak(word)}
                  className={`w-full text-left py-1.5 px-2 rounded-lg text-lg font-display font-bold hover:bg-brand-50 transition-colors flex items-center justify-between group ${
                    checked.has(ci * 100 + wi) ? 'text-green-600' : 'text-gray-700'
                  }`}
                  onDoubleClick={() => setChecked(s => new Set([...s, ci * 100 + wi]))}
                >
                  {word}
                  <Volume2 className="w-3 h-3 opacity-0 group-hover:opacity-50" />
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-bold text-gray-700 mb-3">Sentences</h3>
          {dc.sentences.map((s, i) => (
            <p key={i} className="text-lg text-gray-700 py-2 border-b border-gray-50 last:border-0 flex items-center gap-2 cursor-pointer hover:text-brand-700" onClick={() => speak(s)}>
              <Volume2 className="w-4 h-4 text-gray-300 flex-shrink-0" /> {s}
            </p>
          ))}
        </div>
        <button onClick={() => onComplete(100)} className="py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg transition-colors">
          Done Reading →
        </button>
      </div>
    )
  }

  // Pre-reading vocabulary
  if (content.type === 'pre_reading') {
    const pr = content as PreReadingContent
    return (
      <div className="flex flex-col gap-4">
        {pr.vocabulary.map((v, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-display font-black text-brand-700">{v.word}</span>
                <button onClick={() => speak(v.word)} className="p-1 rounded-full hover:bg-brand-50">
                  <Volume2 className="w-4 h-4 text-brand-400" />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-2">{v.definition}</p>
              <p className="text-gray-700 text-sm italic">"{v.sentence}"</p>
            </div>
          </div>
        ))}
        <button onClick={() => onComplete(100)} className="py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg transition-colors">
          Ready to Read →
        </button>
      </div>
    )
  }

  // Dictation steps (sound, pre-spelling, sentence)
  if (['sound_dictation', 'pre_spelling', 'sentence_dictation'].includes(content.type)) {
    const dc = content as DictationContent
    const allAnswered = dc.items.every((_, i) => inputs[i]?.trim().length > 0)

    const submit = () => {
      let correct = 0
      dc.items.forEach((item, i) => {
        if (inputs[i]?.trim().toLowerCase() === item.answer.toLowerCase()) correct++
      })
      setSubmitted(true)
      const score = Math.round((correct / dc.items.length) * 100)
      setTimeout(() => onComplete(score), 1500)
    }

    return (
      <div className="flex flex-col gap-4">
        {dc.items.map((item, i) => {
          const isCorrect = submitted && inputs[i]?.trim().toLowerCase() === item.answer.toLowerCase()
          const isWrong   = submitted && inputs[i]?.trim().toLowerCase() !== item.answer.toLowerCase()
          return (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-gray-500 text-sm font-medium">{i + 1}.</span>
                <button
                  onClick={() => {
                    if (content.type === 'sound_dictation') {
                      speakPhoneme(item.answer.replace(/\//g, ''))
                    } else {
                      speak(item.prompt.replace(/\//g, ''))
                    }
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full text-sm font-medium transition-colors"
                >
                  <Volume2 className="w-4 h-4" /> Play
                </button>
                {item.hint && <span className="text-xs text-gray-400">({item.hint})</span>}
              </div>
              <input
                type="text"
                value={inputs[i] ?? ''}
                onChange={e => setInputs(prev => ({ ...prev, [i]: e.target.value }))}
                disabled={submitted}
                placeholder="Write your answer..."
                className={`w-full px-4 py-2.5 rounded-xl border-2 text-lg font-display font-bold outline-none transition-colors ${
                  isCorrect ? 'border-green-400 bg-green-50 text-green-700' :
                  isWrong   ? 'border-red-400 bg-red-50 text-red-600' :
                  'border-gray-200 bg-gray-50 focus:border-brand-400'
                }`}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
              {isWrong && (
                <p className="mt-1 text-xs text-red-500">Correct: <strong>{item.answer}</strong></p>
              )}
            </div>
          )
        })}
        {!submitted && (
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-lg disabled:opacity-40 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" /> Check Answers
          </button>
        )}
      </div>
    )
  }

  // Fallback
  return (
    <div className="text-center py-12">
      <p className="text-gray-400 mb-6">Step type: {content.type}</p>
      <button onClick={() => onComplete(100)} className="px-8 py-3 bg-brand-600 text-white rounded-2xl font-bold">
        Continue →
      </button>
    </div>
  )
}
