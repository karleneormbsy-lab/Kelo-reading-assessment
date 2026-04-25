export interface SightWordList {
  id: string
  name: string
  level: 1 | 2
  category: string
  words: string[]
}

export const SIGHT_WORD_LISTS: SightWordList[] = [
  // ── Level 1 Core Lists ──────────────────────────────────────────
  { id: 'l1-1',  name: 'List 1',  level: 1, category: 'Core Words', words: ['a','am','and','at','away','be','but','can','for','get'] },
  { id: 'l1-2',  name: 'List 2',  level: 1, category: 'Core Words', words: ['he','here','I','if','in','is','it','like','make','me'] },
  { id: 'l1-3',  name: 'List 3',  level: 1, category: 'Core Words', words: ['my','no','not','on','said','see','the','to','we','you'] },
  { id: 'l1-4',  name: 'List 4',  level: 1, category: 'Core Words', words: ['baby','big','blue','cat','dog','down','funny','go','help','jump'] },
  { id: 'l1-5',  name: 'List 5',  level: 1, category: 'Core Words', words: ['one','two','little','mother','play','red','run','stop','up','yellow'] },
  { id: 'l1-6',  name: 'List 6',  level: 1, category: 'Core Words', words: ['come','did','do','find','good','got','have','into','must','new'] },
  { id: 'l1-7',  name: 'List 7',  level: 1, category: 'Core Words', words: ['our','please','ran','saw','say','she','so','soon','that','they'] },
  { id: 'l1-8',  name: 'List 8',  level: 1, category: 'Core Words', words: ['this','too','want','was','well','went','what','who','will','with'] },
  { id: 'l1-9',  name: 'List 9',  level: 1, category: 'Core Words', words: ['four','add','ball','brown','eat','father','hot','all','because','yes'] },
  { id: 'l1-10', name: 'List 10', level: 1, category: 'Core Words', words: ['black','girl','kitten','look','out','pretty','white','an','are','came'] },
  { id: 'l1-11', name: 'List 11', level: 1, category: 'Core Words', words: ['as','ask','by','ever','from','going','had','has','her','him'] },
  { id: 'l1-12', name: 'List 12', level: 1, category: 'Core Words', words: ['his','just','less','let','live','name','need','of','put','may'] },
  { id: 'l1-13', name: 'List 13', level: 1, category: 'Core Words', words: ['same','save','some','still','take','them','then','there','were','would'] },
  { id: 'l1-14', name: 'List 14', level: 1, category: 'Core Words', words: ['boy','car','purple','feet','fly','food','give','man','old','after'] },
  { id: 'l1-15', name: 'List 15', level: 1, category: 'Core Words', words: ['six','three','back','open','over','ride','school','street','tree','again'] },
  { id: 'l1-16', name: 'List 16', level: 1, category: 'Core Words', words: ['around','bed','bird','birthday','book','children','cold','door','fall','before'] },
  { id: 'l1-17', name: 'List 17', level: 1, category: 'Core Words', words: ['five','fast','first','green','off','pet','pull','read','sit','also'] },
  { id: 'l1-18', name: 'List 18', level: 1, category: 'Core Words', words: ['story','dinner','sing','sleep','under','wash','water','wish','work','been'] },
  { id: 'l1-19', name: 'List 19', level: 1, category: 'Core Words', words: ['best','call','day','gave','goes','how',"it's",'made','most','next'] },
  { id: 'l1-20', name: 'List 20', level: 1, category: 'Core Words', words: ['or','tell','thank','upon','us','very','when','which','why','word'] },
  { id: 'l1-21', name: 'List 21', level: 1, category: 'Core Words', words: ['animal','clean','cut','drink','far','hear','home','hurt','large','night'] },
  { id: 'l1-22', name: 'List 22', level: 1, category: 'Core Words', words: ['right','seven','small','ten','light','love','start','thing','walk','house'] },
  { id: 'l1-23', name: 'List 23', level: 1, category: 'Core Words', words: ['about','always','begin','below','better','bring','close','each','even','every'] },
  { id: 'l1-24', name: 'List 24', level: 1, category: 'Core Words', words: ['feel','fin','full','hope','keep','long','many','more','much','often'] },
  { id: 'l1-25', name: 'List 25', level: 1, category: 'Core Words', words: ['only','pick','seem','show','such','than','today','try','use','where'] },
  { id: 'l1-26', name: 'List 26', level: 1, category: 'Core Words', words: ['eight','between','carry','circle','draw','eyes','gray','laugh','any','different'] },
  { id: 'l1-27', name: 'List 27', level: 1, category: 'Core Words', words: ['answer','morning','number','party','people','picture','round','world','write','another'] },
  { id: 'l1-28', name: 'List 28', level: 1, category: 'Core Words', words: ['both','buy','could','does','done','follow','found','grow','guess','hold'] },
  { id: 'l1-29', name: 'List 29', level: 1, category: 'Core Words', words: ['hurry','kind','know','myself','never','now','once','other','own','should'] },
  { id: 'l1-30', name: 'List 30', level: 1, category: 'Core Words', words: ['something','their','these','thing','those','together','until','warm','while','your'] },
  // Level 1 Themed Lists
  { id: 'l1-colors',   name: 'Color Words',        level: 1, category: 'Themed Words', words: ['white','black','brown','blue','purple','gray','orange','yellow','green','red'] },
  { id: 'l1-num1',     name: 'Numbers 1–10',        level: 1, category: 'Themed Words', words: ['one','two','three','four','five','six','seven','eight','nine','ten'] },
  { id: 'l1-num2',     name: 'Numbers 11–20',       level: 1, category: 'Themed Words', words: ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'] },
  { id: 'l1-contra1',  name: 'Contractions List 1', level: 1, category: 'Contractions', words: ["I'm","he's","she's","it's","that's","won't","don't","can't"] },
  { id: 'l1-contra2',  name: 'Contractions List 2', level: 1, category: 'Contractions', words: ["where's","there's","they're","we're","you're","couldn't","aren't","wouldn't"] },

  // ── Level 2 Core Lists ──────────────────────────────────────────
  { id: 'l2-1',  name: 'List 1',  level: 2, category: 'Core Words', words: ['bit','fill','fit','hit','miss','lay','may','job','lot','top','drop'] },
  { id: 'l2-2',  name: 'List 2',  level: 2, category: 'Core Words', words: ['hill','bill','fun','game','doll','spot','box','gas','map','child'] },
  { id: 'l2-3',  name: 'List 3',  level: 2, category: 'Core Words', words: ['hope','note','bad','glad','sat','stand','act','flat','plan','shall'] },
  { id: 'l2-4',  name: 'List 4',  level: 2, category: 'Core Words', words: ['lost','seat','heat','meet','seen','fell','set','spell','rest','led'] },
  { id: 'l2-5',  name: 'List 5',  level: 2, category: 'Core Words', words: ['friend','ready','end','send','free','real','sent','near','told','took','move'] },
  { id: 'l2-6',  name: 'List 6',  level: 2, category: 'Core Words', words: ['gone','maybe','ago','list','mine','lie','side','wide','cost','without'] },
  { id: 'l2-7',  name: 'List 7',  level: 2, category: 'Core Words', words: ['ate','past','place','stay','wait','safe','art','step','full','knew','turn'] },
  { id: 'l2-8',  name: 'List 8',  level: 2, category: 'Core Words', words: ['rock','block','barn','fire','glass','hole','letter','sail','smile','tail','team','hair'] },
  { id: 'l2-9',  name: 'List 9',  level: 2, category: 'Core Words', words: ['rich','trip','tomorrow','cool','dark','deep','during','test','trade','track','rule'] },
  { id: 'l2-10', name: 'List 10', level: 2, category: 'Core Words', words: ['else','almost','enjoy','front','great','learn','might','sure','beside','feeling','understand'] },
  { id: 'l2-11', name: 'List 11', level: 2, category: 'Core Words', words: ['cook','cross','half','ring','snow','line','number','paint','rope','wood'] },
  { id: 'l2-12', name: 'List 12', level: 2, category: 'Core Words', words: ['yet','along','air','guess','happen','left','main','nearly','pay','sound','above'] },
  { id: 'l2-13', name: 'List 13', level: 2, category: 'Core Words', words: ['began','being','born','able','allow','across','corner','count','busy','cannot','clear'] },
  { id: 'l2-14', name: 'List 14', level: 2, category: 'Core Words', words: ['hurry','itself','fact','fear','means','miles','music','quiet','really','return','rise'] },
  { id: 'l2-15', name: 'List 15', level: 2, category: 'Core Words', words: ['money','oil','roll','bottle','change','finish','key','knife','watch','shapes','afraid'] },
  { id: 'l2-16', name: 'List 16', level: 2, category: 'Core Words', words: ['size','strong','simple','song','speed','surprise','since','sometimes','young','pair'] },
  { id: 'l2-17', name: 'List 17', level: 2, category: 'Core Words', words: ['against','already','beautiful','become','believe','belong','center','certain','choose','complete','copy','cover'] },
  { id: 'l2-18', name: 'List 18', level: 2, category: 'Core Words', words: ['present','hundred','knock','shovel','square','spring','string','breakfast','building','church','circus','doctor'] },
  { id: 'l2-19', name: 'List 19', level: 2, category: 'Core Words', words: ['decide','describe','different','enough','explain','heavy','however','important','lovely'] },
  { id: 'l2-20', name: 'List 20', level: 2, category: 'Core Words', words: ['piece','point','problem','question','special','subject','suddenly','thought','touch','toward'] },
  // Level 2 Themed Lists
  { id: 'l2-animals',   name: 'Animal Words',    level: 2, category: 'Themed Words', words: ['bear','chicken','cows','duck','horse','monkey','pig','rabbit','sheep','snake'] },
  { id: 'l2-body',      name: 'Body Words',      level: 2, category: 'Themed Words', words: ['body','ears','face','foot','hand','head','heart','legs','nose','skin'] },
  { id: 'l2-clothing',  name: 'Clothing Words',  level: 2, category: 'Themed Words', words: ['clothes','dress','hat','jeans','shirt','shoes','skirt','socks'] },
  { id: 'l2-opp1',      name: 'Opposites 1',     level: 2, category: 'Opposites',    words: ['ahead','anything','arrive','behind','brother','buy','leave','nothing','sell','sister','few','several'] },
  { id: 'l2-opp2',      name: 'Opposites 2',     level: 2, category: 'Opposites',    words: ['correct','cried','death','dry','first','last','laughed','life','wet','wrong'] },
  { id: 'l2-opp3',      name: 'Opposites 3',     level: 2, category: 'Opposites',    words: ['break','build','early','happy','east','easy','hard','late','sad','west'] },
  { id: 'l2-opp4',      name: 'Opposites 4',     level: 2, category: 'Opposites',    words: ['high','inside','king','listen','low','moon','north','outside','queen','south','sun','talk'] },
  { id: 'l2-opp5',      name: 'Opposites 5',     level: 2, category: 'Opposites',    words: ['lose','part','quickly','short','slowly','summer','tall','thick','thin','whole','win','winter'] },
  { id: 'l2-food',      name: 'Food Words',      level: 2, category: 'Themed Words', words: ['apple','bread','eggs','fish','fruit','meat','milk','salt','seeds','sugar'] },
  { id: 'l2-home',      name: 'Home & Garden',   level: 2, category: 'Themed Words', words: ['chair','floor','flowers','garden','grass','oven','room','table','wall','window','yard'] },
  { id: 'l2-school',    name: 'School Words',    level: 2, category: 'Themed Words', words: ['bell','class','color','crayon','desk','page','paper','pencil','sentence','study'] },
  { id: 'l2-transport', name: 'Transportation',  level: 2, category: 'Themed Words', words: ['bicycle','boat','bus','plane','ship','train','truck','van','wheels'] },
  { id: 'l2-city',      name: 'City & Country',  level: 2, category: 'Themed Words', words: ['city','country','crops','farm','field','road','shop','store','street','town'] },
  { id: 'l2-water',     name: 'Water Words',     level: 2, category: 'Themed Words', words: ['ice','lake','ocean','rain','river','sea','stream','waves'] },
  { id: 'l2-time',      name: 'Time Words',      level: 2, category: 'Themed Words', words: ['evening','hour','minute','month','second','time','week','year'] },
  { id: 'l2-action',    name: 'Action Words',    level: 2, category: 'Themed Words', words: ['catch','climb','dance','fight','push','race','reach','smell','speak','swim'] },
  { id: 'l2-people',    name: 'People Words',    level: 2, category: 'Themed Words', words: ['aunt','family','men','Mr','Mrs','person','someone','teacher','uncle','woman'] },
  { id: 'l2-earth',     name: 'Earth Words',     level: 2, category: 'Themed Words', words: ['earth','forest','ground','land','park','plants','root','sand','stick','stone'] },
  { id: 'l2-sky',       name: 'Sky Words',       level: 2, category: 'Themed Words', words: ['air','cloud','sky','space','stars','weather','wind'] },
  { id: 'l2-contra',    name: 'Contractions',    level: 2, category: 'Contractions', words: ["didn't","I'll","isn't","let's","wasn't","we'll"] },
]

export function getListById(id: string): SightWordList | undefined {
  return SIGHT_WORD_LISTS.find(l => l.id === id)
}

export function getListsByLevel(level: 1 | 2): SightWordList[] {
  return SIGHT_WORD_LISTS.filter(l => l.level === level)
}

export function groupByCategory(lists: SightWordList[]): Record<string, SightWordList[]> {
  return lists.reduce<Record<string, SightWordList[]>>((acc, list) => {
    if (!acc[list.category]) acc[list.category] = []
    acc[list.category].push(list)
    return acc
  }, {})
}
