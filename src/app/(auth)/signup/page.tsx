'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

function SignupForm() {
  const router = useRouter()
  const params = useSearchParams()
  const supabase = createClientComponentClient()

  const defaultRole = (params.get('role') ?? 'student') as 'student' | 'teacher'

  const [fullName, setFullName] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole]         = useState<'student' | 'teacher'>(defaultRole)
  const [error, setError]       = useState<string | null>(null)
  const [loading, setLoading]   = useState(false)

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    if (data.user) {
      await supabase.from('profiles').insert({
        id:        data.user.id,
        email,
        full_name: fullName,
        role,
      })

      if (role === 'student') {
        await supabase.from('student_profiles').insert({ id: data.user.id })
      } else {
        await supabase.from('teacher_profiles').insert({ id: data.user.id })
      }
    }

    router.push(role === 'teacher' ? '/teacher/dashboard' : '/dashboard')
    router.refresh()
  }

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
      <div className="text-center mb-8">
        <span className="text-4xl">🎓</span>
        <h1 className="text-2xl font-display font-black text-gray-900 mt-2">Create your account</h1>
        <p className="text-gray-500 text-sm mt-1">Free forever for students</p>
      </div>

      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <div className="flex rounded-xl border border-gray-200 overflow-hidden">
          {(['student', 'teacher'] as const).map(r => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors capitalize ${
                role === r
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              {r === 'student' ? '🎒 Student' : '🍎 Teacher'}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 text-gray-900"
            placeholder="Alex Rivera"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 text-gray-900"
            placeholder="you@school.edu"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-400 text-gray-900"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white rounded-xl font-bold transition-colors"
        >
          {loading ? 'Creating account…' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-brand-600 font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 animate-pulse h-96" />}>
      <SignupForm />
    </Suspense>
  )
}
