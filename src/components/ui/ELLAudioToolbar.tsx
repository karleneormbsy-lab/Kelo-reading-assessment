'use client'

import { useState } from 'react'
import { Volume2, Square, Gauge, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AudioSpeed } from '@/hooks/useAudio'

interface Props {
  speaking:    boolean
  speed:       AudioSpeed
  onSetSpeed:  (s: AudioSpeed) => void
  onReadPage?: () => void
  onStop:      () => void
  nativeLang?: string
  onSetLang?:  (lang: string) => void
}

const SPEEDS: { value: AudioSpeed; label: string }[] = [
  { value: 'slow',   label: '🐢 Slow'   },
  { value: 'normal', label: '🚶 Normal' },
  { value: 'fast',   label: '🐇 Fast'   },
]

const LANGUAGES = [
  { code: 'en-US', label: '🇺🇸 English'          },
  { code: 'es-ES', label: '🇪🇸 Español'           },
  { code: 'fr-FR', label: '🇫🇷 Français'          },
  { code: 'ht',    label: '🇭🇹 Kreyòl Ayisyen'    },
  { code: 'pt-BR', label: '🇧🇷 Português'         },
  { code: 'zh-CN', label: '🇨🇳 中文'               },
  { code: 'ar',    label: '🇸🇦 العربية'            },
  { code: 'vi-VN', label: '🇻🇳 Tiếng Việt'        },
  { code: 'ko-KR', label: '🇰🇷 한국어'              },
  { code: 'so',    label: '🇸🇴 Soomaali'          },
  { code: 'am',    label: '🇪🇹 አማርኛ'              },
]

export default function ELLAudioToolbar({
  speaking, speed, onSetSpeed, onReadPage, onStop, nativeLang, onSetLang,
}: Props) {
  const [langOpen, setLangOpen] = useState(false)
  const currentLang = LANGUAGES.find(l => l.code === (nativeLang ?? 'en-US'))

  return (
    <div className="flex items-center gap-2 p-2 bg-white border border-gray-100 rounded-2xl shadow-md flex-wrap">
      {/* Read page / Stop */}
      {speaking ? (
        <button
          onClick={onStop}
          className="flex items-center gap-1.5 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl font-medium text-sm transition-colors"
        >
          <Square className="w-4 h-4" /> Stop
        </button>
      ) : (
        onReadPage && (
          <button
            onClick={onReadPage}
            className="flex items-center gap-1.5 px-3 py-2 bg-brand-100 hover:bg-brand-200 text-brand-700 rounded-xl font-medium text-sm transition-colors"
          >
            <Volume2 className="w-4 h-4" /> Read Aloud
          </button>
        )
      )}

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200" />

      {/* Speed selector */}
      <div className="flex items-center gap-1">
        <Gauge className="w-3.5 h-3.5 text-gray-400" />
        <div className="flex gap-1">
          {SPEEDS.map(s => (
            <button
              key={s.value}
              onClick={() => onSetSpeed(s.value)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                speed === s.value
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      {onSetLang && <div className="w-px h-6 bg-gray-200" />}

      {/* Language selector */}
      {onSetLang && (
        <div className="relative">
          <button
            onClick={() => setLangOpen(o => !o)}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-600 transition-colors"
          >
            <Globe className="w-4 h-4 text-gray-400" />
            <span>{currentLang?.label ?? 'English'}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-full mt-1 z-50 bg-white border border-gray-100 rounded-2xl shadow-xl py-1 w-52 max-h-64 overflow-y-auto"
              >
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { onSetLang(lang.code); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                      nativeLang === lang.code ? 'font-bold text-brand-600' : 'text-gray-700'
                    }`}
                  >
                    {lang.label}
                    {nativeLang === lang.code && <span className="ml-auto text-brand-400">✓</span>}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
