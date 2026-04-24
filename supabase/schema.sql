-- ============================================================
-- ReadSmart / S.P.I.R.E.-Inspired Literacy App — Supabase Schema
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────────
-- USERS & ROLES
-- ─────────────────────────────────────────────

CREATE TYPE user_role AS ENUM ('student', 'teacher', 'admin');

CREATE TABLE profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email       TEXT UNIQUE NOT NULL,
  full_name   TEXT NOT NULL,
  avatar_url  TEXT,
  role        user_role NOT NULL DEFAULT 'student',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE teacher_profiles (
  id          UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  school      TEXT,
  grade_range TEXT[]  DEFAULT ARRAY['K','1','2','3']
);

CREATE TABLE student_profiles (
  id              UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  teacher_id      UUID REFERENCES teacher_profiles(id),
  grade           TEXT NOT NULL DEFAULT 'K',
  current_level   INT  NOT NULL DEFAULT 1,
  current_lesson  INT  NOT NULL DEFAULT 1,
  total_points    INT  NOT NULL DEFAULT 0,
  streak_days     INT  NOT NULL DEFAULT 0,
  last_active     DATE
);

-- ─────────────────────────────────────────────
-- PHONICS CURRICULUM STRUCTURE
-- ─────────────────────────────────────────────

CREATE TABLE levels (
  id           SERIAL PRIMARY KEY,
  number       INT    UNIQUE NOT NULL,
  title        TEXT   NOT NULL,
  description  TEXT,
  phonics_focus TEXT[],         -- e.g. ['short vowels','ff','ll','ss']
  color        TEXT   DEFAULT '#3b82f6',
  icon         TEXT   DEFAULT '📚',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE lessons (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  level_id        INT  NOT NULL REFERENCES levels(id),
  lesson_number   INT  NOT NULL,
  title           TEXT NOT NULL,
  phonogram       TEXT NOT NULL,         -- e.g. 'ff', 'sh', 'ea'
  phonics_rule    TEXT NOT NULL,         -- human-readable rule description
  keywords        TEXT[],               -- key words for this phonogram
  is_reinforcing  BOOLEAN DEFAULT FALSE,
  mastery_threshold INT DEFAULT 80,     -- % correct to advance
  estimated_minutes INT DEFAULT 30,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (level_id, lesson_number)
);

-- ─────────────────────────────────────────────
-- LESSON STEPS (10 S.P.I.R.E. steps per lesson)
-- ─────────────────────────────────────────────

CREATE TYPE step_type AS ENUM (
  'phonogram_review',      -- Step 1: Flashcard sound review
  'phonological_awareness',-- Step 2: Tap/segment phonemes
  'word_building',         -- Step 3: Build words from letters
  'decoding',              -- Step 4: Read words & sentences
  'pre_reading',           -- Step 5: Vocabulary preview
  'reading_passage',       -- Step 6: Decodable text
  'sound_dictation',       -- Step 7: Hear sound → write letter
  'pre_spelling',          -- Step 8: Practice before spelling
  'spelling',              -- Step 9: Spell dictated words
  'sentence_dictation'     -- Step 10: Write dictated sentence
);

CREATE TABLE lesson_steps (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id   UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  step_number INT  NOT NULL CHECK (step_number BETWEEN 1 AND 10),
  step_type   step_type NOT NULL,
  title       TEXT NOT NULL,
  instructions TEXT,
  content     JSONB NOT NULL DEFAULT '{}',  -- flexible per step type
  audio_url   TEXT,
  time_limit  INT,           -- seconds, NULL = untimed
  points      INT DEFAULT 10,
  UNIQUE (lesson_id, step_number)
);

-- ─────────────────────────────────────────────
-- WORD LISTS
-- ─────────────────────────────────────────────

CREATE TABLE word_lists (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id    UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  list_type    TEXT NOT NULL CHECK (list_type IN ('phonogram','sight','challenge','spelling')),
  words        JSONB NOT NULL,   -- [{word, syllables, phonemes, audio_url, image_url}]
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- READING PASSAGES
-- ─────────────────────────────────────────────

CREATE TABLE passages (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lesson_id   UUID REFERENCES lessons(id) ON DELETE SET NULL,
  title       TEXT NOT NULL,
  body        TEXT NOT NULL,
  level       INT  NOT NULL,
  phonics_rules TEXT[],
  sight_words   TEXT[],
  audio_url     TEXT,
  word_count    INT,
  ai_generated  BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE comprehension_questions (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  passage_id  UUID NOT NULL REFERENCES passages(id) ON DELETE CASCADE,
  question    TEXT NOT NULL,
  question_type TEXT NOT NULL CHECK (question_type IN ('multiple_choice','true_false','short_answer')),
  options     JSONB,          -- [{text, is_correct}]
  answer      TEXT,
  order_index INT NOT NULL DEFAULT 0
);

-- ─────────────────────────────────────────────
-- STUDENT PROGRESS
-- ─────────────────────────────────────────────

CREATE TABLE student_progress (
  id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id     UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
  lesson_id      UUID NOT NULL REFERENCES lessons(id),
  step_number    INT,
  score          INT NOT NULL DEFAULT 0,      -- 0–100
  attempts       INT NOT NULL DEFAULT 0,
  time_spent_sec INT NOT NULL DEFAULT 0,
  completed      BOOLEAN DEFAULT FALSE,
  completed_at   TIMESTAMPTZ,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (student_id, lesson_id, step_number)
);

CREATE TABLE fluency_records (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id      UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
  passage_id      UUID NOT NULL REFERENCES passages(id),
  wcpm            INT,          -- words correct per minute
  accuracy_pct    NUMERIC(5,2),
  errors          TEXT[],
  audio_url       TEXT,         -- recorded reading (Supabase Storage)
  recorded_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- ASSESSMENTS (Placement + Progress Monitoring)
-- ─────────────────────────────────────────────

CREATE TYPE assessment_type AS ENUM ('placement','progress','unit','end_of_level');

CREATE TABLE assessments (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id   UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
  type         assessment_type NOT NULL,
  level_tested INT,
  raw_score    INT,
  percent      NUMERIC(5,2),
  recommended_level INT,
  data         JSONB NOT NULL DEFAULT '{}',   -- detailed item responses
  administered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- GAMIFICATION
-- ─────────────────────────────────────────────

CREATE TABLE badges (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon        TEXT NOT NULL,   -- emoji or SVG path
  criteria    JSONB NOT NULL,  -- {type: 'streak'|'score'|'lessons', threshold: N}
  points      INT DEFAULT 50
);

CREATE TABLE student_badges (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id  UUID NOT NULL REFERENCES student_profiles(id) ON DELETE CASCADE,
  badge_id    UUID NOT NULL REFERENCES badges(id),
  earned_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (student_id, badge_id)
);

-- ─────────────────────────────────────────────
-- TEACHER ASSIGNMENTS
-- ─────────────────────────────────────────────

CREATE TABLE assignments (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  teacher_id  UUID NOT NULL REFERENCES teacher_profiles(id),
  student_id  UUID NOT NULL REFERENCES student_profiles(id),
  lesson_id   UUID NOT NULL REFERENCES lessons(id),
  due_date    DATE,
  note        TEXT,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────────

ALTER TABLE profiles              ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress      ENABLE ROW LEVEL SECURITY;
ALTER TABLE fluency_records       ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments           ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_badges        ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments           ENABLE ROW LEVEL SECURITY;

-- Profiles: users see own row
CREATE POLICY "own profile" ON profiles FOR ALL USING (auth.uid() = id);

-- Students see own progress
CREATE POLICY "own progress" ON student_progress FOR ALL
  USING (student_id = auth.uid());

-- Teachers see their students' progress
CREATE POLICY "teacher sees students" ON student_progress FOR SELECT
  USING (
    student_id IN (
      SELECT id FROM student_profiles WHERE teacher_id = auth.uid()
    )
  );

-- Assignments: teacher owns, student reads own
CREATE POLICY "teacher manages assignments" ON assignments FOR ALL
  USING (teacher_id = auth.uid());
CREATE POLICY "student reads assignments" ON assignments FOR SELECT
  USING (student_id = auth.uid());

-- ─────────────────────────────────────────────
-- SEED: LEVELS
-- ─────────────────────────────────────────────

INSERT INTO levels (number, title, description, phonics_focus, color, icon) VALUES
  (1, 'Level 1 – Foundations',    'Short vowels, basic consonants, CVC words',
   ARRAY['short a','short i','short o','short u','short e'], '#22c55e', '🌱'),
  (2, 'Level 2 – Building Words', 'Consonant digraphs, double endings, blends',
   ARRAY['ff','ll','ss','ck','sh','ch','th','wh','blends'], '#3b82f6', '🔵'),
  (3, 'Level 3 – Long Vowels',    'Silent e, vowel teams, r-controlled vowels',
   ARRAY['silent e','ai','ay','ea','ee','oa','ow','ar','er','ir','or','ur'], '#a855f7', '⭐'),
  (4, 'Level 4 – Syllables',      'Open/closed syllables, vowel teams, suffixes',
   ARRAY['VCV','VCCV','tion','ness','ment','less','ful'], '#f97316', '🚀'),
  (5, 'Level 5 – Advanced',       'Prefixes, suffixes, Greek/Latin roots',
   ARRAY['pre','re','un','ing','ed','er','est','roots'], '#ef4444', '🌟'),
  (6, 'Level 6 – Mastery',        'Complex multisyllabic words, fluency',
   ARRAY['multisyllabic','fluency','comprehension'], '#fbbf24', '🏆');

-- ─────────────────────────────────────────────
-- SEED: BADGES
-- ─────────────────────────────────────────────

INSERT INTO badges (name, description, icon, criteria, points) VALUES
  ('First Step',    'Complete your first lesson step', '👣', '{"type":"steps","threshold":1}', 10),
  ('Word Wizard',   'Build 50 words in Word Builder', '🧙', '{"type":"words_built","threshold":50}', 50),
  ('Speed Reader',  'Read 100 WCPM accurately', '💨', '{"type":"wcpm","threshold":100}', 100),
  ('Streak Star',   '7-day learning streak', '🔥', '{"type":"streak","threshold":7}', 75),
  ('Perfect Score', 'Get 100% on any step', '💯', '{"type":"perfect_score","threshold":1}', 25),
  ('Level Up!',     'Complete all lessons in a level', '🎯', '{"type":"level_complete","threshold":1}', 200),
  ('Phonics Pro',   'Master 10 phonograms', '🎓', '{"type":"phonograms","threshold":10}', 150),
  ('Bookworm',      'Read 20 passages', '📖', '{"type":"passages","threshold":20}', 100),
  ('Spelling Bee',  'Spell 100 words correctly', '🐝', '{"type":"words_spelled","threshold":100}', 75),
  ('Champion',      'Reach Level 4', '🏆', '{"type":"level","threshold":4}', 500);
