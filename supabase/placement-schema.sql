-- ──────────────────────────────────────────────────────────────
-- Placement Test Storage — add to main schema.sql or run separately
-- ──────────────────────────────────────────────────────────────

CREATE TABLE placement_results (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id          UUID REFERENCES profiles(id) ON DELETE SET NULL,
  student_name        TEXT NOT NULL,
  grade               TEXT NOT NULL,
  native_lang         TEXT DEFAULT 'en-US',

  -- Section scores (0–100)
  score_letter_names  INT,
  score_letter_sounds INT,
  score_nonsense_words INT,
  score_real_words    INT,
  score_passage       INT,
  score_spelling      INT,

  -- Fluency
  wcpm                INT,              -- words correct per minute

  -- Raw responses (full item-level data)
  raw_results         JSONB NOT NULL DEFAULT '[]',

  -- AI analysis output
  ai_analysis         JSONB,

  -- Outcome
  recommended_level   INT NOT NULL DEFAULT 1,
  recommended_lesson  INT NOT NULL DEFAULT 1,
  confidence          TEXT CHECK (confidence IN ('high','medium','low')),

  administered_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS: student sees own result, teacher sees their students'
ALTER TABLE placement_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own placement" ON placement_results FOR ALL
  USING (student_id = auth.uid());

CREATE POLICY "teacher sees student placements" ON placement_results FOR SELECT
  USING (
    student_id IN (
      SELECT id FROM student_profiles WHERE teacher_id = auth.uid()
    )
  );

-- Auto-update student level after placement
CREATE OR REPLACE FUNCTION apply_placement_result()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE student_profiles
  SET
    current_level  = NEW.recommended_level,
    current_lesson = NEW.recommended_lesson
  WHERE id = NEW.student_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_placement_complete
  AFTER INSERT ON placement_results
  FOR EACH ROW
  EXECUTE FUNCTION apply_placement_result();
