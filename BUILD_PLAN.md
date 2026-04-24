# ReadSmart — S.P.I.R.E. Literacy App
## Complete Build Plan

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    VERCEL (Frontend)                 │
│              Next.js 14 (App Router)                 │
│  • Student dashboard + lesson player                 │
│  • Teacher dashboard + reports                       │
│  • API routes (generate-passage, progress)           │
└──────────────────┬──────────────────────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
┌────────▼──────┐   ┌────────▼────────┐
│  SUPABASE      │   │  OPENAI API     │
│  • PostgreSQL  │   │  • GPT-4o-mini  │
│  • Auth        │   │  • Decodable    │
│  • Storage     │   │    passage gen  │
│  • RLS         │   └─────────────────┘
└───────────────┘
```

---

## Database Schema Summary

| Table | Purpose |
|---|---|
| `profiles` | All users (student/teacher/admin) |
| `student_profiles` | Student-specific data (level, points, streak) |
| `teacher_profiles` | Teacher school, grade range |
| `levels` | 6 phonics levels |
| `lessons` | Lessons within each level (phonogram, rule) |
| `lesson_steps` | 10 structured steps per lesson (JSONB content) |
| `word_lists` | Phonogram, sight, and spelling word lists |
| `passages` | Decodable reading passages |
| `comprehension_questions` | MC + T/F questions per passage |
| `student_progress` | Step-by-step scores per student |
| `fluency_records` | WCPM + accuracy readings |
| `assessments` | Placement + progress monitoring |
| `badges` + `student_badges` | Gamification |
| `assignments` | Teacher → student lesson assignments |

---

## Key UI Pages

| Route | Who | Purpose |
|---|---|---|
| `/` | Public | Landing page with features, levels, CTA |
| `/login` | All | Supabase Auth login |
| `/signup?role=student` | New users | Role-based signup |
| `/dashboard` | Student | Progress, lesson picker, badges |
| `/lesson/[id]` | Student | 10-step lesson player |
| `/levels/[num]` | Student | All lessons in a level |
| `/teacher/dashboard` | Teacher | Class overview, at-risk alerts |
| `/teacher/students/[id]` | Teacher | Individual student report |
| `/teacher/assign` | Teacher | Assign lessons to students |
| `/admin/content` | Admin | Manage lessons, passages |

---

## Component Architecture

```
src/components/
├── lesson/
│   ├── LessonStepper.tsx         ← Orchestrates all 10 steps
│   └── steps/
│       ├── PhonogramFlashcard.tsx   (Step 1)
│       ├── PhonemeSegmentation.tsx  (Step 2) — drag/drop
│       ├── WordBuilder.tsx          (Step 3) — letter tiles
│       ├── GenericStep.tsx          (Steps 4,5,7,8,10)
│       ├── ReadingPassage.tsx       (Step 6)
│       └── SpellingActivity.tsx     (Step 9)
├── teacher/
│   └── TeacherDashboard.tsx      ← Full teacher UI + charts
└── ui/
    ├── Button.tsx
    └── Card.tsx
```

---

## Step-by-Step Build Plan

### Phase 1: Foundation (Week 1)
- [ ] Create GitHub repo: `readsmart-literacy`
- [ ] Initialize Next.js: `npx create-next-app@latest readsmart --typescript --tailwind --app`
- [ ] Install dependencies (see package.json)
- [ ] Set up Supabase project
- [ ] Run `schema.sql` in Supabase SQL editor
- [ ] Run `seed-lessons.sql`
- [ ] Configure `.env.local` with Supabase keys
- [ ] Set up Supabase Auth (email + magic link)
- [ ] Deploy to Vercel: `vercel --prod`
- [ ] Connect GitHub repo in Vercel dashboard

### Phase 2: Auth Flow (Week 1–2)
- [ ] Build `/login` page with Supabase Auth
- [ ] Build `/signup` page with role selection
- [ ] Middleware: redirect to dashboard by role
- [ ] Create profile on signup (Supabase trigger)
- [ ] Protected routes (Next.js middleware)

### Phase 3: Student Lesson Player (Week 2–3)
- [ ] `/dashboard` — StudentDashboard with levels + progress
- [ ] `/levels/[num]` — lesson grid for each level
- [ ] `/lesson/[id]` — LessonStepper integration
- [ ] Wire up real Supabase lesson data
- [ ] Implement useProgress hook for live saves
- [ ] Badge award logic on lesson complete
- [ ] Confetti + celebration animation on level complete

### Phase 4: Interactive Step Components (Week 3–4)
- [ ] PhonogramFlashcard — complete ✅
- [ ] PhonemeSegmentation — complete ✅
- [ ] WordBuilder — complete ✅
- [ ] ReadingPassage — complete ✅
- [ ] SpellingActivity — complete ✅
- [ ] GenericStep (decoding, pre-reading, dictation) — complete ✅
- [ ] Audio playback for all steps (Supabase Storage)
- [ ] Text-to-speech fallback (Web Speech API) — complete ✅

### Phase 5: Teacher Dashboard (Week 4–5)
- [ ] TeacherDashboard — complete ✅
- [ ] Real-time data from Supabase
- [ ] Individual student report page
- [ ] Assign lessons to students
- [ ] Fluency recording + WCPM calculation
- [ ] Export CSV reports

### Phase 6: AI Passage Generation (Week 5)
- [ ] POST `/api/generate-passage` — complete ✅
- [ ] Admin UI to review + approve AI passages
- [ ] Save approved passages to Supabase
- [ ] Link AI passages to lessons

### Phase 7: Assessment System (Week 6)
- [ ] Placement test (mirrors SPIRE placement flow)
- [ ] Auto-assign starting level based on score
- [ ] Progress monitoring assessments (every 6 weeks)
- [ ] Fluency probe with timer + WCPM calculation

### Phase 8: Polish & Launch (Week 6–8)
- [ ] Mobile/tablet responsive testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Add Google Fonts (Nunito + Inter)
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] Sentry error tracking
- [ ] Analytics (Vercel Analytics or PostHog)
- [ ] Printable worksheet generator (PDF)

---

## Deployment

### Vercel (Frontend)
```bash
npm i -g vercel
vercel login
vercel --prod
# Add env vars in Vercel dashboard
```

### Supabase
1. Create project at supabase.com
2. Run `supabase/schema.sql` in SQL Editor
3. Run `supabase/seed-lessons.sql`
4. Enable Auth → Email provider
5. Set Site URL to your Vercel URL
6. Copy `SUPABASE_URL` and `ANON_KEY` to Vercel env vars

### GitHub
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/readsmart-literacy.git
git add .
git commit -m "feat: initial ReadSmart S.P.I.R.E. platform scaffold"
git push -u origin main
```

---

## Phonics Progression (S.P.I.R.E. Aligned)

| Level | Phonics Focus |
|---|---|
| 1 | Short vowels (a,i,o,u,e), CVC words, basic consonants |
| 2 | Digraphs (sh,ch,th,wh), double endings (ff,ll,ss,ck), consonant blends |
| 3 | Long vowels silent-e, vowel teams (ai,ay,ea,ee,oa,ow), r-controlled |
| 4 | Open/closed syllables, more vowel teams (oi,oy,ou,ow), suffixes (-ing,-ed,-er) |
| 5 | Prefixes (un-,re-,pre-), suffixes (-tion,-ness,-ful,-less), Greek/Latin roots |
| 6 | Multisyllabic words, reading fluency, advanced comprehension |

---

## Mastery & Progression Rules

- Students must score **≥ 80%** (configurable per lesson) to advance
- Below 80%: offered a **reinforcing lesson** before retry
- **Fluency probe** every 6 lessons to track WCPM growth
- **Placement test** on signup to determine starting level

---

## Estimated Total Cost (Monthly — Free Tier)

| Service | Free Tier | Paid |
|---|---|---|
| Vercel | ✅ Free (hobby) | $20/mo (pro) |
| Supabase | ✅ 500MB, 50k MAU | $25/mo |
| OpenAI | Pay per use | ~$5–10/mo |
| **Total** | **Free to start** | **~$50/mo** |
