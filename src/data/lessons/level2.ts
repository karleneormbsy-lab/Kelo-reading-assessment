import type { FullLesson } from '@/types'

export const lessonL2_01: FullLesson = {
  lesson: {
    id: 'lesson-l2-01', level_id: 2, lesson_number: 1,
    title: 'The /th/ Digraph', phonogram: 'th',
    phonics_rule: "The letters 'th' work together to make one sound — either voiced /th/ as in 'that', or unvoiced /th/ as in 'thin'.",
    keywords: ['thin', 'that', 'with', 'bath', 'math'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-01-s1', lesson_id: 'lesson-l2-01', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes. For th, stick your tongue between your teeth!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-th',   grapheme: 'th', phoneme: '/th/', example_word: 'thin',  back_text: 'Stick your tongue between your teeth! thin, that, with, bath, math, thick' },
          { id: 'fc-a-r',  grapheme: 'a',  phoneme: '/a/',  example_word: 'cat',   back_text: 'Review: short /a/' },
          { id: 'fc-i-r',  grapheme: 'i',  phoneme: '/i/',  example_word: 'bit',   back_text: 'Review: short /i/' },
        ],
      },
    },
    {
      id: 'l2-01-s2', lesson_id: 'lesson-l2-01', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'thin',  phonemes: ['th','i','n'],    syllables: ['thin'] },
          { word: 'that',  phonemes: ['th','a','t'],    syllables: ['that'] },
          { word: 'with',  phonemes: ['w','i','th'],    syllables: ['with'] },
          { word: 'bath',  phonemes: ['b','a','th'],    syllables: ['bath'] },
          { word: 'math',  phonemes: ['m','a','th'],    syllables: ['math'] },
        ],
      },
    },
    {
      id: 'l2-01-s3', lesson_id: 'lesson-l2-01', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build th words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['th','i','n','a','t','w','b','m','e','k','s','p'],
        target_words: ['thin','that','with','bath','math','thick','them','path'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-01-s4', lesson_id: 'lesson-l2-01', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each th word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['thin','thick','think','thank','three'],
          ['that','them','then','this','those'],
          ['bath','math','path','with','cloth'],
        ],
        sentences: [
          'Think about that thin path through the forest.',
          'Thank them for the bath cloth.',
          'This and that are both on the math test.',
          'Three thick logs sat on the path.',
        ],
      },
    },
    {
      id: 'l2-01-s5', lesson_id: 'lesson-l2-01', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'thick', definition: 'Wide and deep — not thin', sentence: 'The thick jungle path was hard to follow.' },
          { word: 'throb', definition: 'To beat or pulse with pain', sentence: 'His thumb began to throb after he hit it.' },
          { word: 'thatch', definition: 'Dry grass or straw used as a roof', sentence: 'The little hut had a thatch roof.' },
        ],
      },
    },
    {
      id: 'l2-01-s6', lesson_id: 'lesson-l2-01', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. th words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-01',
        title: 'The Thin Path',
        highlight_phonogram: 'th',
        body: "Seth and Beth went for a walk on a thin path through the thick bush. Beth thanked Seth for bringing the map. The path led them to a small hut with a thatch roof. Three goats stood by the hut. Seth thought that was funny. Beth said, \"Think — those goats live here!\" They sat on a thick log and had their snack. Then they went back on the path with the thick trees on both sides. Seth said, \"That was the best walk ever!\" Beth agreed — this day was worth it.",
        questions: [
          { id: 'q1', question: 'Where did Seth and Beth walk?',
            question_type: 'multiple_choice',
            options: [{ text:'On a wide road', is_correct:false },{ text:'On a thin path through thick bush', is_correct:true },{ text:'Along the beach', is_correct:false },{ text:'Through a school', is_correct:false }] },
          { id: 'q2', question: 'What did they find at the end of the path?',
            question_type: 'multiple_choice',
            options: [{ text:'A river', is_correct:false },{ text:'A hut with a thatch roof', is_correct:true },{ text:'A thick log', is_correct:false },{ text:'A math class', is_correct:false }] },
          { id: 'q3', question: 'There were three goats by the hut.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l2-01-s7', lesson_id: 'lesson-l2-01', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/th/ — the th sound (as in thin or that)', answer: 'th' },
          { prompt: '/a/ — short a (as in math or bath)', answer: 'a' },
        ],
      },
    },
    {
      id: 'l2-01-s8', lesson_id: 'lesson-l2-01', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'thin',  answer: 'thin',  hint: '3 sounds: /th/ /i/ /n/' },
          { prompt: 'bath',  answer: 'bath',  hint: '3 sounds: /b/ /a/ /th/' },
          { prompt: 'thick', answer: 'thick', hint: '3 sounds: /th/ /i/ /ck/' },
        ],
      },
    },
    {
      id: 'l2-01-s9', lesson_id: 'lesson-l2-01', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'thin',  phonogram: 'th', use_in_sentence: 'The ice was thin.' },
          { word: 'that',  phonogram: 'th', use_in_sentence: 'That is a good idea.' },
          { word: 'with',  phonogram: 'th', use_in_sentence: 'Come with me.' },
          { word: 'bath',  phonogram: 'th', use_in_sentence: 'Time for a bath!' },
          { word: 'math',  phonogram: 'th', use_in_sentence: 'Math is my favourite subject.' },
          { word: 'thick', phonogram: 'th', use_in_sentence: 'The soup was thick.' },
        ],
      },
    },
    {
      id: 'l2-01-s10', lesson_id: 'lesson-l2-01', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Think about that thin path through the trees.', answer: 'Think about that thin path through the trees.', hint: '8 words, starts with Think' },
          { prompt: 'Seth and Beth thanked them for the thick cloth.', answer: 'Seth and Beth thanked them for the thick cloth.', hint: '9 words, starts with Seth' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'thin' },{ word:'thick' },{ word:'think' },{ word:'thank' },{ word:'three' },{ word:'that' },{ word:'them' },{ word:'then' },{ word:'bath' },{ word:'math' },{ word:'path' },{ word:'with' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'they' },{ word:'both' },{ word:'those' },{ word:'their' }],
    spelling:  [{ word:'thin' },{ word:'that' },{ word:'with' },{ word:'bath' },{ word:'math' },{ word:'thick' }],
  },
}

export const lessonL2_02: FullLesson = {
  lesson: {
    id: 'lesson-l2-02', level_id: 2, lesson_number: 2,
    title: 'The /ch/ Digraph', phonogram: 'ch',
    phonics_rule: "The letters 'ch' make the /ch/ sound, as in chin and chest. Say it like a sneeze: ch!",
    keywords: ['chin', 'chip', 'chat', 'much', 'chest'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-02-s1', lesson_id: 'lesson-l2-02', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-ch', grapheme: 'ch', phoneme: '/ch/', example_word: 'chin',  back_text: 'ch sounds like a sneeze! chin, chip, chat, much, chest, chop' },
          { id: 'fc-th', grapheme: 'th', phoneme: '/th/', example_word: 'thin',  back_text: 'Review: th — thin, bath, math' },
        ],
      },
    },
    {
      id: 'l2-02-s2', lesson_id: 'lesson-l2-02', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'chin',  phonemes: ['ch','i','n'],   syllables: ['chin'] },
          { word: 'chip',  phonemes: ['ch','i','p'],   syllables: ['chip'] },
          { word: 'chat',  phonemes: ['ch','a','t'],   syllables: ['chat'] },
          { word: 'much',  phonemes: ['m','u','ch'],   syllables: ['much'] },
          { word: 'chest', phonemes: ['ch','e','st'],  syllables: ['chest'] },
        ],
      },
    },
    {
      id: 'l2-02-s3', lesson_id: 'lesson-l2-02', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build ch words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['ch','i','n','p','a','t','u','m','e','s','o','k'],
        target_words: ['chin','chip','chat','much','chest','chop','such','check'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-02-s4', lesson_id: 'lesson-l2-02', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each ch word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['chin','chip','chop','chess','chest'],
          ['chat','chain','chair','check','choose'],
          ['much','such','rich','teach','each'],
        ],
        sentences: [
          'Check the chest for the chain.',
          'She had a chat in her chair.',
          'Chop the chips — not too much!',
          'Each child chose a rich chocolate chip.',
        ],
      },
    },
    {
      id: 'l2-02-s5', lesson_id: 'lesson-l2-02', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'chest',  definition: 'A large strong box for storing things, or the front of your body', sentence: 'The old chest was full of gold chains.' },
          { word: 'chose',  definition: 'Past tense of choose — to pick something', sentence: 'She chose the chocolate chip cookie.' },
          { word: 'chuckle', definition: 'A quiet, soft laugh', sentence: 'He gave a chuckle when the puppy sneezed.' },
        ],
      },
    },
    {
      id: 'l2-02-s6', lesson_id: 'lesson-l2-02', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. ch words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-02',
        title: 'The Chest of Chips',
        highlight_phonogram: 'ch',
        body: "Chad found an old chest under his chair. He gave a chuckle — what could be in it? He checked the latch. Inside was a chain, a chess set, and a big bag of chips! Chad chose to share. He called his friends for a chat. Each child got a chip and a chess piece. They played chess and munched chips for much of the afternoon. Chad liked how the chain shone in the light. Such a rich find from such a small chest! Chad said it was the best day of the whole school term.",
        questions: [
          { id: 'q1', question: 'What did Chad find under his chair?',
            question_type: 'multiple_choice',
            options: [{ text:'A chain', is_correct:false },{ text:'A chess set', is_correct:false },{ text:'A chest', is_correct:true },{ text:'Chips', is_correct:false }] },
          { id: 'q2', question: 'What was NOT in the chest?',
            question_type: 'multiple_choice',
            options: [{ text:'A chain', is_correct:false },{ text:'A chess set', is_correct:false },{ text:'A hat', is_correct:true },{ text:'Chips', is_correct:false }] },
          { id: 'q3', question: 'Chad kept everything in the chest for himself.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l2-02-s7', lesson_id: 'lesson-l2-02', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ch/ — the ch sound (as in chin)', answer: 'ch' },
          { prompt: '/th/ — the th sound (as in thin)', answer: 'th' },
        ],
      },
    },
    {
      id: 'l2-02-s8', lesson_id: 'lesson-l2-02', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'chin',  answer: 'chin',  hint: '3 sounds: /ch/ /i/ /n/' },
          { prompt: 'chat',  answer: 'chat',  hint: '3 sounds: /ch/ /a/ /t/' },
          { prompt: 'much',  answer: 'much',  hint: '3 sounds: /m/ /u/ /ch/' },
        ],
      },
    },
    {
      id: 'l2-02-s9', lesson_id: 'lesson-l2-02', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'chin',  phonogram: 'ch', use_in_sentence: 'She hit her chin.' },
          { word: 'chip',  phonogram: 'ch', use_in_sentence: 'I ate one chip.' },
          { word: 'chat',  phonogram: 'ch', use_in_sentence: 'Let us have a chat.' },
          { word: 'much',  phonogram: 'ch', use_in_sentence: 'Thank you very much.' },
          { word: 'chest', phonogram: 'ch', use_in_sentence: 'Open the treasure chest.' },
          { word: 'check', phonogram: 'ch', use_in_sentence: 'Check your work.' },
        ],
      },
    },
    {
      id: 'l2-02-s10', lesson_id: 'lesson-l2-02', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Check the chest for the chain and chips.', answer: 'Check the chest for the chain and chips.', hint: '8 words, starts with Check' },
          { prompt: 'Each child chose a chess piece and had a chat.', answer: 'Each child chose a chess piece and had a chat.', hint: '10 words, starts with Each' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'chin' },{ word:'chip' },{ word:'chop' },{ word:'chess' },{ word:'chest' },{ word:'chat' },{ word:'chain' },{ word:'check' },{ word:'much' },{ word:'such' },{ word:'rich' },{ word:'each' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'she' },{ word:'he' },{ word:'they' },{ word:'whole' }],
    spelling:  [{ word:'chin' },{ word:'chip' },{ word:'chat' },{ word:'much' },{ word:'chest' },{ word:'check' }],
  },
}

export const lessonL2_03: FullLesson = {
  lesson: {
    id: 'lesson-l2-03', level_id: 2, lesson_number: 3,
    title: 'The /sh/ Digraph', phonogram: 'sh',
    phonics_rule: "The letters 'sh' make the /sh/ sound — like telling someone to be quiet! ship, shop, wish, fish.",
    keywords: ['ship', 'shop', 'shell', 'fish', 'wish'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-03-s1', lesson_id: 'lesson-l2-03', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-sh',  grapheme: 'sh', phoneme: '/sh/', example_word: 'ship',  back_text: 'Shhh! /sh/ — ship, shop, shell, fish, wish, rush, flash' },
          { id: 'fc-ch2', grapheme: 'ch', phoneme: '/ch/', example_word: 'chin',  back_text: 'Review: ch — chin, chest, much' },
          { id: 'fc-th2', grapheme: 'th', phoneme: '/th/', example_word: 'thin',  back_text: 'Review: th — thin, bath, with' },
        ],
      },
    },
    {
      id: 'l2-03-s2', lesson_id: 'lesson-l2-03', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'ship',  phonemes: ['sh','i','p'],  syllables: ['ship'] },
          { word: 'shop',  phonemes: ['sh','o','p'],  syllables: ['shop'] },
          { word: 'fish',  phonemes: ['f','i','sh'],  syllables: ['fish'] },
          { word: 'wish',  phonemes: ['w','i','sh'],  syllables: ['wish'] },
          { word: 'shell', phonemes: ['sh','e','ll'], syllables: ['shell'] },
        ],
      },
    },
    {
      id: 'l2-03-s3', lesson_id: 'lesson-l2-03', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build sh words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['sh','i','p','o','f','w','e','ll','a','n','r','d'],
        target_words: ['ship','shop','fish','wish','shell','shed','rush','flash'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-03-s4', lesson_id: 'lesson-l2-03', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each sh word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['ship','shop','shed','shin','shell'],
          ['fish','wish','dish','rush','brush'],
          ['flash','crash','fresh','splash','thrush'],
        ],
        sentences: [
          'The fish splashed near the ship.',
          'She rushed to the shop for a fresh dish.',
          'I wish the shell were on the shelf.',
          'A flash of lightning lit up the shed.',
        ],
      },
    },
    {
      id: 'l2-03-s5', lesson_id: 'lesson-l2-03', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'shore',  definition: 'The land at the edge of the sea or a lake', sentence: 'The ship docked along the rocky shore.' },
          { word: 'fresh',  definition: 'New, clean, or recently made', sentence: 'The fresh fish smelled wonderful.' },
          { word: 'shimmer', definition: 'To shine with a soft, flickering light', sentence: 'The shells shimmer in the sunlight.' },
        ],
      },
    },
    {
      id: 'l2-03-s6', lesson_id: 'lesson-l2-03', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. sh words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-03',
        title: 'A Day on the Shore',
        highlight_phonogram: 'sh',
        body: "Shana and her dad went fishing from the shore. They had fresh bait in a dish and a fishing rod each. Shana made a wish — she wished for a big fish. She cast her rod with a big whoosh! A shell sparkled on a rock near the ship. Shana shed her shoes and splashed in the shallow water. She found a shiny shell to take home. Then — a splash! Her rod dipped. She shouted for her dad. Together they pulled in the biggest fish she had ever seen. The shell AND the fish — what a day!",
        questions: [
          { id: 'q1', question: 'What did Shana wish for?',
            question_type: 'multiple_choice',
            options: [{ text:'A new shell', is_correct:false },{ text:'A big fish', is_correct:true },{ text:'A shiny ship', is_correct:false },{ text:'Fresh bait', is_correct:false }] },
          { id: 'q2', question: 'What did Shana find in the shallow water?',
            question_type: 'multiple_choice',
            options: [{ text:'A fish', is_correct:false },{ text:'A rod', is_correct:false },{ text:'A shiny shell', is_correct:true },{ text:'A dish', is_correct:false }] },
          { id: 'q3', question: 'Shana went fishing alone.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l2-03-s7', lesson_id: 'lesson-l2-03', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/sh/ — the sh sound (as in ship)', answer: 'sh' },
          { prompt: '/ch/ — the ch sound (as in chin)', answer: 'ch' },
          { prompt: '/th/ — the th sound (as in thin)', answer: 'th' },
        ],
      },
    },
    {
      id: 'l2-03-s8', lesson_id: 'lesson-l2-03', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'ship',  answer: 'ship',  hint: '3 sounds: /sh/ /i/ /p/' },
          { prompt: 'fish',  answer: 'fish',  hint: '3 sounds: /f/ /i/ /sh/' },
          { prompt: 'shell', answer: 'shell', hint: '3 sounds: /sh/ /e/ /ll/' },
        ],
      },
    },
    {
      id: 'l2-03-s9', lesson_id: 'lesson-l2-03', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'ship',  phonogram: 'sh', use_in_sentence: 'The ship sailed at dawn.' },
          { word: 'shop',  phonogram: 'sh', use_in_sentence: 'We went to the shop.' },
          { word: 'fish',  phonogram: 'sh', use_in_sentence: 'I caught a big fish.' },
          { word: 'wish',  phonogram: 'sh', use_in_sentence: 'Make a wish!' },
          { word: 'shell', phonogram: 'sh', use_in_sentence: 'Pick up that shell.' },
          { word: 'fresh', phonogram: 'sh', use_in_sentence: 'The bread is fresh.' },
        ],
      },
    },
    {
      id: 'l2-03-s10', lesson_id: 'lesson-l2-03', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'She rushed to the shop for a fresh fish dish.', answer: 'She rushed to the shop for a fresh fish dish.', hint: '9 words, starts with She' },
          { prompt: 'Shana made a wish and then caught a big fish.', answer: 'Shana made a wish and then caught a big fish.', hint: '10 words, starts with Shana' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'ship' },{ word:'shop' },{ word:'shed' },{ word:'shin' },{ word:'shell' },{ word:'fish' },{ word:'wish' },{ word:'dish' },{ word:'rush' },{ word:'brush' },{ word:'flash' },{ word:'fresh' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'she' },{ word:'her' },{ word:'they' },{ word:'together' }],
    spelling:  [{ word:'ship' },{ word:'shop' },{ word:'fish' },{ word:'wish' },{ word:'shell' },{ word:'fresh' }],
  },
}

export const lessonL2_04: FullLesson = {
  lesson: {
    id: 'lesson-l2-04', level_id: 2, lesson_number: 4,
    title: 'The /wh/ Digraph', phonogram: 'wh',
    phonics_rule: "The letters 'wh' make a /w/ sound — blow a little air! when, what, where, which, while.",
    keywords: ['when', 'what', 'where', 'which', 'while'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-04-s1', lesson_id: 'lesson-l2-04', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-wh',  grapheme: 'wh', phoneme: '/wh/', example_word: 'when', back_text: 'Blow a little air! wh — when, what, where, which, while, whip, wheat' },
          { id: 'fc-sh2', grapheme: 'sh', phoneme: '/sh/', example_word: 'ship', back_text: 'Review: sh — ship, fish, wish' },
          { id: 'fc-ch3', grapheme: 'ch', phoneme: '/ch/', example_word: 'chin', back_text: 'Review: ch — chin, chest, much' },
        ],
      },
    },
    {
      id: 'l2-04-s2', lesson_id: 'lesson-l2-04', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'whip',   phonemes: ['wh','i','p'],   syllables: ['whip'] },
          { word: 'when',   phonemes: ['wh','e','n'],   syllables: ['when'] },
          { word: 'wheat',  phonemes: ['wh','ea','t'],  syllables: ['wheat'] },
          { word: 'which',  phonemes: ['wh','i','ch'],  syllables: ['which'] },
          { word: 'while',  phonemes: ['wh','i','le'],  syllables: ['while'] },
        ],
      },
    },
    {
      id: 'l2-04-s3', lesson_id: 'lesson-l2-04', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build wh words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['wh','i','p','e','n','a','t','r','ch','l','f'],
        target_words: ['whip','when','what','which','while','whiff','whet'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-04-s4', lesson_id: 'lesson-l2-04', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each wh word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['whip','whiff','when','where','which'],
          ['what','wheat','wheel','while','white'],
          ['whisper','whistle','whether','wherever','whatever'],
        ],
        sentences: [
          'When will the white wheat be ready?',
          'Which way — which path — which wheel?',
          'What a wonderful whistle while you work!',
          'Where should we go while it is still light?',
        ],
      },
    },
    {
      id: 'l2-04-s5', lesson_id: 'lesson-l2-04', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'whisper', definition: 'To speak very quietly', sentence: 'She had to whisper so no one else could hear.' },
          { word: 'wheat',   definition: 'A grain used to make bread and flour', sentence: 'The field was full of golden wheat.' },
          { word: 'whirl',   definition: 'To spin or move quickly in a circle', sentence: 'The wheel began to whirl in the wind.' },
        ],
      },
    },
    {
      id: 'l2-04-s6', lesson_id: 'lesson-l2-04', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. wh words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-04',
        title: 'Where Is the Whistle?',
        highlight_phonogram: 'wh',
        body: "Whitney had a white whistle. She used it whenever she played in the wheat field. But one morning, she could not find it. \"Where is my whistle?\" she asked. She whispered to herself while she checked under the wheel of the old cart. She looked by the white fence. She even checked whether it was behind the shed. While she was looking, a whiff of something sweet drifted past. Whitney followed the smell — and there was her whistle! It had fallen into a bowl of fresh whipped cream. What a wonderful place to find it.",
        questions: [
          { id: 'q1', question: 'What was Whitney looking for?',
            question_type: 'multiple_choice',
            options: [{ text:'Her shoes', is_correct:false },{ text:'Her white whistle', is_correct:true },{ text:'The wheat field', is_correct:false },{ text:'A bowl of cream', is_correct:false }] },
          { id: 'q2', question: 'Where did Whitney find her whistle?',
            question_type: 'multiple_choice',
            options: [{ text:'Under the cart wheel', is_correct:false },{ text:'Behind the shed', is_correct:false },{ text:'In a bowl of whipped cream', is_correct:true },{ text:'In the wheat field', is_correct:false }] },
          { id: 'q3', question: 'Whitney whispered to herself while she searched.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l2-04-s7', lesson_id: 'lesson-l2-04', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/wh/ — the wh sound (as in when)', answer: 'wh' },
          { prompt: '/sh/ — the sh sound (as in ship)', answer: 'sh' },
          { prompt: '/ch/ — the ch sound (as in chin)', answer: 'ch' },
          { prompt: '/th/ — the th sound (as in thin)', answer: 'th' },
        ],
      },
    },
    {
      id: 'l2-04-s8', lesson_id: 'lesson-l2-04', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'whip',  answer: 'whip',  hint: '3 sounds: /wh/ /i/ /p/' },
          { prompt: 'when',  answer: 'when',  hint: '3 sounds: /wh/ /e/ /n/' },
          { prompt: 'which', answer: 'which', hint: '3 sounds: /wh/ /i/ /ch/' },
        ],
      },
    },
    {
      id: 'l2-04-s9', lesson_id: 'lesson-l2-04', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'when',  phonogram: 'wh', use_in_sentence: 'When will you arrive?' },
          { word: 'what',  phonogram: 'wh', use_in_sentence: 'What is your name?' },
          { word: 'whip',  phonogram: 'wh', use_in_sentence: 'Whip the cream until it is thick.' },
          { word: 'which', phonogram: 'wh', use_in_sentence: 'Which book do you want?' },
          { word: 'white', phonogram: 'wh', use_in_sentence: 'The clouds are white.' },
          { word: 'while', phonogram: 'wh', use_in_sentence: 'Sing while you work.' },
        ],
      },
    },
    {
      id: 'l2-04-s10', lesson_id: 'lesson-l2-04', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'When will the white wheat be ready to pick?', answer: 'When will the white wheat be ready to pick?', hint: '8 words, starts with When' },
          { prompt: 'Whitney whispered while she looked for her whistle.', answer: 'Whitney whispered while she looked for her whistle.', hint: '8 words, starts with Whitney' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'whip' },{ word:'when' },{ word:'what' },{ word:'where' },{ word:'which' },{ word:'while' },{ word:'white' },{ word:'wheat' },{ word:'wheel' },{ word:'whisper' },{ word:'whistle' },{ word:'whether' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'she' },{ word:'her' },{ word:'could' },{ word:'even' }],
    spelling:  [{ word:'when' },{ word:'what' },{ word:'whip' },{ word:'which' },{ word:'white' },{ word:'while' }],
  },
}

export const lessonL2_05: FullLesson = {
  lesson: {
    id: 'lesson-l2-05', level_id: 2, lesson_number: 5,
    title: 'Double /ff/ & /ll/', phonogram: 'ff,ll',
    phonics_rule: "After a short vowel in a one-syllable word, f and l are often doubled: off, puff, pill, tell, ball, full.",
    keywords: ['off', 'puff', 'pill', 'tell', 'ball', 'full'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-05-s1', lesson_id: 'lesson-l2-05', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes. ff and ll say the same sounds as f and l!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-ff', grapheme: 'ff', phoneme: '/f/', example_word: 'off',   back_text: 'Double ff = /f/ — off, puff, cliff, stuff, huff' },
          { id: 'fc-ll', grapheme: 'll', phoneme: '/l/', example_word: 'pill',  back_text: 'Double ll = /l/ — pill, tell, ball, full, fill, bell' },
          { id: 'fc-wh2', grapheme: 'wh', phoneme: '/wh/', example_word: 'when', back_text: 'Review: wh — when, what, which' },
        ],
      },
    },
    {
      id: 'l2-05-s2', lesson_id: 'lesson-l2-05', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'off',  phonemes: ['o','ff'],    syllables: ['off'] },
          { word: 'puff', phonemes: ['p','u','ff'], syllables: ['puff'] },
          { word: 'pill', phonemes: ['p','i','ll'], syllables: ['pill'] },
          { word: 'tell', phonemes: ['t','e','ll'], syllables: ['tell'] },
          { word: 'ball', phonemes: ['b','a','ll'], syllables: ['ball'] },
        ],
      },
    },
    {
      id: 'l2-05-s3', lesson_id: 'lesson-l2-05', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build ff and ll words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['p','u','ff','i','ll','t','e','b','a','f','s','h'],
        target_words: ['puff','pill','tell','ball','full','fill','bell','huff'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-05-s4', lesson_id: 'lesson-l2-05', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each ff and ll word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['off','puff','cliff','stuff','huff'],
          ['pill','fill','bill','hill','spill'],
          ['ball','tall','call','hall','wall'],
        ],
        sentences: [
          'Jill fell off the tall hill with a huff and a puff.',
          'Tell Bill to fill the ball before the game.',
          'The pill fell off the shelf with a spill.',
          'Call the hall to check if the bell still works.',
        ],
      },
    },
    {
      id: 'l2-05-s5', lesson_id: 'lesson-l2-05', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'cliff',  definition: 'A steep, rocky edge of a hill or mountain', sentence: 'We stood at the top of the tall cliff.' },
          { word: 'stuff',  definition: 'Things or belongings (informal)', sentence: 'He left his stuff on the hall floor.' },
          { word: 'spill',  definition: 'To accidentally knock a liquid out of its container', sentence: 'Try not to spill your juice.' },
        ],
      },
    },
    {
      id: 'l2-05-s6', lesson_id: 'lesson-l2-05', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. ff and ll words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-05',
        title: 'The Hill and the Bell',
        highlight_phonogram: 'ff,ll',
        body: "Bill lived in a tall house at the top of a hill. Every morning, a bell would call from the hall below. Bill would pull on his stuff and rush off down the hill. One day the bell fell off its hook with a big clang. Bill had to tell the village. \"The bell fell!\" he called. The whole hall went still. A tall man said he would fix it with a puff of effort. He filled the crack with fresh clay. They rang the bell — it still worked! Full of pride, Bill ran back up the hill.",
        questions: [
          { id: 'q1', question: 'Where did Bill live?',
            question_type: 'multiple_choice',
            options: [{ text:'By the sea', is_correct:false },{ text:'In the hall', is_correct:false },{ text:'At the top of a hill', is_correct:true },{ text:'Near the cliff', is_correct:false }] },
          { id: 'q2', question: 'What happened to the bell?',
            question_type: 'multiple_choice',
            options: [{ text:'It got too full', is_correct:false },{ text:'It fell off its hook', is_correct:true },{ text:'Bill took it off', is_correct:false },{ text:'It spilled', is_correct:false }] },
          { id: 'q3', question: 'The bell could not be fixed.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l2-05-s7', lesson_id: 'lesson-l2-05', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/f/ at the end of a short vowel word — like off or puff', answer: 'ff' },
          { prompt: '/l/ at the end of a short vowel word — like pill or tell', answer: 'll' },
        ],
      },
    },
    {
      id: 'l2-05-s8', lesson_id: 'lesson-l2-05', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'puff', answer: 'puff', hint: '3 sounds: /p/ /u/ /ff/ — double f after short vowel' },
          { prompt: 'pill', answer: 'pill', hint: '3 sounds: /p/ /i/ /ll/ — double l after short vowel' },
          { prompt: 'ball', answer: 'ball', hint: '3 sounds: /b/ /a/ /ll/ — double l' },
        ],
      },
    },
    {
      id: 'l2-05-s9', lesson_id: 'lesson-l2-05', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Remember to double the f or l!',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'off',  phonogram: 'ff', use_in_sentence: 'Turn the light off.' },
          { word: 'puff', phonogram: 'ff', use_in_sentence: 'She took a puff of air.' },
          { word: 'pill', phonogram: 'll', use_in_sentence: 'Take your pill with water.' },
          { word: 'tell', phonogram: 'll', use_in_sentence: 'Tell me a story.' },
          { word: 'ball', phonogram: 'll', use_in_sentence: 'Throw the ball to me.' },
          { word: 'full', phonogram: 'll', use_in_sentence: 'The cup is full.' },
        ],
      },
    },
    {
      id: 'l2-05-s10', lesson_id: 'lesson-l2-05', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Tell Bill to fill the ball with air.', answer: 'Tell Bill to fill the ball with air.', hint: '8 words, starts with Tell' },
          { prompt: 'The bell fell off the wall in the tall hall.', answer: 'The bell fell off the wall in the tall hall.', hint: '10 words, starts with The' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'off' },{ word:'puff' },{ word:'cliff' },{ word:'stuff' },{ word:'huff' },{ word:'pill' },{ word:'fill' },{ word:'bill' },{ word:'hill' },{ word:'ball' },{ word:'tall' },{ word:'bell' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'he' },{ word:'every' },{ word:'whole' },{ word:'would' }],
    spelling:  [{ word:'off' },{ word:'puff' },{ word:'pill' },{ word:'tell' },{ word:'ball' },{ word:'full' }],
  },
}

export const lessonL2_06: FullLesson = {
  lesson: {
    id: 'lesson-l2-06', level_id: 2, lesson_number: 6,
    title: 'Double /ss/ & /ck/', phonogram: 'ss,ck',
    phonics_rule: "After a short vowel, s is doubled (kiss, miss) and k is written as ck (back, kick, lock, duck).",
    keywords: ['kiss', 'miss', 'back', 'kick', 'lock', 'duck'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l2-06-s1', lesson_id: 'lesson-l2-06', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-ss', grapheme: 'ss', phoneme: '/s/', example_word: 'miss',  back_text: 'Double ss = /s/ — miss, kiss, hiss, mess, fuss, class' },
          { id: 'fc-ck', grapheme: 'ck', phoneme: '/k/', example_word: 'back',  back_text: 'ck = /k/ after short vowel — back, kick, lock, sock, duck, neck' },
          { id: 'fc-ff2', grapheme: 'ff', phoneme: '/f/', example_word: 'puff',  back_text: 'Review: ff — off, puff, cliff' },
        ],
      },
    },
    {
      id: 'l2-06-s2', lesson_id: 'lesson-l2-06', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'miss', phonemes: ['m','i','ss'],  syllables: ['miss'] },
          { word: 'kiss', phonemes: ['k','i','ss'],  syllables: ['kiss'] },
          { word: 'back', phonemes: ['b','a','ck'],  syllables: ['back'] },
          { word: 'kick', phonemes: ['k','i','ck'],  syllables: ['kick'] },
          { word: 'duck', phonemes: ['d','u','ck'],  syllables: ['duck'] },
        ],
      },
    },
    {
      id: 'l2-06-s3', lesson_id: 'lesson-l2-06', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build ss and ck words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['m','i','ss','k','b','a','ck','u','d','o','l','n'],
        target_words: ['miss','kiss','back','kick','duck','lock','neck','rock'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-06-s4', lesson_id: 'lesson-l2-06', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each ss and ck word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['miss','kiss','hiss','mess','class'],
          ['back','rack','pack','track','black'],
          ['kick','pick','tick','trick','thick'],
        ],
        sentences: [
          'The duck swam back to the dock.',
          'Lock the black sock in the back pack.',
          'Nick did a trick kick in class.',
          'The snake gave a hiss from behind the rock.',
        ],
      },
    },
    {
      id: 'l2-06-s5', lesson_id: 'lesson-l2-06', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'dock',  definition: 'A platform at the water\'s edge for boats', sentence: 'The duck waddled along the dock.' },
          { word: 'flock', definition: 'A group of birds or sheep', sentence: 'A flock of ducks swam across the pond.' },
          { word: 'trick', definition: 'A clever or playful act', sentence: 'The dog learned a new trick.' },
        ],
      },
    },
    {
      id: 'l2-06-s6', lesson_id: 'lesson-l2-06', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. ss and ck words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-06',
        title: 'Nick and the Duck',
        highlight_phonogram: 'ss,ck',
        body: "Nick had a pet duck named Tuck. Tuck would hiss if you came too close. Nick did not miss a single day of feeding Tuck. One afternoon, the lock on Tuck's pen was stuck. Tuck got out and waddled to the back of the yard. Nick had to track him down. He found Tuck near a big black rock by the dock. A flock of ducks was swimming! Tuck wanted to kick and splash with them. Nick said, \"You miss your flock, don't you Tuck?\" He opened the back gate and let Tuck join the flock. What a lucky duck!",
        questions: [
          { id: 'q1', question: 'What was wrong with Tuck\'s pen?',
            question_type: 'multiple_choice',
            options: [{ text:'It had a mess inside', is_correct:false },{ text:'The lock was stuck', is_correct:true },{ text:'It was too black', is_correct:false },{ text:'Tuck kicked it down', is_correct:false }] },
          { id: 'q2', question: 'Where did Nick find Tuck?',
            question_type: 'multiple_choice',
            options: [{ text:'In the class', is_correct:false },{ text:'Near a black rock by the dock', is_correct:true },{ text:'On the back track', is_correct:false },{ text:'Under a big rock', is_correct:false }] },
          { id: 'q3', question: 'Nick kept Tuck away from the flock of ducks.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l2-06-s7', lesson_id: 'lesson-l2-06', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/s/ at the end of a short vowel word — like miss or kiss', answer: 'ss' },
          { prompt: '/k/ at the end of a short vowel word — like back or duck', answer: 'ck' },
          { prompt: '/f/ at the end of a short vowel word — like off or puff', answer: 'ff' },
          { prompt: '/l/ at the end of a short vowel word — like pill or tell', answer: 'll' },
        ],
      },
    },
    {
      id: 'l2-06-s8', lesson_id: 'lesson-l2-06', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'miss', answer: 'miss', hint: '3 sounds: /m/ /i/ /ss/ — double s after short vowel' },
          { prompt: 'back', answer: 'back', hint: '3 sounds: /b/ /a/ /ck/ — ck after short vowel' },
          { prompt: 'duck', answer: 'duck', hint: '3 sounds: /d/ /u/ /ck/ — ck after short vowel' },
        ],
      },
    },
    {
      id: 'l2-06-s9', lesson_id: 'lesson-l2-06', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Use ss or ck correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'miss', phonogram: 'ss', use_in_sentence: 'I miss my friend.' },
          { word: 'kiss', phonogram: 'ss', use_in_sentence: 'She gave the baby a kiss.' },
          { word: 'back', phonogram: 'ck', use_in_sentence: 'Come back soon.' },
          { word: 'kick', phonogram: 'ck', use_in_sentence: 'Kick the ball hard.' },
          { word: 'lock', phonogram: 'ck', use_in_sentence: 'Lock the door at night.' },
          { word: 'duck', phonogram: 'ck', use_in_sentence: 'The duck swam in the pond.' },
        ],
      },
    },
    {
      id: 'l2-06-s10', lesson_id: 'lesson-l2-06', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Nick tracked the duck back to the black rock.', answer: 'Nick tracked the duck back to the black rock.', hint: '9 words, starts with Nick' },
          { prompt: 'Lock the back gate so the duck does not miss the flock.', answer: 'Lock the back gate so the duck does not miss the flock.', hint: '12 words, starts with Lock' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'miss' },{ word:'kiss' },{ word:'hiss' },{ word:'mess' },{ word:'class' },{ word:'back' },{ word:'black' },{ word:'track' },{ word:'kick' },{ word:'trick' },{ word:'lock' },{ word:'duck' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'he' },{ word:'his' },{ word:'found' },{ word:'single' }],
    spelling:  [{ word:'miss' },{ word:'kiss' },{ word:'back' },{ word:'kick' },{ word:'lock' },{ word:'duck' }],
  },
}

export const lessonL2_07: FullLesson = {
  lesson: {
    id: 'lesson-l2-07', level_id: 2, lesson_number: 7,
    title: 'Digraph Review', phonogram: 'digraphs',
    phonics_rule: 'Review all digraphs: th, ch, sh, wh, ff, ll, ss, ck — two letters, one sound!',
    keywords: ['this', 'check', 'shop', 'when', 'off', 'bell', 'miss', 'back'],
    is_reinforcing: true, mastery_threshold: 80, estimated_minutes: 35,
  },
  steps: [
    {
      id: 'l2-07-s1', lesson_id: 'lesson-l2-07', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review ALL the digraphs from Level 2!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-th-r',  grapheme: 'th', phoneme: '/th/', example_word: 'thin',  back_text: 'th — thin, that, with, bath, math' },
          { id: 'fc-ch-r',  grapheme: 'ch', phoneme: '/ch/', example_word: 'chin',  back_text: 'ch — chin, chest, much, each' },
          { id: 'fc-sh-r',  grapheme: 'sh', phoneme: '/sh/', example_word: 'ship',  back_text: 'sh — ship, fish, wish, fresh' },
          { id: 'fc-wh-r',  grapheme: 'wh', phoneme: '/wh/', example_word: 'when',  back_text: 'wh — when, what, which, white' },
          { id: 'fc-ff-r',  grapheme: 'ff', phoneme: '/f/',  example_word: 'puff',  back_text: 'ff — off, puff, cliff, stuff' },
          { id: 'fc-ll-r',  grapheme: 'll', phoneme: '/l/',  example_word: 'bell',  back_text: 'll — bell, tell, ball, full' },
          { id: 'fc-ss-r',  grapheme: 'ss', phoneme: '/s/',  example_word: 'miss',  back_text: 'ss — miss, kiss, class, mess' },
          { id: 'fc-ck-r',  grapheme: 'ck', phoneme: '/k/',  example_word: 'back',  back_text: 'ck — back, kick, lock, duck' },
        ],
      },
    },
    {
      id: 'l2-07-s2', lesson_id: 'lesson-l2-07', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'thick', phonemes: ['th','i','ck'],  syllables: ['thick'] },
          { word: 'chess', phonemes: ['ch','e','ss'],  syllables: ['chess'] },
          { word: 'shelf', phonemes: ['sh','e','lf'],  syllables: ['shelf'] },
          { word: 'whiff', phonemes: ['wh','i','ff'],  syllables: ['whiff'] },
          { word: 'skull', phonemes: ['sk','u','ll'],  syllables: ['skull'] },
        ],
      },
    },
    {
      id: 'l2-07-s3', lesson_id: 'lesson-l2-07', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build mixed digraph words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['th','i','ck','ch','e','ss','sh','lf','wh','ff','u','ll'],
        target_words: ['thick','chess','shelf','whiff','skull','shell','check','thatch'],
        allow_extra: false,
      },
    },
    {
      id: 'l2-07-s4', lesson_id: 'lesson-l2-07', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read these mixed digraph words. Watch for th, ch, sh, wh, ff, ll, ss, ck.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['this','thin','thick','that','three'],
          ['chess','check','shell','shelf','shock'],
          ['thatch','whiff','offstage','kickback','wishful'],
        ],
        sentences: [
          'Check the thick shelf for the chess set.',
          'Which child shall wash the dishes?',
          'The duck kicked and splashed off the dock.',
          'Whistle when the bell rings and the class must stop.',
        ],
      },
    },
    {
      id: 'l2-07-s5', lesson_id: 'lesson-l2-07', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'wishful',  definition: 'Full of hope and longing for something', sentence: 'She gave a wishful look at the candy shelf.' },
          { word: 'checkered', definition: 'Marked with a pattern of squares', sentence: 'The chess board has a checkered pattern.' },
          { word: 'thatch',   definition: 'Dry grass used to make a roof', sentence: 'Rain dripped through the old thatch roof.' },
        ],
      },
    },
    {
      id: 'l2-07-s6', lesson_id: 'lesson-l2-07', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Notice ALL the digraphs! Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l2-07',
        title: 'The Digraph Village',
        highlight_phonogram: 'digraphs',
        body: "In the thick of the bush, there was a small village. The children went to a school with a thatch roof and a shiny brass bell. Each morning, the bell would ring and the children would rush in. Their teacher was called Miss Chalk. She had white chalk and a full shelf of chess sets. \"This class will think, check, and push forward!\" she would say. Which child was the best? All of them! When the bell rang at the end of the day, the children would dash off. Some kicked stones on the path back home. The village was full of learning and laughter.",
        questions: [
          { id: 'q1', question: 'What kind of roof did the school have?',
            question_type: 'multiple_choice',
            options: [{ text:'A thick wooden roof', is_correct:false },{ text:'A thatch roof', is_correct:true },{ text:'A shell roof', is_correct:false },{ text:'A white roof', is_correct:false }] },
          { id: 'q2', question: 'What was the teacher\'s name?',
            question_type: 'multiple_choice',
            options: [{ text:'Miss Shell', is_correct:false },{ text:'Miss Thick', is_correct:false },{ text:'Miss Chalk', is_correct:true },{ text:'Miss Check', is_correct:false }] },
          { id: 'q3', question: 'All the children were good students.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l2-07-s7', lesson_id: 'lesson-l2-07', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the digraph that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/th/ — as in thin or that', answer: 'th' },
          { prompt: '/ch/ — as in chin or chess', answer: 'ch' },
          { prompt: '/sh/ — as in ship or wish', answer: 'sh' },
          { prompt: '/wh/ — as in when or which', answer: 'wh' },
          { prompt: '/f/ at the end — as in off or puff', answer: 'ff' },
          { prompt: '/l/ at the end — as in bell or full', answer: 'll' },
          { prompt: '/s/ at the end — as in miss or class', answer: 'ss' },
          { prompt: '/k/ at the end — as in back or duck', answer: 'ck' },
        ],
      },
    },
    {
      id: 'l2-07-s8', lesson_id: 'lesson-l2-07', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Identify the digraph and write the word.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'thick', answer: 'thick', hint: 'th + /i/ + ck — two digraphs!' },
          { prompt: 'chess', answer: 'chess', hint: 'ch + /e/ + ss — two digraphs!' },
          { prompt: 'shelf', answer: 'shelf', hint: 'sh + /e/ + lf' },
        ],
      },
    },
    {
      id: 'l2-07-s9', lesson_id: 'lesson-l2-07', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Pick the right digraph and spell it!',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'thick', phonogram: 'th,ck', use_in_sentence: 'The soup was thick.' },
          { word: 'chess', phonogram: 'ch,ss', use_in_sentence: 'Let us play chess.' },
          { word: 'shelf', phonogram: 'sh',    use_in_sentence: 'Put it on the shelf.' },
          { word: 'whiff', phonogram: 'wh,ff', use_in_sentence: 'I got a whiff of the cake.' },
          { word: 'clock', phonogram: 'ck',    use_in_sentence: 'Check the clock.' },
          { word: 'thorn', phonogram: 'th',    use_in_sentence: 'Watch out for the thorn.' },
        ],
      },
    },
    {
      id: 'l2-07-s10', lesson_id: 'lesson-l2-07', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Check the thick shelf for the chess set.', answer: 'Check the thick shelf for the chess set.', hint: '8 words, starts with Check' },
          { prompt: 'Which child shall rush off when the bell rings?', answer: 'Which child shall rush off when the bell rings?', hint: '9 words, starts with Which' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'this' },{ word:'thick' },{ word:'chess' },{ word:'check' },{ word:'shelf' },{ word:'shock' },{ word:'which' },{ word:'whiff' },{ word:'puff' },{ word:'bell' },{ word:'miss' },{ word:'back' }],
    sight:     [{ word:'the' },{ word:'there' },{ word:'their' },{ word:'some' },{ word:'would' },{ word:'forward' }],
    spelling:  [{ word:'thick' },{ word:'chess' },{ word:'shelf' },{ word:'whiff' },{ word:'clock' },{ word:'thorn' }],
  },
}
