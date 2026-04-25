import type { FullLesson } from '@/types'

export const lessonL3_01: FullLesson = {
  lesson: {
    id: 'lesson-l3-01', level_id: 3, lesson_number: 1,
    title: 'Silent-e — Long /a/',
    phonogram: 'a_e',
    phonics_rule: "When a word has a vowel, then a consonant, then a silent 'e', the vowel says its long name: cake, name, lake.",
    keywords: ['cake', 'name', 'lake', 'made', 'came'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-01-s1', lesson_id: 'lesson-l3-01', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes. The silent-e makes the vowel say its name!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a_e', grapheme: 'a_e', phoneme: '/ā/', example_word: 'cake', back_text: 'The silent e makes the a say its name: /ā/!' },
          { id: 'fc-a',   grapheme: 'a',   phoneme: '/a/', example_word: 'cat',  back_text: 'Short a, like in cat and hat.' },
          { id: 'fc-e_silent', grapheme: 'e (silent)', phoneme: 'silent', example_word: 'cake', back_text: 'The e at the end is silent — it just makes the vowel long!' },
        ],
      },
    },
    {
      id: 'l3-01-s2', lesson_id: 'lesson-l3-01', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'cake', phonemes: ['c', 'ā', 'k'], syllables: ['cake'] },
          { word: 'name', phonemes: ['n', 'ā', 'm'], syllables: ['name'] },
          { word: 'lake', phonemes: ['l', 'ā', 'k'], syllables: ['lake'] },
          { word: 'made', phonemes: ['m', 'ā', 'd'], syllables: ['made'] },
          { word: 'tape', phonemes: ['t', 'ā', 'p'], syllables: ['tape'] },
        ],
      },
    },
    {
      id: 'l3-01-s3', lesson_id: 'lesson-l3-01', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Use the letters to build long-a words. Remember the silent e!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['c', 'a', 'k', 'e', 'n', 'm', 'l', 't', 'p', 'g', 'v', 's'],
        target_words: ['cake', 'name', 'lake', 'made', 'tape', 'game', 'cave', 'came'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-01-s4', lesson_id: 'lesson-l3-01', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each long-a word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['cake', 'name', 'lake', 'made', 'came'],
          ['tape', 'game', 'cave', 'gate', 'late'],
          ['shake', 'flame', 'grade', 'place', 'brave'],
        ],
        sentences: [
          'Jake made a big cake.',
          'We came to the lake.',
          'Her name is Grace.',
          'The gate is by the cave.',
        ],
      },
    },
    {
      id: 'l3-01-s5', lesson_id: 'lesson-l3-01', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'brave', definition: 'Not afraid; willing to do hard things', sentence: 'The brave girl swam across the lake.' },
          { word: 'shade', definition: 'A cool, dark area out of the sun', sentence: 'We sat in the shade of the tree.' },
          { word: 'grace', definition: 'Smooth, beautiful movement', sentence: 'She danced with grace on the stage.' },
        ],
      },
    },
    {
      id: 'l3-01-s6', lesson_id: 'lesson-l3-01', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Long-a words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-01',
        title: 'A Day at the Lake',
        highlight_phonogram: 'a_e',
        body: "Jake and Grace went to the lake. Grace made a big cake to take along. Jake set up a shade by the gate. It was a warm and brave day to swim. Grace swam with grace. Jake played a game on the grass. Later, they ate the cake in the shade. The cake had a name on it — \"Lake Day Cake\"! Jake gave Grace a wave as the sun came down. It was a great day at the lake.",
        questions: [
          {
            id: 'q1', question: 'Where did Jake and Grace go?',
            question_type: 'multiple_choice',
            options: [
              { text: 'To the park', is_correct: false },
              { text: 'To the lake', is_correct: true },
              { text: 'To the store', is_correct: false },
              { text: 'To school', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'What did Grace make?',
            question_type: 'multiple_choice',
            options: [
              { text: 'A game', is_correct: false },
              { text: 'A gate', is_correct: false },
              { text: 'A big cake', is_correct: true },
              { text: 'A cave', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'Jake and Grace swam in the lake.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: false },
              { text: 'False', is_correct: true },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-01-s7', lesson_id: 'lesson-l3-01', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ā/ — the long a sound (as in cake)', answer: 'a_e' },
          { prompt: '/a/ — the short a sound (as in cat)', answer: 'a' },
        ],
      },
    },
    {
      id: 'l3-01-s8', lesson_id: 'lesson-l3-01', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'cake', answer: 'cake', hint: '3 sounds: /k/ /ā/ /k/ — silent e at end' },
          { prompt: 'name', answer: 'name', hint: '3 sounds: /n/ /ā/ /m/ — silent e at end' },
          { prompt: 'lake', answer: 'lake', hint: '3 sounds: /l/ /ā/ /k/ — silent e at end' },
        ],
      },
    },
    {
      id: 'l3-01-s9', lesson_id: 'lesson-l3-01', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly. Remember the silent e!',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'cake',  phonogram: 'a_e', use_in_sentence: 'She made a chocolate cake.' },
          { word: 'name',  phonogram: 'a_e', use_in_sentence: 'What is your name?' },
          { word: 'lake',  phonogram: 'a_e', use_in_sentence: 'We swam in the lake.' },
          { word: 'made',  phonogram: 'a_e', use_in_sentence: 'He made the bed.' },
          { word: 'game',  phonogram: 'a_e', use_in_sentence: 'We played a fun game.' },
          { word: 'brave', phonogram: 'a_e', use_in_sentence: 'She was very brave.' },
        ],
      },
    },
    {
      id: 'l3-01-s10', lesson_id: 'lesson-l3-01', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly as you hear it.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Jake made a big cake.', answer: 'Jake made a big cake.', hint: '5 words, starts with Jake' },
          { prompt: 'We came to the lake to play a game.', answer: 'We came to the lake to play a game.', hint: '9 words, starts with We' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'cake' }, { word: 'name' }, { word: 'lake' }, { word: 'made' },
      { word: 'came' }, { word: 'tape' }, { word: 'game' }, { word: 'gate' },
      { word: 'cave' }, { word: 'brave' }, { word: 'grade' }, { word: 'flame' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'we' }, { word: 'she' }, { word: 'they' }, { word: 'great' },
    ],
    spelling: [
      { word: 'cake' }, { word: 'name' }, { word: 'lake' }, { word: 'made' }, { word: 'game' }, { word: 'brave' },
    ],
  },
}

export const lessonL3_02: FullLesson = {
  lesson: {
    id: 'lesson-l3-02', level_id: 3, lesson_number: 2,
    title: 'Silent-e — Long /i/',
    phonogram: 'i_e',
    phonics_rule: "When a word has i, then a consonant, then silent e, the i says its name: bike, time, kite.",
    keywords: ['bike', 'time', 'kite', 'line', 'five'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-02-s1', lesson_id: 'lesson-l3-02', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-i_e', grapheme: 'i_e', phoneme: '/ī/', example_word: 'bike', back_text: 'The silent e makes the i say its name: /ī/!' },
          { id: 'fc-a_e', grapheme: 'a_e', phoneme: '/ā/', example_word: 'cake', back_text: 'Review: silent e makes a say /ā/.' },
          { id: 'fc-i',   grapheme: 'i',   phoneme: '/i/', example_word: 'bit',  back_text: 'Short i, like in bit and hit.' },
        ],
      },
    },
    {
      id: 'l3-02-s2', lesson_id: 'lesson-l3-02', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'bike', phonemes: ['b', 'ī', 'k'], syllables: ['bike'] },
          { word: 'time', phonemes: ['t', 'ī', 'm'], syllables: ['time'] },
          { word: 'kite', phonemes: ['k', 'ī', 't'], syllables: ['kite'] },
          { word: 'line', phonemes: ['l', 'ī', 'n'], syllables: ['line'] },
          { word: 'five', phonemes: ['f', 'ī', 'v'], syllables: ['five'] },
        ],
      },
    },
    {
      id: 'l3-02-s3', lesson_id: 'lesson-l3-02', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build long-i words. Remember the silent e!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b', 'i', 'k', 'e', 't', 'm', 'l', 'n', 'f', 'v', 'r', 'd'],
        target_words: ['bike', 'time', 'kite', 'line', 'fine', 'ride', 'dime', 'mine'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-02-s4', lesson_id: 'lesson-l3-02', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each long-i word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['bike', 'time', 'kite', 'line', 'five'],
          ['fine', 'ride', 'dime', 'mine', 'pine'],
          ['shine', 'smile', 'drive', 'prize', 'slide'],
        ],
        sentences: [
          'I ride my bike on the pine trail.',
          'It is time to fly the kite.',
          'Mike has a fine smile.',
          'Five dimes make fifty cents.',
        ],
      },
    },
    {
      id: 'l3-02-s5', lesson_id: 'lesson-l3-02', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'stride', definition: 'A long, confident step', sentence: 'Mike walked with a long stride.' },
          { word: 'prize',  definition: 'A reward you win', sentence: 'She won first prize at the kite race.' },
          { word: 'shine',  definition: 'To give off bright light', sentence: 'The sun will shine all day.' },
        ],
      },
    },
    {
      id: 'l3-02-s6', lesson_id: 'lesson-l3-02', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Long-i words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-02',
        title: 'Mike and the Kite',
        highlight_phonogram: 'i_e',
        body: "Mike had a fine red kite. He liked to ride his bike to the big pine tree. The kite would rise and shine in the sky. One time, the kite got stuck in a vine. Mike did not cry or hide. He used a long line to set it free. His smile was wide when the kite flew high. Mike felt pride inside. It was a perfect time to be outside.",
        questions: [
          {
            id: 'q1', question: 'What color was Mike\'s kite?',
            question_type: 'multiple_choice',
            options: [
              { text: 'Blue', is_correct: false },
              { text: 'Red', is_correct: true },
              { text: 'White', is_correct: false },
              { text: 'Green', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'How did Mike free the kite from the vine?',
            question_type: 'multiple_choice',
            options: [
              { text: 'He climbed the tree', is_correct: false },
              { text: 'He used a long line', is_correct: true },
              { text: 'He cried for help', is_correct: false },
              { text: 'He left it there', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'Mike felt sad when his kite got stuck.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: false },
              { text: 'False', is_correct: true },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-02-s7', lesson_id: 'lesson-l3-02', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ī/ — the long i sound (as in bike)', answer: 'i_e' },
          { prompt: '/i/ — the short i sound (as in bit)', answer: 'i' },
          { prompt: '/ā/ — the long a sound (as in cake)', answer: 'a_e' },
        ],
      },
    },
    {
      id: 'l3-02-s8', lesson_id: 'lesson-l3-02', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'bike', answer: 'bike', hint: '3 sounds: /b/ /ī/ /k/ — silent e at end' },
          { prompt: 'time', answer: 'time', hint: '3 sounds: /t/ /ī/ /m/ — silent e at end' },
          { prompt: 'kite', answer: 'kite', hint: '3 sounds: /k/ /ī/ /t/ — silent e at end' },
        ],
      },
    },
    {
      id: 'l3-02-s9', lesson_id: 'lesson-l3-02', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it. Remember the silent e!',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'bike',  phonogram: 'i_e', use_in_sentence: 'I ride my bike to school.' },
          { word: 'time',  phonogram: 'i_e', use_in_sentence: 'It is time for lunch.' },
          { word: 'kite',  phonogram: 'i_e', use_in_sentence: 'The kite flew high.' },
          { word: 'line',  phonogram: 'i_e', use_in_sentence: 'Stand in a straight line.' },
          { word: 'smile', phonogram: 'i_e', use_in_sentence: 'She had a big smile.' },
          { word: 'prize', phonogram: 'i_e', use_in_sentence: 'He won first prize.' },
        ],
      },
    },
    {
      id: 'l3-02-s10', lesson_id: 'lesson-l3-02', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly as you hear it.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'I ride my bike on the pine trail.', answer: 'I ride my bike on the pine trail.', hint: '8 words, starts with I' },
          { prompt: 'It is time to fly the kite in the sunshine.', answer: 'It is time to fly the kite in the sunshine.', hint: '10 words, starts with It' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'bike' }, { word: 'time' }, { word: 'kite' }, { word: 'line' },
      { word: 'fine' }, { word: 'ride' }, { word: 'dime' }, { word: 'mine' },
      { word: 'shine' }, { word: 'smile' }, { word: 'prize' }, { word: 'slide' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'he' }, { word: 'his' }, { word: 'was' }, { word: 'one' },
    ],
    spelling: [
      { word: 'bike' }, { word: 'time' }, { word: 'kite' }, { word: 'line' }, { word: 'smile' }, { word: 'prize' },
    ],
  },
}

export const lessonL3_03: FullLesson = {
  lesson: {
    id: 'lesson-l3-03', level_id: 3, lesson_number: 3,
    title: 'Silent-e — Long /o/',
    phonogram: 'o_e',
    phonics_rule: "When a word has o, then a consonant, then silent e, the o says its name: home, note, bone.",
    keywords: ['home', 'note', 'bone', 'rope', 'hope'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-03-s1', lesson_id: 'lesson-l3-03', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each card makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-o_e', grapheme: 'o_e', phoneme: '/ō/', example_word: 'home', back_text: 'The silent e makes the o say its name: /ō/!' },
          { id: 'fc-i_e', grapheme: 'i_e', phoneme: '/ī/', example_word: 'bike', back_text: 'Review: silent e makes i say /ī/.' },
          { id: 'fc-a_e', grapheme: 'a_e', phoneme: '/ā/', example_word: 'cake', back_text: 'Review: silent e makes a say /ā/.' },
        ],
      },
    },
    {
      id: 'l3-03-s2', lesson_id: 'lesson-l3-03', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'home', phonemes: ['h', 'ō', 'm'], syllables: ['home'] },
          { word: 'note', phonemes: ['n', 'ō', 't'], syllables: ['note'] },
          { word: 'bone', phonemes: ['b', 'ō', 'n'], syllables: ['bone'] },
          { word: 'rope', phonemes: ['r', 'ō', 'p'], syllables: ['rope'] },
          { word: 'hope', phonemes: ['h', 'ō', 'p'], syllables: ['hope'] },
        ],
      },
    },
    {
      id: 'l3-03-s3', lesson_id: 'lesson-l3-03', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build long-o words. Remember the silent e!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['h', 'o', 'm', 'e', 'n', 't', 'b', 'r', 'p', 'c', 'v', 's'],
        target_words: ['home', 'note', 'bone', 'rope', 'hope', 'cone', 'vote', 'stove'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-03-s4', lesson_id: 'lesson-l3-03', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each long-o word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['home', 'note', 'bone', 'rope', 'hope'],
          ['cone', 'vote', 'stove', 'stone', 'hole'],
          ['smoke', 'globe', 'drove', 'throne', 'those'],
        ],
        sentences: [
          'The dog found a bone by the stone.',
          'We drove home in the snow.',
          'She wrote a note on the rope.',
          'I hope we go to the store for a cone.',
        ],
      },
    },
    {
      id: 'l3-03-s5', lesson_id: 'lesson-l3-03', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'globe',  definition: 'A round model of the Earth', sentence: 'We spun the globe to find Jamaica.' },
          { word: 'throne', definition: 'A special chair for a king or queen', sentence: 'The queen sat on her golden throne.' },
          { word: 'smoke',  definition: 'The cloud of gas from something burning', sentence: 'Smoke rose from the campfire.' },
        ],
      },
    },
    {
      id: 'l3-03-s6', lesson_id: 'lesson-l3-03', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Long-o words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-03',
        title: "Stone Home",
        highlight_phonogram: 'o_e',
        body: "Cole lived in a stone home on a hill. He had a dog named Bone and a cat named Rose. One cold day, Cole drove home and lit the stove. Smoke rose from the chimney. Cole wrote a note: \"Hope you are warm.\" He tied the note to a rope and sent it to his neighbor. Rose the cat sat on the stone by the hole in the fence. Bone the dog dug close to the rose bush. Cole smiled. Home was a cozy zone.",
        questions: [
          {
            id: 'q1', question: 'What was Cole\'s dog named?',
            question_type: 'multiple_choice',
            options: [
              { text: 'Stone', is_correct: false },
              { text: 'Rose', is_correct: false },
              { text: 'Bone', is_correct: true },
              { text: 'Cole', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'How did Cole send the note to his neighbor?',
            question_type: 'multiple_choice',
            options: [
              { text: 'He drove it over', is_correct: false },
              { text: 'He tied it to a rope', is_correct: true },
              { text: 'He threw it', is_correct: false },
              { text: 'He put it in a hole', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'Cole lived in a wooden home.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: false },
              { text: 'False', is_correct: true },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-03-s7', lesson_id: 'lesson-l3-03', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ō/ — the long o sound (as in home)', answer: 'o_e' },
          { prompt: '/ī/ — the long i sound (as in bike)', answer: 'i_e' },
          { prompt: '/ā/ — the long a sound (as in cake)', answer: 'a_e' },
        ],
      },
    },
    {
      id: 'l3-03-s8', lesson_id: 'lesson-l3-03', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'home', answer: 'home', hint: '3 sounds: /h/ /ō/ /m/ — silent e at end' },
          { prompt: 'bone', answer: 'bone', hint: '3 sounds: /b/ /ō/ /n/ — silent e at end' },
          { prompt: 'rope', answer: 'rope', hint: '3 sounds: /r/ /ō/ /p/ — silent e at end' },
        ],
      },
    },
    {
      id: 'l3-03-s9', lesson_id: 'lesson-l3-03', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it. Remember the silent e!',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'home',  phonogram: 'o_e', use_in_sentence: 'We walked home from school.' },
          { word: 'note',  phonogram: 'o_e', use_in_sentence: 'She wrote me a note.' },
          { word: 'bone',  phonogram: 'o_e', use_in_sentence: 'The dog chewed a bone.' },
          { word: 'rope',  phonogram: 'o_e', use_in_sentence: 'Pull the rope tight.' },
          { word: 'stone', phonogram: 'o_e', use_in_sentence: 'He threw a stone in the lake.' },
          { word: 'smoke', phonogram: 'o_e', use_in_sentence: 'Smoke rose from the fire.' },
        ],
      },
    },
    {
      id: 'l3-03-s10', lesson_id: 'lesson-l3-03', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The dog found a bone by the stone.', answer: 'The dog found a bone by the stone.', hint: '8 words, starts with The' },
          { prompt: 'I hope we can drive home before it gets cold.', answer: 'I hope we can drive home before it gets cold.', hint: '10 words, starts with I' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'home' }, { word: 'note' }, { word: 'bone' }, { word: 'rope' },
      { word: 'hope' }, { word: 'cone' }, { word: 'stone' }, { word: 'hole' },
      { word: 'smoke' }, { word: 'globe' }, { word: 'drove' }, { word: 'stove' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'he' }, { word: 'she' }, { word: 'one' }, { word: 'cold' },
    ],
    spelling: [
      { word: 'home' }, { word: 'note' }, { word: 'bone' }, { word: 'rope' }, { word: 'stone' }, { word: 'smoke' },
    ],
  },
}

export const lessonL3_04: FullLesson = {
  lesson: {
    id: 'lesson-l3-04', level_id: 3, lesson_number: 4,
    title: 'Vowel Team ai / ay',
    phonogram: 'ai,ay',
    phonics_rule: "'ai' makes the long /ā/ sound in the middle of a word (rain, tail). 'ay' makes the long /ā/ sound at the end of a word (play, day).",
    keywords: ['rain', 'tail', 'play', 'day', 'wait'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-04-s1', lesson_id: 'lesson-l3-04', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each vowel team makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-ai', grapheme: 'ai', phoneme: '/ā/', example_word: 'rain', back_text: '"ai" in the middle — rain, tail, wait, sail' },
          { id: 'fc-ay', grapheme: 'ay', phoneme: '/ā/', example_word: 'play', back_text: '"ay" at the end — play, day, say, way' },
          { id: 'fc-a_e', grapheme: 'a_e', phoneme: '/ā/', example_word: 'cake', back_text: 'Review: silent-e pattern also makes /ā/' },
        ],
      },
    },
    {
      id: 'l3-04-s2', lesson_id: 'lesson-l3-04', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'rain', phonemes: ['r', 'ai', 'n'], syllables: ['rain'] },
          { word: 'tail', phonemes: ['t', 'ai', 'l'], syllables: ['tail'] },
          { word: 'play', phonemes: ['p', 'l', 'ay'], syllables: ['play'] },
          { word: 'day',  phonemes: ['d', 'ay'],       syllables: ['day'] },
          { word: 'wait', phonemes: ['w', 'ai', 't'], syllables: ['wait'] },
        ],
      },
    },
    {
      id: 'l3-04-s3', lesson_id: 'lesson-l3-04', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build ai and ay words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['r', 'ai', 'n', 'ay', 't', 'l', 'p', 'd', 'w', 's', 'm', 'g'],
        target_words: ['rain', 'tail', 'play', 'day', 'wait', 'sail', 'may', 'gain'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-04-s4', lesson_id: 'lesson-l3-04', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each ai/ay word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['rain', 'tail', 'wait', 'sail', 'main'],
          ['play', 'day',  'say',  'way',  'may'],
          ['train', 'braid', 'stain', 'spray', 'stay'],
        ],
        sentences: [
          'The train came on a rainy day.',
          'Wait for me to say the way.',
          'The snail left a trail in the rain.',
          'We will play and stay all day.',
        ],
      },
    },
    {
      id: 'l3-04-s5', lesson_id: 'lesson-l3-04', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'trail', definition: 'A path through nature', sentence: 'We hiked along the muddy trail after the rain.' },
          { word: 'main',  definition: 'The most important one', sentence: 'The main road was flooded after the storm.' },
          { word: 'spray', definition: 'Tiny drops of liquid flying through the air', sentence: 'The waves sent cold spray onto the sailboat.' },
        ],
      },
    },
    {
      id: 'l3-04-s6', lesson_id: 'lesson-l3-04', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. ai and ay words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-04',
        title: 'A Rainy Day',
        highlight_phonogram: 'ai',
        body: "Gail and Ray could not wait for the rain to stop. They sat by the window all day. Ray said, \"I have a plan! Let us sail paper boats in the drain!\" Gail got plain paper and made a tail for each boat. They placed them in the rain. The boats sailed down the main trail of water in the road. Gail gave a shout when her boat was in the lead. Ray said, \"What a great way to spend a rainy day!\"",
        questions: [
          {
            id: 'q1', question: 'What did Ray and Gail do on the rainy day?',
            question_type: 'multiple_choice',
            options: [
              { text: 'They went for a walk', is_correct: false },
              { text: 'They sailed paper boats in the drain', is_correct: true },
              { text: 'They played inside', is_correct: false },
              { text: 'They waited for the bus', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'Who made a tail for each paper boat?',
            question_type: 'multiple_choice',
            options: [
              { text: 'Ray', is_correct: false },
              { text: 'Gail', is_correct: true },
              { text: 'Both of them', is_correct: false },
              { text: 'Neither', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'The children stayed inside all day.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: false },
              { text: 'False', is_correct: true },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-04-s7', lesson_id: 'lesson-l3-04', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ā/ in the middle of a word — like rain or tail', answer: 'ai' },
          { prompt: '/ā/ at the end of a word — like play or day', answer: 'ay' },
        ],
      },
    },
    {
      id: 'l3-04-s8', lesson_id: 'lesson-l3-04', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'rain', answer: 'rain', hint: '3 sounds: /r/ /ā/ /n/ — use ai' },
          { prompt: 'play', answer: 'play', hint: '3 sounds: /p/ /l/ /ā/ — use ay at the end' },
          { prompt: 'tail', answer: 'tail', hint: '3 sounds: /t/ /ā/ /l/ — use ai' },
        ],
      },
    },
    {
      id: 'l3-04-s9', lesson_id: 'lesson-l3-04', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Use ai or ay correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'rain',  phonogram: 'ai', use_in_sentence: 'The rain fell all night.' },
          { word: 'tail',  phonogram: 'ai', use_in_sentence: 'The dog wagged its tail.' },
          { word: 'wait',  phonogram: 'ai', use_in_sentence: 'Please wait for me.' },
          { word: 'play',  phonogram: 'ay', use_in_sentence: 'We love to play outside.' },
          { word: 'day',   phonogram: 'ay', use_in_sentence: 'What a beautiful day!' },
          { word: 'trail', phonogram: 'ai', use_in_sentence: 'We hiked the mountain trail.' },
        ],
      },
    },
    {
      id: 'l3-04-s10', lesson_id: 'lesson-l3-04', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The train came on a rainy day.', answer: 'The train came on a rainy day.', hint: '7 words, starts with The' },
          { prompt: 'We will play and stay all day in the rain.', answer: 'We will play and stay all day in the rain.', hint: '10 words, starts with We' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'rain' }, { word: 'tail' }, { word: 'wait' }, { word: 'sail' },
      { word: 'play' }, { word: 'day' },  { word: 'say' },  { word: 'way' },
      { word: 'train' }, { word: 'braid' }, { word: 'spray' }, { word: 'trail' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'we' }, { word: 'all' }, { word: 'said' }, { word: 'their' },
    ],
    spelling: [
      { word: 'rain' }, { word: 'tail' }, { word: 'wait' }, { word: 'play' }, { word: 'day' }, { word: 'trail' },
    ],
  },
}

export const lessonL3_05: FullLesson = {
  lesson: {
    id: 'lesson-l3-05', level_id: 3, lesson_number: 5,
    title: 'Vowel Team ea / ee',
    phonogram: 'ea,ee',
    phonics_rule: "'ea' and 'ee' both make the long /ē/ sound: beach, read, feet, tree.",
    keywords: ['beach', 'read', 'feet', 'tree', 'green'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-05-s1', lesson_id: 'lesson-l3-05', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each vowel team makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-ea', grapheme: 'ea', phoneme: '/ē/', example_word: 'beach', back_text: '"ea" — beach, read, neat, heat, team' },
          { id: 'fc-ee', grapheme: 'ee', phoneme: '/ē/', example_word: 'tree',  back_text: '"ee" — tree, feet, green, sleep, teeth' },
          { id: 'fc-ai', grapheme: 'ai', phoneme: '/ā/', example_word: 'rain',  back_text: 'Review: ai makes /ā/ like rain' },
        ],
      },
    },
    {
      id: 'l3-05-s2', lesson_id: 'lesson-l3-05', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'beach', phonemes: ['b', 'ea', 'ch'], syllables: ['beach'] },
          { word: 'read',  phonemes: ['r', 'ea', 'd'],  syllables: ['read'] },
          { word: 'feet',  phonemes: ['f', 'ee', 't'],  syllables: ['feet'] },
          { word: 'tree',  phonemes: ['t', 'r', 'ee'],  syllables: ['tree'] },
          { word: 'green', phonemes: ['g', 'r', 'ee', 'n'], syllables: ['green'] },
        ],
      },
    },
    {
      id: 'l3-05-s3', lesson_id: 'lesson-l3-05', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build ea and ee words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b', 'ea', 'ch', 'r', 'd', 'f', 'ee', 't', 'g', 'n', 's', 'l'],
        target_words: ['beach', 'read', 'feet', 'tree', 'green', 'seal', 'feed', 'teeth'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-05-s4', lesson_id: 'lesson-l3-05', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each ea/ee word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['beach', 'read', 'neat', 'heat', 'team'],
          ['tree',  'feet', 'green', 'sleep', 'teeth'],
          ['dream', 'stream', 'cheese', 'squeeze', 'breeze'],
        ],
        sentences: [
          'The team sat under the green tree.',
          'We read on the beach in the heat.',
          'She fell asleep and had a sweet dream.',
          'Clean your teeth before you sleep!',
        ],
      },
    },
    {
      id: 'l3-05-s5', lesson_id: 'lesson-l3-05', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'breeze', definition: 'A light, gentle wind', sentence: 'A cool breeze blew off the sea at the beach.' },
          { word: 'stream', definition: 'A small, flowing body of water', sentence: 'Fish swam in the clear stream.' },
          { word: 'gleam',  definition: 'To shine with a soft, steady light', sentence: 'The sun made the sea gleam like silver.' },
        ],
      },
    },
    {
      id: 'l3-05-s6', lesson_id: 'lesson-l3-05', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. ea and ee words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-05',
        title: 'The Dream Beach',
        highlight_phonogram: 'ea',
        body: "Lee and Bea went to the beach on a sweet summer day. The sea was clean and green. A cool breeze swept between the palm trees. Lee dipped his feet in the cool stream near the sea. Bea liked to read beneath the shade of a tree. She read about seals, whales, and creatures of the deep. Lee fell asleep in the heat and had a dream. In his dream, he could breathe underwater and swim with a team of fish. When he woke, he smiled. The beach was still gleaming in the sunlight.",
        questions: [
          {
            id: 'q1', question: 'What did Bea do at the beach?',
            question_type: 'multiple_choice',
            options: [
              { text: 'She swam with fish', is_correct: false },
              { text: 'She read under a tree', is_correct: true },
              { text: 'She fell asleep', is_correct: false },
              { text: 'She built a sandcastle', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'What did Lee dream about?',
            question_type: 'multiple_choice',
            options: [
              { text: 'A cool breeze', is_correct: false },
              { text: 'Swimming underwater with fish', is_correct: true },
              { text: 'Reading a book', is_correct: false },
              { text: 'The green trees', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'Lee and Bea went to the beach together.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: true },
              { text: 'False', is_correct: false },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-05-s7', lesson_id: 'lesson-l3-05', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ē/ — as in beach or read', answer: 'ea' },
          { prompt: '/ē/ — as in tree or feet', answer: 'ee' },
        ],
      },
    },
    {
      id: 'l3-05-s8', lesson_id: 'lesson-l3-05', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'beach', answer: 'beach', hint: '3 sounds: /b/ /ē/ /ch/ — use ea' },
          { prompt: 'feet',  answer: 'feet',  hint: '3 sounds: /f/ /ē/ /t/ — use ee' },
          { prompt: 'read',  answer: 'read',  hint: '3 sounds: /r/ /ē/ /d/ — use ea' },
        ],
      },
    },
    {
      id: 'l3-05-s9', lesson_id: 'lesson-l3-05', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Use ea or ee correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'beach',  phonogram: 'ea', use_in_sentence: 'The beach was beautiful today.' },
          { word: 'read',   phonogram: 'ea', use_in_sentence: 'I love to read every night.' },
          { word: 'feet',   phonogram: 'ee', use_in_sentence: 'My feet are tired from walking.' },
          { word: 'tree',   phonogram: 'ee', use_in_sentence: 'The tree is tall and green.' },
          { word: 'green',  phonogram: 'ee', use_in_sentence: 'The grass is bright green.' },
          { word: 'dream',  phonogram: 'ea', use_in_sentence: 'I had a wonderful dream.' },
        ],
      },
    },
    {
      id: 'l3-05-s10', lesson_id: 'lesson-l3-05', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'We read on the beach in the heat.', answer: 'We read on the beach in the heat.', hint: '8 words, starts with We' },
          { prompt: 'The green tree gave us shade by the stream.', answer: 'The green tree gave us shade by the stream.', hint: '9 words, starts with The' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'beach' }, { word: 'read' }, { word: 'neat' }, { word: 'heat' },
      { word: 'tree' },  { word: 'feet' }, { word: 'green' }, { word: 'sleep' },
      { word: 'dream' }, { word: 'stream' }, { word: 'breeze' }, { word: 'teeth' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'she' }, { word: 'he' }, { word: 'we' }, { word: 'his' },
    ],
    spelling: [
      { word: 'beach' }, { word: 'read' }, { word: 'feet' }, { word: 'tree' }, { word: 'green' }, { word: 'dream' },
    ],
  },
}

export const lessonL3_06: FullLesson = {
  lesson: {
    id: 'lesson-l3-06', level_id: 3, lesson_number: 6,
    title: 'Vowel Team oa / ow',
    phonogram: 'oa,ow',
    phonics_rule: "'oa' makes the long /ō/ sound in the middle of a word (boat, road). 'ow' makes the long /ō/ sound at the end of a word (snow, low).",
    keywords: ['boat', 'road', 'snow', 'low', 'coat'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l3-06-s1', lesson_id: 'lesson-l3-06', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each vowel team makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-oa', grapheme: 'oa', phoneme: '/ō/', example_word: 'boat', back_text: '"oa" in the middle — boat, coat, road, toad, soak' },
          { id: 'fc-ow', grapheme: 'ow', phoneme: '/ō/', example_word: 'snow', back_text: '"ow" at the end — snow, low, flow, grow, show' },
          { id: 'fc-ea', grapheme: 'ea', phoneme: '/ē/', example_word: 'beach', back_text: 'Review: ea makes /ē/ like beach' },
        ],
      },
    },
    {
      id: 'l3-06-s2', lesson_id: 'lesson-l3-06', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'boat', phonemes: ['b', 'oa', 't'], syllables: ['boat'] },
          { word: 'road', phonemes: ['r', 'oa', 'd'], syllables: ['road'] },
          { word: 'snow', phonemes: ['s', 'n', 'ow'], syllables: ['snow'] },
          { word: 'low',  phonemes: ['l', 'ow'],       syllables: ['low'] },
          { word: 'coat', phonemes: ['c', 'oa', 't'],  syllables: ['coat'] },
        ],
      },
    },
    {
      id: 'l3-06-s3', lesson_id: 'lesson-l3-06', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build oa and ow words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b', 'oa', 't', 'r', 'd', 's', 'n', 'ow', 'l', 'c', 'g', 'f'],
        target_words: ['boat', 'road', 'snow', 'low', 'coat', 'toad', 'glow', 'flow'],
        allow_extra: false,
      },
    },
    {
      id: 'l3-06-s4', lesson_id: 'lesson-l3-06', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each oa/ow word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['boat', 'road', 'coat', 'toad', 'soak'],
          ['snow', 'low',  'flow', 'grow', 'show'],
          ['float', 'groan', 'throat', 'below', 'shadow'],
        ],
        sentences: [
          'The boat floated down the slow river.',
          'Snow fell low on the road below.',
          'Put on your coat in the cold and snow.',
          'The toad sat on a rock by the road.',
        ],
      },
    },
    {
      id: 'l3-06-s5', lesson_id: 'lesson-l3-06', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Learn what it means. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'float',  definition: 'To rest or move on top of water', sentence: 'The boat could float on the calm river.' },
          { word: 'below',  definition: 'Under or lower than something', sentence: 'The fish swam below the boat.' },
          { word: 'shadow', definition: 'A dark shape made when something blocks the light', sentence: 'The tree cast a long shadow on the road.' },
        ],
      },
    },
    {
      id: 'l3-06-s6', lesson_id: 'lesson-l3-06', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. oa and ow words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage',
        passage_id: 'passage-l3-06',
        title: 'The Boat in the Snow',
        highlight_phonogram: 'oa',
        body: "Joan and her dad put on their coats and walked down the road. Snow was falling low and slow. They came to a boat by the river. Dad said, \"Shall we float down the river?\" Joan let out a groan — the river looked cold! But she was brave. They stepped into the boat. It began to float. The water flowed below them. A toad on a rock gave a croak as they passed. Joan watched the shadow of trees grow on the snow. She felt a glow inside. \"This is the best show ever!\" she said with a moan that turned into a laugh.",
        questions: [
          {
            id: 'q1', question: 'Where did Joan and her dad go?',
            question_type: 'multiple_choice',
            options: [
              { text: 'To the beach', is_correct: false },
              { text: 'Down the river in a boat', is_correct: true },
              { text: 'To the park', is_correct: false },
              { text: 'To school', is_correct: false },
            ],
          },
          {
            id: 'q2', question: 'What did Joan see on a rock as they floated?',
            question_type: 'multiple_choice',
            options: [
              { text: 'A fish', is_correct: false },
              { text: 'A toad', is_correct: true },
              { text: 'A bird', is_correct: false },
              { text: 'A shadow', is_correct: false },
            ],
          },
          {
            id: 'q3', question: 'Joan was scared to get in the boat at first.',
            question_type: 'true_false',
            options: [
              { text: 'True', is_correct: true },
              { text: 'False', is_correct: false },
            ],
          },
        ],
      },
    },
    {
      id: 'l3-06-s7', lesson_id: 'lesson-l3-06', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letters that make it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/ō/ in the middle of a word — like boat or coat', answer: 'oa' },
          { prompt: '/ō/ at the end of a word — like snow or low', answer: 'ow' },
          { prompt: '/ē/ — like beach or feet', answer: 'ea' },
        ],
      },
    },
    {
      id: 'l3-06-s8', lesson_id: 'lesson-l3-06', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'boat', answer: 'boat', hint: '3 sounds: /b/ /ō/ /t/ — use oa' },
          { prompt: 'snow', answer: 'snow', hint: '3 sounds: /s/ /n/ /ō/ — use ow at end' },
          { prompt: 'coat', answer: 'coat', hint: '3 sounds: /k/ /ō/ /t/ — use oa' },
        ],
      },
    },
    {
      id: 'l3-06-s9', lesson_id: 'lesson-l3-06', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Use oa or ow correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'boat',  phonogram: 'oa', use_in_sentence: 'The boat sailed across the lake.' },
          { word: 'road',  phonogram: 'oa', use_in_sentence: 'The road was covered in snow.' },
          { word: 'coat',  phonogram: 'oa', use_in_sentence: 'Wear your coat in the cold.' },
          { word: 'snow',  phonogram: 'ow', use_in_sentence: 'The snow fell all night long.' },
          { word: 'low',   phonogram: 'ow', use_in_sentence: 'The sun was low in the sky.' },
          { word: 'float', phonogram: 'oa', use_in_sentence: 'The leaf began to float downstream.' },
        ],
      },
    },
    {
      id: 'l3-06-s10', lesson_id: 'lesson-l3-06', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The boat floated down the slow river.', answer: 'The boat floated down the slow river.', hint: '7 words, starts with The' },
          { prompt: 'Joan put on her coat before the snow began to fall.', answer: 'Joan put on her coat before the snow began to fall.', hint: '11 words, starts with Joan' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [
      { word: 'boat' }, { word: 'road' }, { word: 'coat' }, { word: 'toad' },
      { word: 'snow' }, { word: 'low' },  { word: 'flow' }, { word: 'grow' },
      { word: 'float' }, { word: 'groan' }, { word: 'below' }, { word: 'shadow' },
    ],
    sight: [
      { word: 'the' }, { word: 'a' }, { word: 'she' }, { word: 'her' }, { word: 'they' }, { word: 'cold' },
    ],
    spelling: [
      { word: 'boat' }, { word: 'road' }, { word: 'coat' }, { word: 'snow' }, { word: 'low' }, { word: 'float' },
    ],
  },
}
