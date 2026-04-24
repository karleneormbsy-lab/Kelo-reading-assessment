'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users, BookOpen, TrendingUp, Award, ChevronRight,
  BarChart2, AlertCircle, CheckCircle2
} from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts'

// --- Mock data (replace with Supabase queries) ---
const mockStudents = [
  { id: '1', name: 'Amara Davis',   grade: '2', level: 2, lesson: 4, lastScore: 92, streak: 5, status: 'on_track' },
  { id: '2', name: 'Caleb Wright',  grade: '1', level: 1, lesson: 8, lastScore: 68, streak: 2, status: 'needs_help' },
  { id: '3', name: 'Sofia Reyes',   grade: '3', level: 3, lesson: 2, lastScore: 88, streak: 7, status: 'on_track' },
  { id: '4', name: 'Elijah Moore',  grade: '2', level: 2, lesson: 6, lastScore: 55, streak: 0, status: 'at_risk' },
  { id: '5', name: 'Nia Thompson',  grade: '1', level: 1, lesson: 3, lastScore: 95, streak: 10, status: 'advanced' },
]

const mockClassScores = [
  { lesson: 'L1-1', avg: 82 }, { lesson: 'L1-2', avg: 78 }, { lesson: 'L1-3', avg: 85 },
  { lesson: 'L1-4', avg: 72 }, { lesson: 'L1-5', avg: 88 }, { lesson: 'L2-1', avg: 91 },
]

const statusConfig = {
  advanced:   { label: 'Advanced',    color: 'bg-purple-100 text-purple-700', icon: '🚀' },
  on_track:   { label: 'On Track',    color: 'bg-green-100 text-green-700',   icon: '✅' },
  needs_help: { label: 'Needs Help',  color: 'bg-amber-100 text-amber-700',   icon: '⚠️' },
  at_risk:    { label: 'At Risk',     color: 'bg-red-100 text-red-700',       icon: '🚨' },
}

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'reports'>('overview')
  const [selected, setSelected]   = useState<string | null>(null)

  const stats = [
    { label: 'Total Students', value: mockStudents.length,  icon: <Users className="w-5 h-5" />,     color: 'bg-blue-50 text-blue-600' },
    { label: 'Avg Score',      value: '80%',                icon: <TrendingUp className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
    { label: 'At Risk',        value: mockStudents.filter(s => s.status === 'at_risk').length, icon: <AlertCircle className="w-5 h-5" />, color: 'bg-red-50 text-red-600' },
    { label: 'On Track',       value: mockStudents.filter(s => s.status === 'on_track').length, icon: <CheckCircle2 className="w-5 h-5" />, color: 'bg-emerald-50 text-emerald-600' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-black text-gray-800">Teacher Dashboard</h1>
            <p className="text-gray-400 text-sm">2nd Grade • Ms. Johnson's Class</p>
          </div>
          <div className="flex gap-2">
            {(['overview', 'students', 'reports'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-brand-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
                {s.icon}
              </div>
              <p className="text-3xl font-display font-black text-gray-800">{s.value}</p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Class performance chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-display font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-brand-500" /> Class Average by Lesson
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={mockClassScores}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="lesson" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="avg" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Students needing attention */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-display font-bold text-gray-800 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" /> Needs Attention
              </h2>
              <div className="flex flex-col gap-3">
                {mockStudents
                  .filter(s => ['at_risk', 'needs_help'].includes(s.status))
                  .map(student => {
                    const cfg = statusConfig[student.status as keyof typeof statusConfig]
                    return (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700 text-sm">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 text-sm">{student.name}</p>
                            <p className="text-xs text-gray-400">Level {student.level} · Last score: {student.lastScore}%</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.color}`}>
                          {cfg.icon} {cfg.label}
                        </span>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {['Student', 'Grade', 'Level / Lesson', 'Last Score', 'Streak', 'Status', ''].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((student, i) => {
                  const cfg = statusConfig[student.status as keyof typeof statusConfig]
                  return (
                    <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700 text-xs">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-gray-800">{student.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-gray-500">Grade {student.grade}</td>
                      <td className="px-5 py-4">
                        <span className="font-medium text-gray-700">L{student.level} · #{student.lesson}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`font-bold ${student.lastScore >= 80 ? 'text-green-600' : student.lastScore >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
                          {student.lastScore}%
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-1">🔥 {student.streak}d</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.color}`}>
                          {cfg.icon} {cfg.label}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-display font-bold text-gray-800 mb-4">Fluency Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { week: 'Wk 1', wcpm: 45 }, { week: 'Wk 2', wcpm: 52 },
                { week: 'Wk 3', wcpm: 58 }, { week: 'Wk 4', wcpm: 63 },
                { week: 'Wk 5', wcpm: 71 }, { week: 'Wk 6', wcpm: 78 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="week" />
                <YAxis label={{ value: 'WCPM', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="wcpm" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
