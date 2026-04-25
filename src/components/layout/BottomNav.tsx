'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Trophy, User } from 'lucide-react'

const navItems = [
  { path: '/dashboard', icon: Home,     label: 'Home'    },
  { path: '/levels/1',  icon: BookOpen, label: 'Quests'  },
  { path: '/rewards',   icon: Trophy,   label: 'Rewards' },
  { path: '/profile',   icon: User,     label: 'Profile' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10"
      style={{ background: '#1a2744' }}
    >
      <div className="max-w-lg mx-auto flex justify-around items-center py-2 px-2">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = pathname === path || (path === '/levels/1' && pathname.startsWith('/levels'))
          return (
            <Link
              key={path}
              href={path}
              className={`flex flex-col items-center gap-1 px-4 py-1 rounded-2xl transition-all duration-200 ${
                isActive ? 'scale-110' : 'opacity-60 hover:opacity-90'
              }`}
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                isActive ? 'bg-kelo-blue shadow-lg' : ''
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-300'}`} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-display font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
