import type { FullLesson } from '@/types'

export const lessonL1_01: FullLesson = {
  lesson: {
    id: 'lesson-l1-01', level_id: 1, lesson_number: 1,
    title: 'Short /a/ Sound', phonogram: 'a',
    phonics_rule: "The letter 'a' in the middle of a short word makes the /a/ sound, as in cat and hat.",
    keywords: ['cat', 'bat', 'hat', 'man', 'ran'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-01-s1', lesson_id: 'lesson-l1-01', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound this letter makes. Then say the example word.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a', grapheme: 'a', phoneme: '/a/', example_word: 'cat', back_text: 'Short /a/ — cat, hat, bat, man, ran, cap, bag' },
        ],
      },
    },
    {
      id: 'l1-01-s2', lesson_id: 'lesson-l1-01', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'cat', phonemes: ['c','a','t'], syllables: ['cat'] },
          { word: 'hat', phonemes: ['h','a','t'], syllables: ['hat'] },
          { word: 'bat', phonemes: ['b','a','t'], syllables: ['bat'] },
          { word: 'man', phonemes: ['m','a','n'], syllables: ['man'] },
          { word: 'ran', phonemes: ['r','a','n'], syllables: ['ran'] },
        ],
      },
    },
    {
      id: 'l1-01-s3', lesson_id: 'lesson-l1-01', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Use the letters to build short-a words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['c','a','t','h','b','m','n','r','p','s','g','d'],
        target_words: ['cat','hat','bat','man','ran','cap','sad','bag'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-01-s4', lesson_id: 'lesson-l1-01', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each short-a word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['cat','bat','hat','mat','rat'],
          ['man','ran','can','fan','pan'],
          ['cap','map','tap','nap','lap'],
        ],
        sentences: [
          'The cat sat on the mat.',
          'A man ran with a fan.',
          'Pat has a cap and a map.',
          'The rat had a nap in the bag.',
        ],
      },
    },
    {
      id: 'l1-01-s5', lesson_id: 'lesson-l1-01', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'mat',  definition: 'A flat piece on the floor to stand or sit on', sentence: 'The cat napped on the mat.' },
          { word: 'tap',  definition: 'To touch lightly and quickly', sentence: 'Tap the drum with your hand.' },
          { word: 'glad', definition: 'Happy and pleased', sentence: 'Sam was glad to see the cat.' },
        ],
      },
    },
    {
      id: 'l1-01-s6', lesson_id: 'lesson-l1-01', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Short-a words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-01',
        title: 'Sam and the Cat',
        highlight_phonogram: 'a',
        body: "Sam has a cat. The cat has a tan hat. The cat sat on a mat and had a nap. Sam ran up and sat by the cat. Sam had a bag. In the bag was a map and a cap. Sam gave the cap to the cat. The cat was glad. Sam and the cat sat and had a snack.",
        questions: [
          { id: 'q1', question: 'What does the cat have on its head?',
            question_type: 'multiple_choice',
            options: [{ text:'A bag', is_correct:false },{ text:'A tan hat', is_correct:true },{ text:'A cap', is_correct:false },{ text:'A mat', is_correct:false }] },
          { id: 'q2', question: 'Where did the cat take a nap?',
            question_type: 'multiple_choice',
            options: [{ text:'In a bag', is_correct:false },{ text:'On a mat', is_correct:true },{ text:'On Sam', is_correct:false },{ text:'By the map', is_correct:false }] },
          { id: 'q3', question: 'Sam gave the cat a cap.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l1-01-s7', lesson_id: 'lesson-l1-01', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letter that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — the short a sound (as in cat)', answer: 'a' },
        ],
      },
    },
    {
      id: 'l1-01-s8', lesson_id: 'lesson-l1-01', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'cat', answer: 'cat', hint: '3 sounds: /c/ /a/ /t/' },
          { prompt: 'hat', answer: 'hat', hint: '3 sounds: /h/ /a/ /t/' },
          { prompt: 'ran', answer: 'ran', hint: '3 sounds: /r/ /a/ /n/' },
        ],
      },
    },
    {
      id: 'l1-01-s9', lesson_id: 'lesson-l1-01', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'cat', phonogram: 'a', use_in_sentence: 'The cat sat on the rug.' },
          { word: 'hat', phonogram: 'a', use_in_sentence: 'She wore a big red hat.' },
          { word: 'bat', phonogram: 'a', use_in_sentence: 'He hit the ball with a bat.' },
          { word: 'man', phonogram: 'a', use_in_sentence: 'The man ran fast.' },
          { word: 'cap', phonogram: 'a', use_in_sentence: 'Put your cap on your head.' },
          { word: 'bag', phonogram: 'a', use_in_sentence: 'I have a big bag.' },
        ],
      },
    },
    {
      id: 'l1-01-s10', lesson_id: 'lesson-l1-01', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The cat sat on the mat.', answer: 'The cat sat on the mat.', hint: '6 words, starts with The' },
          { prompt: 'Sam ran and grabbed the bag and cap.', answer: 'Sam ran and grabbed the bag and cap.', hint: '7 words, starts with Sam' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'cat' },{ word:'bat' },{ word:'hat' },{ word:'mat' },{ word:'man' },{ word:'ran' },{ word:'can' },{ word:'pan' },{ word:'cap' },{ word:'map' },{ word:'tap' },{ word:'bag' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'has' },{ word:'on' },{ word:'and' },{ word:'in' }],
    spelling:  [{ word:'cat' },{ word:'hat' },{ word:'bat' },{ word:'man' },{ word:'cap' },{ word:'bag' }],
  },
}

export const lessonL1_02: FullLesson = {
  lesson: {
    id: 'lesson-l1-02', level_id: 1, lesson_number: 2,
    title: 'Short /i/ Sound', phonogram: 'i',
    phonics_rule: "The letter 'i' in the middle of a short word makes the /i/ sound, as in bit and dip.",
    keywords: ['bit', 'dip', 'fin', 'hit', 'pin'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-02-s1', lesson_id: 'lesson-l1-02', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each letter makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-i', grapheme: 'i', phoneme: '/i/', example_word: 'bit',  back_text: 'Short /i/ — bit, dip, fin, hit, pin, sit, lip' },
          { id: 'fc-a', grapheme: 'a', phoneme: '/a/', example_word: 'cat',  back_text: 'Review: short /a/ — cat, hat, man' },
        ],
      },
    },
    {
      id: 'l1-02-s2', lesson_id: 'lesson-l1-02', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'bit', phonemes: ['b','i','t'], syllables: ['bit'] },
          { word: 'dip', phonemes: ['d','i','p'], syllables: ['dip'] },
          { word: 'fin', phonemes: ['f','i','n'], syllables: ['fin'] },
          { word: 'hit', phonemes: ['h','i','t'], syllables: ['hit'] },
          { word: 'pin', phonemes: ['p','i','n'], syllables: ['pin'] },
        ],
      },
    },
    {
      id: 'l1-02-s3', lesson_id: 'lesson-l1-02', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build short-i words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b','i','t','d','p','f','n','h','s','l','w','g'],
        target_words: ['bit','dip','fin','hit','pin','sit','lip','wig'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-02-s4', lesson_id: 'lesson-l1-02', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each short-i word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['bit','hit','sit','pit','fit'],
          ['dip','lip','sip','tip','rip'],
          ['fin','pin','tin','win','bin'],
        ],
        sentences: [
          'The fish has a big fin.',
          'Jill can sit and sip.',
          'Tim hit the pin with a stick.',
          'I got a bit of dip on my lip.',
        ],
      },
    },
    {
      id: 'l1-02-s5', lesson_id: 'lesson-l1-02', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'fin',  definition: 'The flat wing on a fish that helps it swim', sentence: 'The fish flicked its fin in the water.' },
          { word: 'drip', definition: 'When a liquid falls in drops', sentence: 'Water drip drip dripped from the tap.' },
          { word: 'grin', definition: 'A big, wide smile', sentence: 'Tim had a big grin on his face.' },
        ],
      },
    },
    {
      id: 'l1-02-s6', lesson_id: 'lesson-l1-02', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Short-i words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-02',
        title: 'Kim and the Big Fish',
        highlight_phonogram: 'i',
        body: "Kim sat by the big pond. She had a thin pin and a bit of string. Kim dipped the pin in. She had to sit and wait. A fish swam up with a big fin. It bit the tip of the string! Kim did not slip. She held on. The fish did a flip and a dip. Kim got the fish in her grip. She had a big grin. Kim let the fish go back in. It was a big win!",
        questions: [
          { id: 'q1', question: 'What did Kim use to fish?',
            question_type: 'multiple_choice',
            options: [{ text:'A net', is_correct:false },{ text:'A thin pin and string', is_correct:true },{ text:'A stick', is_correct:false },{ text:'Her hands', is_correct:false }] },
          { id: 'q2', question: 'What did the fish do after Kim caught it?',
            question_type: 'multiple_choice',
            options: [{ text:'It swam away fast', is_correct:false },{ text:'Kim kept it', is_correct:false },{ text:'Kim let it go', is_correct:true },{ text:'It bit Kim', is_correct:false }] },
          { id: 'q3', question: 'Kim slipped and fell.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-02-s7', lesson_id: 'lesson-l1-02', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letter that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/i/ — the short i sound (as in bit)', answer: 'i' },
          { prompt: '/a/ — the short a sound (as in cat)', answer: 'a' },
        ],
      },
    },
    {
      id: 'l1-02-s8', lesson_id: 'lesson-l1-02', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'bit', answer: 'bit', hint: '3 sounds: /b/ /i/ /t/' },
          { prompt: 'dip', answer: 'dip', hint: '3 sounds: /d/ /i/ /p/' },
          { prompt: 'fin', answer: 'fin', hint: '3 sounds: /f/ /i/ /n/' },
        ],
      },
    },
    {
      id: 'l1-02-s9', lesson_id: 'lesson-l1-02', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'bit',  phonogram: 'i', use_in_sentence: 'I ate a bit of the apple.' },
          { word: 'dip',  phonogram: 'i', use_in_sentence: 'Dip the bread in the soup.' },
          { word: 'fin',  phonogram: 'i', use_in_sentence: 'The shark has a sharp fin.' },
          { word: 'hit',  phonogram: 'i', use_in_sentence: 'She hit the ball far.' },
          { word: 'pin',  phonogram: 'i', use_in_sentence: 'Pin the paper to the board.' },
          { word: 'sit',  phonogram: 'i', use_in_sentence: 'Please sit down.' },
        ],
      },
    },
    {
      id: 'l1-02-s10', lesson_id: 'lesson-l1-02', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The fish has a big fin.', answer: 'The fish has a big fin.', hint: '6 words, starts with The' },
          { prompt: 'Kim sat and dipped her pin in the pond.', answer: 'Kim sat and dipped her pin in the pond.', hint: '9 words, starts with Kim' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'bit' },{ word:'hit' },{ word:'sit' },{ word:'pit' },{ word:'dip' },{ word:'lip' },{ word:'sip' },{ word:'fin' },{ word:'pin' },{ word:'win' },{ word:'tin' },{ word:'wig' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'big' },{ word:'and' },{ word:'she' },{ word:'her' }],
    spelling:  [{ word:'bit' },{ word:'dip' },{ word:'fin' },{ word:'hit' },{ word:'pin' },{ word:'sit' }],
  },
}

export const lessonL1_03: FullLesson = {
  lesson: {
    id: 'lesson-l1-03', level_id: 1, lesson_number: 3,
    title: 'Short /o/ Sound', phonogram: 'o',
    phonics_rule: "The letter 'o' in the middle of a short word makes the /o/ sound, as in hot and mop.",
    keywords: ['hot', 'mop', 'log', 'top', 'dot'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-03-s1', lesson_id: 'lesson-l1-03', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each letter makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-o', grapheme: 'o', phoneme: '/o/', example_word: 'hot',  back_text: 'Short /o/ — hot, mop, log, top, dot, pot, box' },
          { id: 'fc-i', grapheme: 'i', phoneme: '/i/', example_word: 'bit',  back_text: 'Review: short /i/ — bit, dip, fin, hit' },
          { id: 'fc-a', grapheme: 'a', phoneme: '/a/', example_word: 'cat',  back_text: 'Review: short /a/ — cat, hat, man' },
        ],
      },
    },
    {
      id: 'l1-03-s2', lesson_id: 'lesson-l1-03', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'hot', phonemes: ['h','o','t'], syllables: ['hot'] },
          { word: 'mop', phonemes: ['m','o','p'], syllables: ['mop'] },
          { word: 'log', phonemes: ['l','o','g'], syllables: ['log'] },
          { word: 'top', phonemes: ['t','o','p'], syllables: ['top'] },
          { word: 'dot', phonemes: ['d','o','t'], syllables: ['dot'] },
        ],
      },
    },
    {
      id: 'l1-03-s3', lesson_id: 'lesson-l1-03', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build short-o words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['h','o','t','m','p','l','g','d','b','x','c','n'],
        target_words: ['hot','mop','log','top','dot','box','cot','nod'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-03-s4', lesson_id: 'lesson-l1-03', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each short-o word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['hot','pot','dot','lot','got'],
          ['mop','top','hop','pop','cop'],
          ['log','dog','fog','bog','hog'],
        ],
        sentences: [
          'The dog sat on a log in the fog.',
          'Mom got the mop to clean the top.',
          'The pot was hot on the stove.',
          'A frog can hop a lot.',
        ],
      },
    },
    {
      id: 'l1-03-s5', lesson_id: 'lesson-l1-03', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'fog',  definition: 'A thick mist that makes it hard to see', sentence: 'The fog was thick over the pond.' },
          { word: 'cot',  definition: 'A small, simple bed', sentence: 'The dog slept on a cot by the door.' },
          { word: 'plop', definition: 'To fall with a soft, heavy sound', sentence: 'The frog went plop into the pond.' },
        ],
      },
    },
    {
      id: 'l1-03-s6', lesson_id: 'lesson-l1-03', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Short-o words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-03',
        title: 'The Dog on the Log',
        highlight_phonogram: 'o',
        body: "Bob the dog sat on a big log. The fog was thick. Bob got hot. He saw a pond and ran to it. He gave a big hop and went plop in the pond! The cold water felt so good on his hot body. A frog sat on a rock and watched Bob. Bob dipped his paw in the mud. It got a lot of mud on it. Bob got out and got on top of the log again. He shook off the wet and was glad.",
        questions: [
          { id: 'q1', question: 'Where did Bob sit at the start?',
            question_type: 'multiple_choice',
            options: [{ text:'On a rock', is_correct:false },{ text:'On a log', is_correct:true },{ text:'In the pond', is_correct:false },{ text:'In the fog', is_correct:false }] },
          { id: 'q2', question: 'Why did Bob jump in the pond?',
            question_type: 'multiple_choice',
            options: [{ text:'He was cold', is_correct:false },{ text:'He chased a frog', is_correct:false },{ text:'He was hot', is_correct:true },{ text:'He slipped', is_correct:false }] },
          { id: 'q3', question: 'A cat watched Bob in the pond.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-03-s7', lesson_id: 'lesson-l1-03', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letter that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/o/ — the short o sound (as in hot)', answer: 'o' },
          { prompt: '/i/ — the short i sound (as in bit)', answer: 'i' },
          { prompt: '/a/ — the short a sound (as in cat)', answer: 'a' },
        ],
      },
    },
    {
      id: 'l1-03-s8', lesson_id: 'lesson-l1-03', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'hot', answer: 'hot', hint: '3 sounds: /h/ /o/ /t/' },
          { prompt: 'mop', answer: 'mop', hint: '3 sounds: /m/ /o/ /p/' },
          { prompt: 'log', answer: 'log', hint: '3 sounds: /l/ /o/ /g/' },
        ],
      },
    },
    {
      id: 'l1-03-s9', lesson_id: 'lesson-l1-03', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'hot',  phonogram: 'o', use_in_sentence: 'The soup is hot.' },
          { word: 'mop',  phonogram: 'o', use_in_sentence: 'Use the mop to clean the floor.' },
          { word: 'log',  phonogram: 'o', use_in_sentence: 'We sat on a log by the fire.' },
          { word: 'top',  phonogram: 'o', use_in_sentence: 'She climbed to the top.' },
          { word: 'dot',  phonogram: 'o', use_in_sentence: 'Draw a dot on the paper.' },
          { word: 'box',  phonogram: 'o', use_in_sentence: 'Put it in the box.' },
        ],
      },
    },
    {
      id: 'l1-03-s10', lesson_id: 'lesson-l1-03', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The dog sat on a log in the fog.', answer: 'The dog sat on a log in the fog.', hint: '9 words, starts with The' },
          { prompt: 'Bob got hot and hopped into the pond.', answer: 'Bob got hot and hopped into the pond.', hint: '8 words, starts with Bob' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'hot' },{ word:'pot' },{ word:'dot' },{ word:'got' },{ word:'mop' },{ word:'top' },{ word:'hop' },{ word:'log' },{ word:'dog' },{ word:'fog' },{ word:'box' },{ word:'cot' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'on' },{ word:'and' },{ word:'big' },{ word:'he' }],
    spelling:  [{ word:'hot' },{ word:'mop' },{ word:'log' },{ word:'top' },{ word:'dot' },{ word:'box' }],
  },
}

export const lessonL1_04: FullLesson = {
  lesson: {
    id: 'lesson-l1-04', level_id: 1, lesson_number: 4,
    title: 'Short /u/ Sound', phonogram: 'u',
    phonics_rule: "The letter 'u' in the middle of a short word makes the /u/ sound, as in bug and cup.",
    keywords: ['bug', 'cup', 'fun', 'run', 'sun'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-04-s1', lesson_id: 'lesson-l1-04', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each letter makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-u', grapheme: 'u', phoneme: '/u/', example_word: 'bug',  back_text: 'Short /u/ — bug, cup, fun, run, sun, mud, tub' },
          { id: 'fc-o', grapheme: 'o', phoneme: '/o/', example_word: 'hot',  back_text: 'Review: short /o/ — hot, mop, log' },
        ],
      },
    },
    {
      id: 'l1-04-s2', lesson_id: 'lesson-l1-04', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'bug', phonemes: ['b','u','g'], syllables: ['bug'] },
          { word: 'cup', phonemes: ['c','u','p'], syllables: ['cup'] },
          { word: 'fun', phonemes: ['f','u','n'], syllables: ['fun'] },
          { word: 'run', phonemes: ['r','u','n'], syllables: ['run'] },
          { word: 'sun', phonemes: ['s','u','n'], syllables: ['sun'] },
        ],
      },
    },
    {
      id: 'l1-04-s3', lesson_id: 'lesson-l1-04', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build short-u words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b','u','g','c','p','f','n','r','s','m','d','t'],
        target_words: ['bug','cup','fun','run','sun','mud','tub','bun'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-04-s4', lesson_id: 'lesson-l1-04', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each short-u word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['bug','mug','hug','jug','rug'],
          ['cup','pup','sup','up','cut'],
          ['fun','run','sun','bun','gun'],
        ],
        sentences: [
          'The pup ran in the sun.',
          'A bug sat on the rug by the jug.',
          'Gus had a cup and a bun for fun.',
          'Mud got on my rug when I ran in.',
        ],
      },
    },
    {
      id: 'l1-04-s5', lesson_id: 'lesson-l1-04', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'pup',  definition: 'A young dog', sentence: 'The little pup ran in the yard.' },
          { word: 'mud',  definition: 'Wet, soft dirt', sentence: 'The pup got mud all over his paws.' },
          { word: 'tub',  definition: 'A large container used for washing', sentence: 'We put the pup in the tub to wash off the mud.' },
        ],
      },
    },
    {
      id: 'l1-04-s6', lesson_id: 'lesson-l1-04', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Short-u words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-04',
        title: 'The Muddy Pup',
        highlight_phonogram: 'u',
        body: "Gus had a pup named Bud. Bud ran in the mud. The mud got on the rug. Gus had to get the tub. He put Bud in the tub. Bud did not like the tub! Bud made such a fuss. But Gus scrubbed the mud off. Bud got a hug and a bun as a treat. The sun was out. Bud ran back outside. Fun fun fun! But this time — no mud!",
        questions: [
          { id: 'q1', question: 'What was Bud covered in?',
            question_type: 'multiple_choice',
            options: [{ text:'Water', is_correct:false },{ text:'Mud', is_correct:true },{ text:'Bugs', is_correct:false },{ text:'Sun', is_correct:false }] },
          { id: 'q2', question: 'What did Gus give Bud after the bath?',
            question_type: 'multiple_choice',
            options: [{ text:'A cup', is_correct:false },{ text:'A rug', is_correct:false },{ text:'A hug and a bun', is_correct:true },{ text:'A run', is_correct:false }] },
          { id: 'q3', question: 'Bud loved being in the tub.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-04-s7', lesson_id: 'lesson-l1-04', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letter that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/u/ — the short u sound (as in bug)', answer: 'u' },
          { prompt: '/o/ — the short o sound (as in hot)', answer: 'o' },
        ],
      },
    },
    {
      id: 'l1-04-s8', lesson_id: 'lesson-l1-04', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'bug', answer: 'bug', hint: '3 sounds: /b/ /u/ /g/' },
          { prompt: 'cup', answer: 'cup', hint: '3 sounds: /c/ /u/ /p/' },
          { prompt: 'sun', answer: 'sun', hint: '3 sounds: /s/ /u/ /n/' },
        ],
      },
    },
    {
      id: 'l1-04-s9', lesson_id: 'lesson-l1-04', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'bug', phonogram: 'u', use_in_sentence: 'A bug landed on my arm.' },
          { word: 'cup', phonogram: 'u', use_in_sentence: 'She drank from a cup.' },
          { word: 'fun', phonogram: 'u', use_in_sentence: 'We had lots of fun at the park.' },
          { word: 'run', phonogram: 'u', use_in_sentence: 'I can run very fast.' },
          { word: 'sun', phonogram: 'u', use_in_sentence: 'The sun is bright today.' },
          { word: 'mud', phonogram: 'u', use_in_sentence: 'My boots are covered in mud.' },
        ],
      },
    },
    {
      id: 'l1-04-s10', lesson_id: 'lesson-l1-04', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The pup ran in the mud and sun.', answer: 'The pup ran in the mud and sun.', hint: '8 words, starts with The' },
          { prompt: 'Gus gave Bud a hug and a bun.', answer: 'Gus gave Bud a hug and a bun.', hint: '8 words, starts with Gus' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'bug' },{ word:'mug' },{ word:'hug' },{ word:'rug' },{ word:'cup' },{ word:'pup' },{ word:'fun' },{ word:'run' },{ word:'sun' },{ word:'bun' },{ word:'mud' },{ word:'tub' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'he' },{ word:'no' },{ word:'and' },{ word:'back' }],
    spelling:  [{ word:'bug' },{ word:'cup' },{ word:'fun' },{ word:'run' },{ word:'sun' },{ word:'mud' }],
  },
}

export const lessonL1_05: FullLesson = {
  lesson: {
    id: 'lesson-l1-05', level_id: 1, lesson_number: 5,
    title: 'Short /e/ Sound', phonogram: 'e',
    phonics_rule: "The letter 'e' in the middle of a short word makes the /e/ sound, as in bed and hen.",
    keywords: ['bed', 'hen', 'net', 'pet', 'red'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-05-s1', lesson_id: 'lesson-l1-05', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Say the sound each letter makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-e', grapheme: 'e', phoneme: '/e/', example_word: 'bed',  back_text: 'Short /e/ — bed, hen, net, pet, red, set, web' },
          { id: 'fc-u', grapheme: 'u', phoneme: '/u/', example_word: 'bug',  back_text: 'Review: short /u/ — bug, cup, run, sun' },
          { id: 'fc-o', grapheme: 'o', phoneme: '/o/', example_word: 'hot',  back_text: 'Review: short /o/ — hot, log, top' },
        ],
      },
    },
    {
      id: 'l1-05-s2', lesson_id: 'lesson-l1-05', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'bed', phonemes: ['b','e','d'], syllables: ['bed'] },
          { word: 'hen', phonemes: ['h','e','n'], syllables: ['hen'] },
          { word: 'net', phonemes: ['n','e','t'], syllables: ['net'] },
          { word: 'pet', phonemes: ['p','e','t'], syllables: ['pet'] },
          { word: 'red', phonemes: ['r','e','d'], syllables: ['red'] },
        ],
      },
    },
    {
      id: 'l1-05-s3', lesson_id: 'lesson-l1-05', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build short-e words!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['b','e','d','h','n','t','p','r','s','w','j','l'],
        target_words: ['bed','hen','net','pet','red','set','web','jet'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-05-s4', lesson_id: 'lesson-l1-05', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each short-e word aloud. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['bed','red','fed','led','sled'],
          ['hen','ten','men','pen','den'],
          ['net','pet','set','wet','jet'],
        ],
        sentences: [
          'The red hen sat on her nest.',
          'Jen fed her pet on the bed.',
          'Ten men got wet in the den.',
          'The jet flew over the wet fields.',
        ],
      },
    },
    {
      id: 'l1-05-s5', lesson_id: 'lesson-l1-05', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'nest', definition: 'A home that a bird builds for its eggs', sentence: 'The red hen sat on her nest.' },
          { word: 'den',  definition: 'A cozy room for relaxing, or a wild animal\'s home', sentence: 'The fox slept in its den.' },
          { word: 'jet',  definition: 'A very fast airplane', sentence: 'The jet flew across the sky.' },
        ],
      },
    },
    {
      id: 'l1-05-s6', lesson_id: 'lesson-l1-05', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Short-e words are highlighted. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-05',
        title: 'Jen and the Red Hen',
        highlight_phonogram: 'e',
        body: "Jen had a red hen named Nell. Nell had a nest in the shed. The nest had ten eggs in it. Jen fed Nell and kept the shed clean. One wet day, Jen went to check. The ten eggs had all cracked! Ten yellow chicks ran from the nest. Nell the hen was not upset. She led her ten chicks to get a drink from a big metal pan. Jen set up a pen for them. It was the best day on the farm yet.",
        questions: [
          { id: 'q1', question: 'How many eggs were in Nell\'s nest?',
            question_type: 'multiple_choice',
            options: [{ text:'Five', is_correct:false },{ text:'Six', is_correct:false },{ text:'Ten', is_correct:true },{ text:'Two', is_correct:false }] },
          { id: 'q2', question: 'Where did Nell have her nest?',
            question_type: 'multiple_choice',
            options: [{ text:'In the den', is_correct:false },{ text:'In the shed', is_correct:true },{ text:'In Jen\'s bed', is_correct:false },{ text:'By the net', is_correct:false }] },
          { id: 'q3', question: 'Nell was upset when the eggs cracked.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-05-s7', lesson_id: 'lesson-l1-05', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the sound. Type the letter that makes it.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/e/ — the short e sound (as in bed)', answer: 'e' },
          { prompt: '/u/ — the short u sound (as in bug)', answer: 'u' },
          { prompt: '/i/ — the short i sound (as in bit)', answer: 'i' },
        ],
      },
    },
    {
      id: 'l1-05-s8', lesson_id: 'lesson-l1-05', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'bed', answer: 'bed', hint: '3 sounds: /b/ /e/ /d/' },
          { prompt: 'hen', answer: 'hen', hint: '3 sounds: /h/ /e/ /n/' },
          { prompt: 'pet', answer: 'pet', hint: '3 sounds: /p/ /e/ /t/' },
        ],
      },
    },
    {
      id: 'l1-05-s9', lesson_id: 'lesson-l1-05', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'bed', phonogram: 'e', use_in_sentence: 'Go to bed early.' },
          { word: 'hen', phonogram: 'e', use_in_sentence: 'The red hen clucks.' },
          { word: 'net', phonogram: 'e', use_in_sentence: 'Catch the butterfly with a net.' },
          { word: 'pet', phonogram: 'e', use_in_sentence: 'I love my pet cat.' },
          { word: 'red', phonogram: 'e', use_in_sentence: 'The apple is red.' },
          { word: 'set', phonogram: 'e', use_in_sentence: 'Set the cups on the table.' },
        ],
      },
    },
    {
      id: 'l1-05-s10', lesson_id: 'lesson-l1-05', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The red hen sat on her nest.', answer: 'The red hen sat on her nest.', hint: '7 words, starts with The' },
          { prompt: 'Jen fed her pet and set up a pen.', answer: 'Jen fed her pet and set up a pen.', hint: '9 words, starts with Jen' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'bed' },{ word:'red' },{ word:'fed' },{ word:'led' },{ word:'hen' },{ word:'ten' },{ word:'pen' },{ word:'net' },{ word:'pet' },{ word:'set' },{ word:'wet' },{ word:'jet' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'her' },{ word:'had' },{ word:'one' },{ word:'all' }],
    spelling:  [{ word:'bed' },{ word:'hen' },{ word:'net' },{ word:'pet' },{ word:'red' },{ word:'set' }],
  },
}

export const lessonL1_06: FullLesson = {
  lesson: {
    id: 'lesson-l1-06', level_id: 1, lesson_number: 6,
    title: 'CVC Words – Set 1', phonogram: 'CVC',
    phonics_rule: 'A CVC word has one consonant, one short vowel, and one consonant. The vowel is always short.',
    keywords: ['cap','hit','hop','bud','red'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-06-s1', lesson_id: 'lesson-l1-06', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review all five short vowels. Say the sound each makes.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a', grapheme: 'a', phoneme: '/a/', example_word: 'cat', back_text: 'Short /a/ — cat, hat, cap, bag' },
          { id: 'fc-i', grapheme: 'i', phoneme: '/i/', example_word: 'hit', back_text: 'Short /i/ — hit, bit, dip, fin' },
          { id: 'fc-o', grapheme: 'o', phoneme: '/o/', example_word: 'hop', back_text: 'Short /o/ — hop, hot, log, dot' },
          { id: 'fc-u', grapheme: 'u', phoneme: '/u/', example_word: 'bud', back_text: 'Short /u/ — bud, bug, cup, fun' },
          { id: 'fc-e', grapheme: 'e', phoneme: '/e/', example_word: 'red', back_text: 'Short /e/ — red, bed, hen, net' },
        ],
      },
    },
    {
      id: 'l1-06-s2', lesson_id: 'lesson-l1-06', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each CVC word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'cap', phonemes: ['c','a','p'], syllables: ['cap'] },
          { word: 'hit', phonemes: ['h','i','t'], syllables: ['hit'] },
          { word: 'hop', phonemes: ['h','o','p'], syllables: ['hop'] },
          { word: 'bud', phonemes: ['b','u','d'], syllables: ['bud'] },
          { word: 'red', phonemes: ['r','e','d'], syllables: ['red'] },
        ],
      },
    },
    {
      id: 'l1-06-s3', lesson_id: 'lesson-l1-06', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build CVC words with mixed short vowels!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['c','a','p','h','i','t','o','b','u','d','r','e'],
        target_words: ['cap','hit','hop','bud','red','bad','big','box'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-06-s4', lesson_id: 'lesson-l1-06', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each CVC word. Say the short vowel sound clearly.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['cap','tap','nap','map','gap'],
          ['hit','sit','bit','fit','pit'],
          ['hop','mop','top','pop','cop'],
        ],
        sentences: [
          'Tap the top of the cap.',
          'The pup bit the tip of my mitt.',
          'Hop on top of the box, said Pop.',
          'The map had a big red dot on it.',
        ],
      },
    },
    {
      id: 'l1-06-s5', lesson_id: 'lesson-l1-06', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'cub',  definition: 'A baby bear, lion, or wolf', sentence: 'The bear cub ran to its mom.' },
          { word: 'den',  definition: 'A cozy, hidden space', sentence: 'The fox pups slept in the den.' },
          { word: 'nip',  definition: 'To bite lightly and quickly', sentence: 'The pup liked to nip at socks.' },
        ],
      },
    },
    {
      id: 'l1-06-s6', lesson_id: 'lesson-l1-06', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. CVC words are all around. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-06',
        title: 'Bix the Pup',
        highlight_phonogram: 'CVC',
        body: "Bix was a small tan pup. He had a red cap that Meg put on him. Bix sat on a big flat mat. He got up to run and hop. He bit at a rag. He nipped at a tin can. He dug in the mud by the big log. Bix got wet. Meg had to get the tub. She set Bix in the tub and scrubbed him. Bix sat still and let Meg rub him dry. Then Bix put on his red cap and had a nap. What a fun pup!",
        questions: [
          { id: 'q1', question: 'What did Bix wear?',
            question_type: 'multiple_choice',
            options: [{ text:'A tan hat', is_correct:false },{ text:'A red cap', is_correct:true },{ text:'A big wig', is_correct:false },{ text:'A wet rag', is_correct:false }] },
          { id: 'q2', question: 'What did Meg do after Bix got muddy?',
            question_type: 'multiple_choice',
            options: [{ text:'She put him in the den', is_correct:false },{ text:'She gave him a nap', is_correct:false },{ text:'She put him in the tub', is_correct:true },{ text:'She ran off', is_correct:false }] },
          { id: 'q3', question: 'Bix loved being in the tub.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-06-s7', lesson_id: 'lesson-l1-06', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the short vowel sound. Type the letter.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — short a (cat)', answer: 'a' },
          { prompt: '/i/ — short i (bit)', answer: 'i' },
          { prompt: '/o/ — short o (hot)', answer: 'o' },
          { prompt: '/u/ — short u (bug)', answer: 'u' },
          { prompt: '/e/ — short e (bed)', answer: 'e' },
        ],
      },
    },
    {
      id: 'l1-06-s8', lesson_id: 'lesson-l1-06', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'cap', answer: 'cap', hint: '3 sounds: /c/ /a/ /p/' },
          { prompt: 'hit', answer: 'hit', hint: '3 sounds: /h/ /i/ /t/' },
          { prompt: 'hop', answer: 'hop', hint: '3 sounds: /h/ /o/ /p/' },
        ],
      },
    },
    {
      id: 'l1-06-s9', lesson_id: 'lesson-l1-06', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Identify the short vowel and spell it.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'cap', phonogram: 'a', use_in_sentence: 'Put on your cap.' },
          { word: 'sit', phonogram: 'i', use_in_sentence: 'Sit down please.' },
          { word: 'hop', phonogram: 'o', use_in_sentence: 'Frogs hop.' },
          { word: 'mud', phonogram: 'u', use_in_sentence: 'Do not step in the mud.' },
          { word: 'pet', phonogram: 'e', use_in_sentence: 'She has a pet fish.' },
          { word: 'nap', phonogram: 'a', use_in_sentence: 'The cat had a nap.' },
        ],
      },
    },
    {
      id: 'l1-06-s10', lesson_id: 'lesson-l1-06', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Bix the pup sat on the mat with his red cap.', answer: 'Bix the pup sat on the mat with his red cap.', hint: '10 words, starts with Bix' },
          { prompt: 'Hop on top and tap the box.', answer: 'Hop on top and tap the box.', hint: '7 words, starts with Hop' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'cap' },{ word:'tap' },{ word:'map' },{ word:'hit' },{ word:'sit' },{ word:'bit' },{ word:'hop' },{ word:'mop' },{ word:'top' },{ word:'bud' },{ word:'red' },{ word:'pet' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'his' },{ word:'put' },{ word:'she' },{ word:'had' }],
    spelling:  [{ word:'cap' },{ word:'sit' },{ word:'hop' },{ word:'mud' },{ word:'pet' },{ word:'nap' }],
  },
}

export const lessonL1_07: FullLesson = {
  lesson: {
    id: 'lesson-l1-07', level_id: 1, lesson_number: 7,
    title: 'CVC Words – Set 2', phonogram: 'CVC',
    phonics_rule: 'Practice more CVC words. Say each sound, then blend them together into a word.',
    keywords: ['sip','fog','beg','rut','wag'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-07-s1', lesson_id: 'lesson-l1-07', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review all five short vowels.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a2', grapheme: 'a', phoneme: '/a/', example_word: 'wag', back_text: 'Short /a/ — wag, dab, jab, lap' },
          { id: 'fc-i2', grapheme: 'i', phoneme: '/i/', example_word: 'sip', back_text: 'Short /i/ — sip, lip, rip, tip' },
          { id: 'fc-o2', grapheme: 'o', phoneme: '/o/', example_word: 'fog', back_text: 'Short /o/ — fog, bog, nod, sob' },
          { id: 'fc-u2', grapheme: 'u', phoneme: '/u/', example_word: 'rut', back_text: 'Short /u/ — rut, gut, but, cut' },
          { id: 'fc-e2', grapheme: 'e', phoneme: '/e/', example_word: 'beg', back_text: 'Short /e/ — beg, peg, leg, keg' },
        ],
      },
    },
    {
      id: 'l1-07-s2', lesson_id: 'lesson-l1-07', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'sip', phonemes: ['s','i','p'], syllables: ['sip'] },
          { word: 'fog', phonemes: ['f','o','g'], syllables: ['fog'] },
          { word: 'beg', phonemes: ['b','e','g'], syllables: ['beg'] },
          { word: 'rut', phonemes: ['r','u','t'], syllables: ['rut'] },
          { word: 'wag', phonemes: ['w','a','g'], syllables: ['wag'] },
        ],
      },
    },
    {
      id: 'l1-07-s3', lesson_id: 'lesson-l1-07', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build more CVC words with mixed short vowels!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['s','i','p','f','o','g','b','e','r','u','t','w','a'],
        target_words: ['sip','fog','beg','rut','wag','leg','sob','gut'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-07-s4', lesson_id: 'lesson-l1-07', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each CVC word. Then read the sentences.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['wag','bag','lag','nag','rag'],
          ['sip','rip','tip','hip','lip'],
          ['fog','log','dog','hog','bog'],
        ],
        sentences: [
          'The dog wagged its tail in the fog.',
          'Sip the juice, do not rip the cup.',
          'Peg had to beg the dog off the bed.',
          'A hog sat in the mud by a log in the bog.',
        ],
      },
    },
    {
      id: 'l1-07-s5', lesson_id: 'lesson-l1-07', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'wag',  definition: 'To move back and forth', sentence: 'The dog began to wag its tail.' },
          { word: 'beg',  definition: 'To ask very seriously for something', sentence: 'The pup would beg for a treat.' },
          { word: 'rut',  definition: 'A deep groove in the ground', sentence: 'The wagon got stuck in the rut.' },
        ],
      },
    },
    {
      id: 'l1-07-s6', lesson_id: 'lesson-l1-07', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-07',
        title: 'Peg and Rex',
        highlight_phonogram: 'CVC',
        body: "Peg had a big dog named Rex. Rex had a red tag on his collar and a tan spot on his hip. Rex liked to wag and wag. He would sip from his big tin cup. On foggy days, Rex did not like to get up. He would beg to stay on his rug. But Peg led him out. Rex ran in the wet fog. His paws got in a rut. Mud got on his leg and hip. Peg had to get a big rag to rub Rex. Rex just wagged and let her. Then they sat on the step and had a rest.",
        questions: [
          { id: 'q1', question: 'What did Rex have on his collar?',
            question_type: 'multiple_choice',
            options: [{ text:'A bell', is_correct:false },{ text:'A red tag', is_correct:true },{ text:'A bow', is_correct:false },{ text:'A spot', is_correct:false }] },
          { id: 'q2', question: 'What did Rex do on foggy days?',
            question_type: 'multiple_choice',
            options: [{ text:'He ran a lot', is_correct:false },{ text:'He begged to stay on his rug', is_correct:true },{ text:'He sipped from his cup', is_correct:false },{ text:'He wagged his tail', is_correct:false }] },
          { id: 'q3', question: 'Rex got muddy on the walk.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l1-07-s7', lesson_id: 'lesson-l1-07', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the short vowel sound. Type the letter.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — short a (wag)', answer: 'a' },
          { prompt: '/i/ — short i (sip)', answer: 'i' },
          { prompt: '/o/ — short o (fog)', answer: 'o' },
          { prompt: '/u/ — short u (rut)', answer: 'u' },
          { prompt: '/e/ — short e (beg)', answer: 'e' },
        ],
      },
    },
    {
      id: 'l1-07-s8', lesson_id: 'lesson-l1-07', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'wag', answer: 'wag', hint: '3 sounds: /w/ /a/ /g/' },
          { prompt: 'fog', answer: 'fog', hint: '3 sounds: /f/ /o/ /g/' },
          { prompt: 'beg', answer: 'beg', hint: '3 sounds: /b/ /e/ /g/' },
        ],
      },
    },
    {
      id: 'l1-07-s9', lesson_id: 'lesson-l1-07', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Identify the short vowel and spell it.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'wag', phonogram: 'a', use_in_sentence: 'The dog wagged its tail.' },
          { word: 'sip', phonogram: 'i', use_in_sentence: 'Sip your water slowly.' },
          { word: 'fog', phonogram: 'o', use_in_sentence: 'The fog hid the hills.' },
          { word: 'rut', phonogram: 'u', use_in_sentence: 'The car got stuck in a rut.' },
          { word: 'beg', phonogram: 'e', use_in_sentence: 'Do not beg for candy.' },
          { word: 'leg', phonogram: 'e', use_in_sentence: 'She hurt her leg.' },
        ],
      },
    },
    {
      id: 'l1-07-s10', lesson_id: 'lesson-l1-07', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Rex ran in the fog and got mud on his leg.', answer: 'Rex ran in the fog and got mud on his leg.', hint: '10 words, starts with Rex' },
          { prompt: 'Peg had to use a big rag to rub Rex.', answer: 'Peg had to use a big rag to rub Rex.', hint: '10 words, starts with Peg' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'wag' },{ word:'bag' },{ word:'rag' },{ word:'sip' },{ word:'rip' },{ word:'tip' },{ word:'fog' },{ word:'log' },{ word:'dog' },{ word:'beg' },{ word:'leg' },{ word:'rut' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'his' },{ word:'had' },{ word:'she' },{ word:'on' }],
    spelling:  [{ word:'wag' },{ word:'sip' },{ word:'fog' },{ word:'rut' },{ word:'beg' },{ word:'leg' }],
  },
}

export const lessonL1_08: FullLesson = {
  lesson: {
    id: 'lesson-l1-08', level_id: 1, lesson_number: 8,
    title: 'Blending Practice', phonogram: 'blend',
    phonics_rule: 'Blending means saying each sound and then sliding them together to make a word.',
    keywords: ['blend','sound','slide','word','read'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-08-s1', lesson_id: 'lesson-l1-08', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review all five short vowels before we blend!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a3', grapheme: 'a', phoneme: '/a/', example_word: 'cat', back_text: 'Short /a/ — cat, bat, hat' },
          { id: 'fc-i3', grapheme: 'i', phoneme: '/i/', example_word: 'bit', back_text: 'Short /i/ — bit, hit, sit' },
          { id: 'fc-o3', grapheme: 'o', phoneme: '/o/', example_word: 'hot', back_text: 'Short /o/ — hot, mop, log' },
          { id: 'fc-u3', grapheme: 'u', phoneme: '/u/', example_word: 'bug', back_text: 'Short /u/ — bug, cup, run' },
          { id: 'fc-e3', grapheme: 'e', phoneme: '/e/', example_word: 'bed', back_text: 'Short /e/ — bed, hen, net' },
        ],
      },
    },
    {
      id: 'l1-08-s2', lesson_id: 'lesson-l1-08', step_number: 2,
      step_type: 'phonological_awareness', title: 'Blending Sounds',
      instructions: 'Listen to the sounds. Blend them together to make a word. Then drag them into their boxes.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'blend',
        words: [
          { word: 'clap', phonemes: ['cl','a','p'], syllables: ['clap'] },
          { word: 'drip', phonemes: ['dr','i','p'], syllables: ['drip'] },
          { word: 'frog', phonemes: ['fr','o','g'], syllables: ['frog'] },
          { word: 'drum', phonemes: ['dr','u','m'], syllables: ['drum'] },
          { word: 'sled', phonemes: ['sl','e','d'], syllables: ['sled'] },
        ],
      },
    },
    {
      id: 'l1-08-s3', lesson_id: 'lesson-l1-08', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build blended words using consonant clusters!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['cl','a','p','dr','i','fr','o','g','u','m','sl','e','d'],
        target_words: ['clap','drip','frog','drum','sled','clan','grip','drop'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-08-s4', lesson_id: 'lesson-l1-08', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each blended word. Blend the beginning sounds together.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['clap','clan','clip','clot','club'],
          ['drip','drop','drag','drum','dreg'],
          ['frog','from','fret','Fred','froth'],
        ],
        sentences: [
          'The frog sat on a flat rock.',
          'Fred can clap and drum at the same time.',
          'A drip from the tap went drip, drip, drip.',
          'The sled slid fast down the snowy slope.',
        ],
      },
    },
    {
      id: 'l1-08-s5', lesson_id: 'lesson-l1-08', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'clap',  definition: 'To hit your hands together to make a sound', sentence: 'Clap your hands if you are happy.' },
          { word: 'drip',  definition: 'To fall in small drops', sentence: 'Water began to drip from the tap.' },
          { word: 'grip',  definition: 'To hold on tightly', sentence: 'Grip the rope so you do not fall.' },
        ],
      },
    },
    {
      id: 'l1-08-s6', lesson_id: 'lesson-l1-08', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Notice blended words. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-08',
        title: 'Fred and the Frog',
        highlight_phonogram: 'blend',
        body: "Fred sat by the pond with his drum. A frog hopped from a log and sat close to Fred. Fred gave a big clap. The frog did not jump. Fred began to drum — tap tap tap. The frog just blinked. A drop of rain fell from a cloud. Then a drip. Then a drizzle! Fred grabbed his drum and ran up the slope. He slipped in the mud and slid flat on his back. The frog let out a croak as if to say: \"That was funny, Fred!\"",
        questions: [
          { id: 'q1', question: 'What did Fred have with him?',
            question_type: 'multiple_choice',
            options: [{ text:'A clap', is_correct:false },{ text:'A drum', is_correct:true },{ text:'A frog', is_correct:false },{ text:'A sled', is_correct:false }] },
          { id: 'q2', question: 'Why did Fred run up the slope?',
            question_type: 'multiple_choice',
            options: [{ text:'He was scared of the frog', is_correct:false },{ text:'It started to rain', is_correct:true },{ text:'He dropped his drum', is_correct:false },{ text:'He slipped', is_correct:false }] },
          { id: 'q3', question: 'The frog jumped away when Fred clapped.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-08-s7', lesson_id: 'lesson-l1-08', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the short vowel in each word. Type the letter.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — the vowel in clap', answer: 'a' },
          { prompt: '/i/ — the vowel in drip', answer: 'i' },
          { prompt: '/o/ — the vowel in frog', answer: 'o' },
          { prompt: '/u/ — the vowel in drum', answer: 'u' },
          { prompt: '/e/ — the vowel in sled', answer: 'e' },
        ],
      },
    },
    {
      id: 'l1-08-s8', lesson_id: 'lesson-l1-08', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'clap', answer: 'clap', hint: '4 sounds: /cl/ /a/ /p/' },
          { prompt: 'frog', answer: 'frog', hint: '4 sounds: /fr/ /o/ /g/' },
          { prompt: 'drum', answer: 'drum', hint: '4 sounds: /dr/ /u/ /m/' },
        ],
      },
    },
    {
      id: 'l1-08-s9', lesson_id: 'lesson-l1-08', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Blend the beginning sounds and spell it.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'clap', phonogram: 'a', use_in_sentence: 'Clap your hands!' },
          { word: 'drip', phonogram: 'i', use_in_sentence: 'A drip fell from the tap.' },
          { word: 'frog', phonogram: 'o', use_in_sentence: 'A frog jumped in the pond.' },
          { word: 'drum', phonogram: 'u', use_in_sentence: 'He plays the drum.' },
          { word: 'sled', phonogram: 'e', use_in_sentence: 'She rode the sled down the hill.' },
          { word: 'grip', phonogram: 'i', use_in_sentence: 'Grip the bar tightly.' },
        ],
      },
    },
    {
      id: 'l1-08-s10', lesson_id: 'lesson-l1-08', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The frog sat on a flat log by the pond.', answer: 'The frog sat on a flat log by the pond.', hint: '9 words, starts with The' },
          { prompt: 'Fred grabbed his drum and ran up the slope.', answer: 'Fred grabbed his drum and ran up the slope.', hint: '8 words, starts with Fred' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'clap' },{ word:'clip' },{ word:'drip' },{ word:'drop' },{ word:'frog' },{ word:'from' },{ word:'drum' },{ word:'drag' },{ word:'sled' },{ word:'slid' },{ word:'grip' },{ word:'grab' }],
    sight:     [{ word:'the' },{ word:'a' },{ word:'he' },{ word:'his' },{ word:'by' },{ word:'from' }],
    spelling:  [{ word:'clap' },{ word:'drip' },{ word:'frog' },{ word:'drum' },{ word:'sled' },{ word:'grip' }],
  },
}

export const lessonL1_09: FullLesson = {
  lesson: {
    id: 'lesson-l1-09', level_id: 1, lesson_number: 9,
    title: 'Segmenting Practice', phonogram: 'seg',
    phonics_rule: 'Segmenting means breaking a word apart into its individual sounds: cat → /c/ /a/ /t/.',
    keywords: ['segment','sound','break','apart','count'],
    is_reinforcing: false, mastery_threshold: 80, estimated_minutes: 25,
  },
  steps: [
    {
      id: 'l1-09-s1', lesson_id: 'lesson-l1-09', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review the five short vowels. Say the sound for each.',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a4', grapheme: 'a', phoneme: '/a/', example_word: 'stamp', back_text: 'Short /a/ — stamp, clap, flat, trap' },
          { id: 'fc-i4', grapheme: 'i', phoneme: '/i/', example_word: 'split', back_text: 'Short /i/ — split, drip, grit, slim' },
          { id: 'fc-o4', grapheme: 'o', phoneme: '/o/', example_word: 'stop', back_text: 'Short /o/ — stop, frog, blob, drop' },
          { id: 'fc-u4', grapheme: 'u', phoneme: '/u/', example_word: 'stump', back_text: 'Short /u/ — stump, drum, shrub, club' },
          { id: 'fc-e4', grapheme: 'e', phoneme: '/e/', example_word: 'step', back_text: 'Short /e/ — step, sled, blend, fresh' },
        ],
      },
    },
    {
      id: 'l1-09-s2', lesson_id: 'lesson-l1-09', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Say each word. Break it apart. Drag each sound into its own box.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'stamp', phonemes: ['st','a','m','p'], syllables: ['stamp'] },
          { word: 'split', phonemes: ['spl','i','t'],    syllables: ['split'] },
          { word: 'stop',  phonemes: ['st','o','p'],     syllables: ['stop'] },
          { word: 'stump', phonemes: ['st','u','m','p'], syllables: ['stump'] },
          { word: 'step',  phonemes: ['st','e','p'],     syllables: ['step'] },
        ],
      },
    },
    {
      id: 'l1-09-s3', lesson_id: 'lesson-l1-09', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build words with consonant clusters at the start and end!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['st','a','m','p','spl','i','t','o','u','e','nd','mp'],
        target_words: ['stamp','split','stop','stump','step','stand','crimp'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-09-s4', lesson_id: 'lesson-l1-09', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read each word. Think about every sound.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['stamp','clamp','tramp','damp','camp'],
          ['split','spit','grit','slit','trim'],
          ['stop','stomp','drop','crop','prop'],
        ],
        sentences: [
          'Stamp your feet at the camp.',
          'Stop and look before you step.',
          'Split the log with one big chop.',
          'The stump by the pond had a frog on top.',
        ],
      },
    },
    {
      id: 'l1-09-s5', lesson_id: 'lesson-l1-09', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'stomp', definition: 'To walk heavily and loudly', sentence: 'The giant would stomp across the land.' },
          { word: 'camp',  definition: 'A place outdoors where people stay in tents', sentence: 'We set up camp by the stream.' },
          { word: 'crisp', definition: 'Pleasantly firm and fresh', sentence: 'The crisp air smelled of pine trees.' },
        ],
      },
    },
    {
      id: 'l1-09-s6', lesson_id: 'lesson-l1-09', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-09',
        title: 'Camp Stomp',
        highlight_phonogram: 'seg',
        body: "The kids went to Camp Stomp in the crisp fall. They set up tents on the soft grass. Jed tripped on a stump! He split his chin, but just a bit. At camp, they had to stamp their names on bags. They had to split into groups. One group had to stop the drips from the tent. Another had to stamp out the embers from the campfire. At the end, they all stomped to the mess hall for a snack. Camp Stomp was the best trip yet.",
        questions: [
          { id: 'q1', question: 'What did Jed trip on?',
            question_type: 'multiple_choice',
            options: [{ text:'A log', is_correct:false },{ text:'A stump', is_correct:true },{ text:'A tent', is_correct:false },{ text:'A bag', is_correct:false }] },
          { id: 'q2', question: 'What did one group have to stop at camp?',
            question_type: 'multiple_choice',
            options: [{ text:'The singing', is_correct:false },{ text:'The drips from the tent', is_correct:true },{ text:'The stomping', is_correct:false },{ text:'The campfire', is_correct:false }] },
          { id: 'q3', question: 'The children went to camp in the spring.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:false },{ text:'False', is_correct:true }] },
        ],
      },
    },
    {
      id: 'l1-09-s7', lesson_id: 'lesson-l1-09', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen. Type the short vowel you hear in the word.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — the vowel in stamp or clamp', answer: 'a' },
          { prompt: '/i/ — the vowel in split or grit', answer: 'i' },
          { prompt: '/o/ — the vowel in stop or stomp', answer: 'o' },
          { prompt: '/u/ — the vowel in stump or clump', answer: 'u' },
          { prompt: '/e/ — the vowel in step or blend', answer: 'e' },
        ],
      },
    },
    {
      id: 'l1-09-s8', lesson_id: 'lesson-l1-09', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Write what you hear.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'stamp', answer: 'stamp', hint: 'st + /a/ + mp' },
          { prompt: 'stop',  answer: 'stop',  hint: 'st + /o/ + p' },
          { prompt: 'step',  answer: 'step',  hint: 'st + /e/ + p' },
        ],
      },
    },
    {
      id: 'l1-09-s9', lesson_id: 'lesson-l1-09', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Segment it in your head, then spell it.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'stamp', phonogram: 'a', use_in_sentence: 'Stamp your foot.' },
          { word: 'split', phonogram: 'i', use_in_sentence: 'Split the apple in half.' },
          { word: 'stop',  phonogram: 'o', use_in_sentence: 'Stop at the red light.' },
          { word: 'stump', phonogram: 'u', use_in_sentence: 'She sat on the stump.' },
          { word: 'step',  phonogram: 'e', use_in_sentence: 'Take one step forward.' },
          { word: 'stomp', phonogram: 'o', use_in_sentence: 'Stomp three times.' },
        ],
      },
    },
    {
      id: 'l1-09-s10', lesson_id: 'lesson-l1-09', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'Stop and stamp your feet at camp.', answer: 'Stop and stamp your feet at camp.', hint: '7 words, starts with Stop' },
          { prompt: 'Jed tripped on the stump by the pond.', answer: 'Jed tripped on the stump by the pond.', hint: '8 words, starts with Jed' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'stamp' },{ word:'clamp' },{ word:'split' },{ word:'grit' },{ word:'stop' },{ word:'stomp' },{ word:'stump' },{ word:'clump' },{ word:'step' },{ word:'blend' },{ word:'crisp' },{ word:'camp' }],
    sight:     [{ word:'the' },{ word:'they' },{ word:'one' },{ word:'into' },{ word:'their' },{ word:'another' }],
    spelling:  [{ word:'stamp' },{ word:'split' },{ word:'stop' },{ word:'stump' },{ word:'step' },{ word:'stomp' }],
  },
}

export const lessonL1_10: FullLesson = {
  lesson: {
    id: 'lesson-l1-10', level_id: 1, lesson_number: 10,
    title: 'Review – All Short Vowels', phonogram: 'a,e,i,o,u',
    phonics_rule: 'Review: short a (cat), short e (bed), short i (bit), short o (hot), short u (bug).',
    keywords: ['cat','bed','bit','hot','bug'],
    is_reinforcing: true, mastery_threshold: 80, estimated_minutes: 30,
  },
  steps: [
    {
      id: 'l1-10-s1', lesson_id: 'lesson-l1-10', step_number: 1,
      step_type: 'phonogram_review', title: 'Phonogram Review',
      instructions: 'Review all five short vowels one more time!',
      points: 10,
      content: {
        type: 'phonogram_review',
        flashcards: [
          { id: 'fc-a5', grapheme: 'a', phoneme: '/a/', example_word: 'cat',  back_text: 'Short /a/ — cat, bat, man, cap, bag, clap' },
          { id: 'fc-e5', grapheme: 'e', phoneme: '/e/', example_word: 'bed',  back_text: 'Short /e/ — bed, hen, net, red, sled' },
          { id: 'fc-i5', grapheme: 'i', phoneme: '/i/', example_word: 'bit',  back_text: 'Short /i/ — bit, dip, fin, pin, drip' },
          { id: 'fc-o5', grapheme: 'o', phoneme: '/o/', example_word: 'hot',  back_text: 'Short /o/ — hot, mop, log, frog, stop' },
          { id: 'fc-u5', grapheme: 'u', phoneme: '/u/', example_word: 'bug',  back_text: 'Short /u/ — bug, cup, run, mud, drum' },
        ],
      },
    },
    {
      id: 'l1-10-s2', lesson_id: 'lesson-l1-10', step_number: 2,
      step_type: 'phonological_awareness', title: 'Phoneme Segmentation',
      instructions: 'Segment these mixed short vowel words.',
      points: 15,
      content: {
        type: 'phonological_awareness', activity: 'segment',
        words: [
          { word: 'flat', phonemes: ['fl','a','t'], syllables: ['flat'] },
          { word: 'grip', phonemes: ['gr','i','p'], syllables: ['grip'] },
          { word: 'drop', phonemes: ['dr','o','p'], syllables: ['drop'] },
          { word: 'club', phonemes: ['cl','u','b'], syllables: ['club'] },
          { word: 'fled', phonemes: ['fl','e','d'], syllables: ['fled'] },
        ],
      },
    },
    {
      id: 'l1-10-s3', lesson_id: 'lesson-l1-10', step_number: 3,
      step_type: 'word_building', title: 'Word Building',
      instructions: 'Build words with all five short vowels represented!',
      points: 20,
      content: {
        type: 'word_building',
        letter_bank: ['fl','a','t','gr','i','p','dr','o','cl','u','b','e','d'],
        target_words: ['flat','grip','drop','club','fled','glad','trip','blob'],
        allow_extra: false,
      },
    },
    {
      id: 'l1-10-s4', lesson_id: 'lesson-l1-10', step_number: 4,
      step_type: 'decoding', title: 'Decoding Practice',
      instructions: 'Read these mixed short vowel words. Say the vowel sound clearly.',
      points: 15,
      content: {
        type: 'decoding',
        word_columns: [
          ['flat','flag','flap','fled','flip'],
          ['grip','grit','grin','grub','grab'],
          ['drop','drip','drag','drum','drab'],
        ],
        sentences: [
          'The flag snapped flat in the wind.',
          'Grip the rope and do not slip.',
          'A drop of rain fell on the drum.',
          'The club fled from the storm under the big flat rock.',
        ],
      },
    },
    {
      id: 'l1-10-s5', lesson_id: 'lesson-l1-10', step_number: 5,
      step_type: 'pre_reading', title: 'Vocabulary Preview',
      instructions: 'Read each word. Say the sentence.',
      points: 10,
      content: {
        type: 'pre_reading',
        vocabulary: [
          { word: 'fled',  definition: 'Ran away quickly to escape', sentence: 'The birds fled the nest when the cat came close.' },
          { word: 'grub',  definition: 'Food (informal), or a small bug larva', sentence: 'The kids dug for grubs in the garden.' },
          { word: 'crisp', definition: 'Cool, clean, and fresh', sentence: 'The crisp wind felt good after the hot day.' },
        ],
      },
    },
    {
      id: 'l1-10-s6', lesson_id: 'lesson-l1-10', step_number: 6,
      step_type: 'reading_passage', title: 'Reading Passage',
      instructions: 'Read the story. Notice all five short vowels in action. Then answer the questions.',
      points: 30,
      content: {
        type: 'reading_passage', passage_id: 'passage-l1-10',
        title: 'The Bug Club',
        highlight_phonogram: 'a,e,i,o,u',
        body: "Nat, Bev, Tim, Bob, and Gus had a club. They called it the Bug Club. Nat had a flat box to keep bugs in. Bev had a net and a red pen to write the names. Tim would dig and grip bugs from the mud. Bob set up the log where the club would sit. Gus had a big drum to bang when they found a new bug. One hot day, a huge grub fell from a log. It was fat and had spots. The club was glad. Tim gripped it and Bev wrote it down. Gus hit the drum — BANG! The best bug yet!",
        questions: [
          { id: 'q1', question: 'What did Bev have?',
            question_type: 'multiple_choice',
            options: [{ text:'A drum', is_correct:false },{ text:'A net and a red pen', is_correct:true },{ text:'A flat box', is_correct:false },{ text:'A log', is_correct:false }] },
          { id: 'q2', question: 'What fell from a log one hot day?',
            question_type: 'multiple_choice',
            options: [{ text:'A frog', is_correct:false },{ text:'A big fat grub', is_correct:true },{ text:'A flag', is_correct:false },{ text:'A bug net', is_correct:false }] },
          { id: 'q3', question: 'Gus hit the drum to celebrate finding a new bug.',
            question_type: 'true_false',
            options: [{ text:'True', is_correct:true },{ text:'False', is_correct:false }] },
        ],
      },
    },
    {
      id: 'l1-10-s7', lesson_id: 'lesson-l1-10', step_number: 7,
      step_type: 'sound_dictation', title: 'Sound Dictation',
      instructions: 'Listen to the short vowel sound. Type the letter.',
      points: 15,
      content: {
        type: 'sound_dictation',
        items: [
          { prompt: '/a/ — short a', answer: 'a' },
          { prompt: '/e/ — short e', answer: 'e' },
          { prompt: '/i/ — short i', answer: 'i' },
          { prompt: '/o/ — short o', answer: 'o' },
          { prompt: '/u/ — short u', answer: 'u' },
        ],
      },
    },
    {
      id: 'l1-10-s8', lesson_id: 'lesson-l1-10', step_number: 8,
      step_type: 'pre_spelling', title: 'Pre-Spelling Practice',
      instructions: 'Listen to the word. Identify the short vowel and write the word.',
      points: 10,
      content: {
        type: 'pre_spelling',
        items: [
          { prompt: 'flat', answer: 'flat', hint: 'fl + /a/ + t' },
          { prompt: 'grip', answer: 'grip', hint: 'gr + /i/ + p' },
          { prompt: 'club', answer: 'club', hint: 'cl + /u/ + b' },
        ],
      },
    },
    {
      id: 'l1-10-s9', lesson_id: 'lesson-l1-10', step_number: 9,
      step_type: 'spelling', title: 'Spelling',
      instructions: 'Listen to each word. Identify the short vowel and spell it correctly.',
      points: 25,
      content: {
        type: 'spelling',
        words: [
          { word: 'flat', phonogram: 'a', use_in_sentence: 'The road was flat.' },
          { word: 'fled', phonogram: 'e', use_in_sentence: 'The birds fled the storm.' },
          { word: 'grip', phonogram: 'i', use_in_sentence: 'Grip the handle tightly.' },
          { word: 'drop', phonogram: 'o', use_in_sentence: 'A drop of water fell.' },
          { word: 'club', phonogram: 'u', use_in_sentence: 'Join our club today.' },
          { word: 'grin', phonogram: 'i', use_in_sentence: 'She had a big grin.' },
        ],
      },
    },
    {
      id: 'l1-10-s10', lesson_id: 'lesson-l1-10', step_number: 10,
      step_type: 'sentence_dictation', title: 'Sentence Dictation',
      instructions: 'Listen to the sentence. Type it exactly.',
      points: 20,
      content: {
        type: 'sentence_dictation',
        items: [
          { prompt: 'The bug club sat on a flat log.', answer: 'The bug club sat on a flat log.', hint: '8 words, starts with The' },
          { prompt: 'Gus hit the drum when Tim gripped the big grub.', answer: 'Gus hit the drum when Tim gripped the big grub.', hint: '10 words, starts with Gus' },
        ],
      },
    },
  ],
  word_lists: {
    phonogram: [{ word:'flat' },{ word:'flag' },{ word:'grip' },{ word:'grin' },{ word:'drop' },{ word:'drip' },{ word:'club' },{ word:'clap' },{ word:'fled' },{ word:'sled' },{ word:'grub' },{ word:'drum' }],
    sight:     [{ word:'the' },{ word:'they' },{ word:'one' },{ word:'when' },{ word:'would' },{ word:'called' }],
    spelling:  [{ word:'flat' },{ word:'fled' },{ word:'grip' },{ word:'drop' },{ word:'club' },{ word:'grin' }],
  },
}
