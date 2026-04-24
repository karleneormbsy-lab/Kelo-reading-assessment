-- ============================================================
-- SEED: Level 2 Lessons (Digraphs & Double Endings)
-- ============================================================

-- Insert Level 2 lessons
INSERT INTO lessons (id, level_id, lesson_number, title, phonogram, phonics_rule, keywords, mastery_threshold, estimated_minutes)
VALUES
  ('l2-01', 2, 1,  'The /sh/ Sound',           'sh', 'sh makes the /sh/ sound as in ship',                 ARRAY['ship','shop','shell','fish','wish'],    80, 30),
  ('l2-02', 2, 2,  'The /ch/ Sound',            'ch', 'ch makes the /ch/ sound as in chin',                 ARRAY['chin','chip','chop','much','such'],     80, 30),
  ('l2-03', 2, 3,  'The /th/ Sound',            'th', 'th makes the /th/ sound as in thin',                 ARRAY['thin','this','that','with','path'],     80, 30),
  ('l2-04', 2, 4,  'The /wh/ Sound',            'wh', 'wh makes the /wh/ sound as in when',                 ARRAY['when','what','which','whip','whiz'],    80, 30),
  ('l2-05', 2, 5,  'Double ff',                 'ff', 'ff at the end of a short vowel word makes /f/',      ARRAY['off','cliff','staff','bluff','stiff'],  80, 30),
  ('l2-06', 2, 6,  'Double ll',                 'll', 'll at the end of a short vowel word makes /l/',      ARRAY['bell','hill','fill','spell','skull'],   80, 30),
  ('l2-07', 2, 7,  'Double ss',                 'ss', 'ss at the end of a short vowel word makes /s/',      ARRAY['miss','boss','lass','hiss','cross'],    80, 30),
  ('l2-08', 2, 8,  'The ck Ending',             'ck', 'ck after a short vowel makes /k/',                   ARRAY['back','deck','kick','lock','duck'],     80, 30),
  ('l2-09', 2, 9,  'Beginning Blends: bl, cl',  'bl,cl','Two consonants together at the start of a word',  ARRAY['black','clap','blend','clock','blank'], 80, 30),
  ('l2-10', 2, 10, 'Beginning Blends: fl, gl',  'fl,gl','Two consonants together at the start of a word',  ARRAY['flat','glad','flag','glow','flame'],    80, 30),
  ('l2-11', 2, 11, 'Beginning Blends: pl, sl',  'pl,sl','Two consonants together at the start of a word',  ARRAY['plan','slim','plug','sled','plop'],     80, 30),
  ('l2-12', 2, 12, 'Beginning Blends: br, cr',  'br,cr','Two consonants together at the start of a word',  ARRAY['brad','crab','brim','crop','brisk'],    80, 30),
  ('l2-13', 2, 13, 'Beginning Blends: dr, gr',  'dr,gr','Two consonants together at the start of a word',  ARRAY['drip','grab','drum','grin','draft'],    80, 30),
  ('l2-14', 2, 14, 'Beginning Blends: fr, pr',  'fr,pr','Two consonants together at the start of a word',  ARRAY['frog','prop','from','prim','frill'],    80, 30),
  ('l2-15', 2, 15, 'Beginning Blends: tr, str', 'tr,str','Three consonants together at the start of a word',ARRAY['trip','strip','track','strap','truck'], 80, 30);

-- ============================================================
-- SEED: Level 3 Lessons (Long Vowels — Silent e)
-- ============================================================

INSERT INTO lessons (id, level_id, lesson_number, title, phonogram, phonics_rule, keywords, mastery_threshold, estimated_minutes)
VALUES
  ('l3-01', 3, 1,  'Long a – Silent e',  'a_e', 'When e is at the end, the a says its name',   ARRAY['cake','lake','tape','gave','made'],     80, 30),
  ('l3-02', 3, 2,  'Long i – Silent e',  'i_e', 'When e is at the end, the i says its name',   ARRAY['bike','hike','time','mine','slide'],    80, 30),
  ('l3-03', 3, 3,  'Long o – Silent e',  'o_e', 'When e is at the end, the o says its name',   ARRAY['home','note','rope','stove','whole'],   80, 30),
  ('l3-04', 3, 4,  'Long u – Silent e',  'u_e', 'When e is at the end, the u says its name',   ARRAY['cute','cube','mule','dune','flute'],    80, 30),
  ('l3-05', 3, 5,  'Vowel Team ai',      'ai',  'ai in the middle of a word makes long /a/',    ARRAY['rain','sail','train','snail','chain'],  80, 30),
  ('l3-06', 3, 6,  'Vowel Team ay',      'ay',  'ay at the end of a word makes long /a/',       ARRAY['day','play','stay','spray','clay'],     80, 30),
  ('l3-07', 3, 7,  'Vowel Team ea',      'ea',  'ea together makes the long /e/ sound',         ARRAY['sea','read','team','dream','clean'],    80, 30),
  ('l3-08', 3, 8,  'Vowel Team ee',      'ee',  'ee together makes the long /e/ sound',         ARRAY['see','feet','tree','green','street'],   80, 30),
  ('l3-09', 3, 9,  'Vowel Team oa',      'oa',  'oa together makes the long /o/ sound',         ARRAY['boat','coat','road','groan','toast'],   80, 30),
  ('l3-10', 3, 10, 'Vowel Team ow',      'ow',  'ow at the end of a word makes long /o/',       ARRAY['show','snow','flow','throw','below'],   80, 30),
  ('l3-11', 3, 11, 'R-Controlled: ar',   'ar',  'ar makes the /ar/ sound as in car',            ARRAY['car','star','farm','dark','spark'],     80, 30),
  ('l3-12', 3, 12, 'R-Controlled: er',   'er',  'er makes the /er/ sound as in her',            ARRAY['her','fern','verb','stern','perch'],    80, 30),
  ('l3-13', 3, 13, 'R-Controlled: ir',   'ir',  'ir makes the /ir/ sound as in bird',           ARRAY['bird','firm','first','stir','shirt'],   80, 30),
  ('l3-14', 3, 14, 'R-Controlled: or',   'or',  'or makes the /or/ sound as in for',            ARRAY['for','corn','sport','horn','storm'],    80, 30),
  ('l3-15', 3, 15, 'R-Controlled: ur',   'ur',  'ur makes the /ur/ sound as in fur',            ARRAY['fur','burn','turn','hurt','curve'],     80, 30);
