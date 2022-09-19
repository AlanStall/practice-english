import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Pronunciation() {
  const navigate = useNavigate();

  const words = [
    'ability',
    'able',
    'about',
    'above',
    'accept',
    'according',
    'account',
    'across',
    'act',
    'action',
    'activity',
    'actually',
    'add',
    'address',
    'administration',
    'adult',
    'affect',
    'after',
    'again',
    'against',
    'age',
    'agency',
    'agent',
    'agree',
    'agreement',
    'all',
    'allow',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'american',
    'among',
    'amount',
    'analysis',
    'and',
    'animal',
    'another',
    'answer',
    'any',
    'anyone',
    'anything',
    'appear',
    'approach',
    'area',
    'argue',
    'arm',
    'around',
    'arrive',
    'art',
    'article',
    'artist',
    'ask',
    'assume',
    'attack',
    'attention',
    'attorney',
    'audience',
    'author',
    'authority',
    'available',
    'avoid',
    'away',
    'baby',
    'back',
    'bad',
    'bag',
    'ball',
    'bank',
    'bar',
    'be',
    'beat',
    'beautiful',
    'because',
    'become',
    'before',
    'begin',
    'behavior',
    'behind',
    'believe',
    'benefit',
    'best',
    'better',
    'between',
    'beyond',
    'big',
    'bill',
    'billion',
    'black',
    'blood',
    'blue',
    'board',
    'body',
    'book',
    'born',
    'both',
    'box',
    'boy',
    'break',
    'bring',
    'brother',
    'budget',
    'build',
    'building',
    'business',
    'but',
    'call',
    'camera',
    'campaign',    
    'cancer',
    'candidate',
    'capital',
    'car',
    'card',
    'care',
    'career',
    'case',
    'catch',
    'cause',
    'cell',
    'center',
    'central',
    'century',
    'certain',
    'certainly',
    'chair',
    'challenge',
    'chance',
    'change',
    'character',
    'charge',
    'check',
    'child',
    'choice',
    'choose',
    'church',
    'citizen',
    'city',
    'civil',
    'claim',
    'class',
    'clear',
    'clearly',
    'close',    
    'cold',
    'collection',
    'college',
    'color',
    'come',
    'commercial',
    'community',
    'company',
    'compare',
    'computer',
    'concern',
    'condition',
    'conference',
    'Congress',
    'consider',
    'consumer',
    'contain',
    'continue',
    'control',
    'cost',
    'could',
    'country',
    'couple',
    'course',
    'court',
    'cover',
    'create',
    'crime',
    'cultural',
    'culture',
    'cup',
    'current',
    'customer',
    'cut',
    'dark',
    'data',
    'daughter',
    'day',
    'dead',
    'deal',
    'death',
    'debate',
    'decade',
    'decide',
    'decision',
    'deep',
    'defense',
    'degree',
    'democrat',
    'democratic',
    'describe',
    'design',
    'despite',
    'detail',
    'determine',
    'develop',
    'development',
    'die',
    'difference',
    'different',
    'difficult',
    'dinner',
    'direction',
    'director',
    'discover',
    'discuss',
    'discussion',
    'disease',
    'do',
    'doctor',
    'dog',
    'down',
    'draw',
    'dream',
    'drive',
    'drop',
    'drug',
    'during',
    'each',
    'early',
    'east',
    'easy',
    'eat',
    'economic',
    'economy',
    'edge',
    'education',
    'effect',
    'effort',
    'either',
    'election',
    'else',
    'employee',
    'energy',
    'enjoy',
    'enough',
    'enter',
    'entire',
    'environment',
    'environmental',
    'especially',
    'establish',
    'even',
    'evening',
    'event',
    'ever',
    'every',
    'everybody',
    'everyone',
    'everything',
    'evidence',
    'exactly',
    'example',
    'executive',
    'exist',
    'expect',
    'experience',
    'expert',
    'explain',
    'face',
    'fact',
    'factor',
    'fail',
    'fall',
    'family',
    'far',
    'farm',
    'fast',
    'father',
    'fear',
    'federal',
    'feel',
    'feeling',
    'few',
    'field',
    'fight',
    'figure',
    'fill',
    'film',
    'final',
    'finally',
    'financial',
    'find',
    'fine',
    'finger',
    'finish',
    'fire',
    'firm',
    'first',
    'fish',
    'floor',
    'focus',
    'follow',
    'food',
    'force',
    'foreign',
    'forget',    
    'former',
    'forward',
    'free',
    'friend',
    'front',
    'full',
    'future',
    'game',
    'garden',
    'gas',
    'general',
    'generation',
    'get',
    'girl',
    'give',
    'glass',
    'go',
    'good',
    'government',
    'great',
    'green',
    'ground',
    'group',
    'grow',
    'guess',
    'gun',
    'guy',
    'hair',
    'half',
    'hand',
    'hang',
    'happen',
    'happy',
    'hard',
    'have',
    'he',    
    'health',
    'heart',
    'heat',
    'heavy',
    'help',
    'her',
    'here',
    'herself',
    'hi',
    'him',
    'himself',    
    'history',
    'hit',
    'hold',
    'home',
    'hope',
    'hospital',
    'hot',
    'hotel',
    'house',
    'how',
    'however',
    'huge',
    'human',
    'hundred',
    'husband',
    'idea',
    'identify',
    'if',
    'image',
    'imagine',
    'impact',
    'important',
    'improve',
    'include',
    'including',
    'increase',
    'indeed',
    'indicate',
    'individual',
    'industry',
    'information',
    'inside',
    'instead',
    'institution',
    'interest',
    'interesting',
    'international',
    'interview',
    'into',
    'investment',
    'involve',
    'issue',
    'item',
    "it's",
    'itself',
    'job',
    'join',
    'just',
    'keep',
    'key',
    'kid',
    'kill',
    'kind',
    'kitchen',
    'knowledge',
    'land',
    'language',
    'large',
    'last',
    'late',
    'later',
    'laugh',
    'law',
    'lawyer',
    'lead',
    'leader',
    'learn',
    'leave',
    'left',
    'leg',
    'legal',
    'less',
    'let',
    'letter',
    'level',
    'lie',
    'life',
    'light',
    'like',
    'likely',
    'line',
    'list',
    'listen',
    'little',
    'live',
    'local',
    'long',
    'look',
    'lose',
    'love',
    'low',
    'machine',
    'magazine',
    'main',
    'maintain',
    'major',
    'majority',
    'make',
    'man',
    'manage',
    'management',
    'manager',
    'many',
    'market',
    'marriage',
    'material',
    'matter',
    'may',
    'maybe',
    'me',
    'mean',
    'measure',
    'media',
    'medical',
    'meet',
    'meeting',
    'member',
    'memory',
    'mention',
    'message',
    'method',
    'middle',
    'might',
    'military',
    'million',
    'mind',
    'minute',
    'miss',
    'mission',
    'model',
    'modern',
    'moment',
    'money',
    'month',
    'more',
    'morning',
    'most',
    'mother',
    'mouth',
    'move',
    'movement',
    'movie',
    'much',
    'music',
    'must',
    'my',
    'myself',
    'name',
    'nation',
    'national',
    'natural',
    'nature',
    'near',
    'nearly',
    'necessary',
    'need',
    'network',
    'never',
    'new',
    'news',
    'newspaper',
    'next',
    'nice',
    'night',
    'no',
    'none',
    'nor',
    'north',
    'not',
    'note',
    'nothing',
    'notice',
    'now',
    'number',
    'occur',
    'off',
    'offer',
    'office',
    'officer',
    'official',
    'often',
    'oil',
    'okay',
    'old',
    'once',
    'only',
    'onto',
    'open',
    'operation',
    'opportunity',
    'option',
    'or',
    'order',
    'organization',
    'other',
    'our',
    'out',
    'outside',
    'over',
    'page',    
    'painting',
    'paper',
    'parent',
    'part',
    'participant',
    'particular',
    'particularly',
    'partner',
    'party',
    'pass',
    'patient',
    'pattern',
    'peace',
    'people',
    'perform',
    'performance',
    'perhaps',
    'person',
    'personal',
    'phone',
    'physical',
    'pick',
    'picture',
    'piece',
    'place',
    'plan',
    'plant',
    'play',
    'player',
    'point',
    'police',
    'policy',
    'political',
    'politics',
    'poor',
    'popular',
    'population',
    'position',
    'positive',
    'possible',
    'power',
    'practice',
    'prepare',
    'present',
    'president',
    'pressure',
    'pretty',
    'prevent',
    'price',
    'private',
    'probably',
    'problem',
    'process',
    'produce',
    'product',
    'production',
    'professional',
    'professor',
    'program',
    'project',
    'property',
    'protect',
    'prove',
    'provide',
    'public',
    'purpose',    
    'quality',
    'question',
    'quickly',
    'quite',
    'race',
    'radio',
    'raise',
    'range',
    'rate',
    'rather',
    'reach',
    'read',
    'ready',
    'real',
    'reality',
    'realize',
    'really',
    'reason',
    'receive',
    'recent',
    'recently',
    'recognize',
    'record',
    'red',
    'reduce',
    'reflect',
    'region',
    'relate',
    'relationship',
    'religious',
    'remain',
    'remember',
    'remove',
    'report',
    'represent',
    'republican',
    'require',
    'research',
    'resource',
    'respond',
    'response',
    'responsibility',
    'rest',
    'result',
    'return',
    'reveal',
    'rich',
    'right',
    'rise',
    'risk',
    'road',
    'rock',
    'role',
    'room',
    'rule',
    'run',
    'safe',
    'same',
    'save',
    'say',
    'scene',
    'school',
    'science',
    'scientist',
    'score',
    'season',
    'seat',
    'second',
    'section',
    'security',
    'see',
    'seek',
    'seem',    
    'send',
    'senior',
    'sense',
    'series',
    'serious',
    'serve',
    'service',
    'set',
    'several',
    'sex',
    'sexual',
    'shake',
    'share',
    'shoot',
    'short',
    'shot',
    'should',
    'shoulder',
    'show',
    'side',
    'sign',
    'significant',
    'similar',
    'simple',
    'simply',
    'since',
    'sing',
    'single',
    'sister',
    'site',
    'situation',
    'size',
    'skill',
    'skin',
    'small',
    'smile',
    'so',
    'social',
    'society',
    'soldier',
    'some',
    'somebody',
    'someone',
    'something',
    'sometimes',
    'song',
    'soon',
    'sort',
    'sound',
    'source',
    'south',
    'southern',
    'space',
    'speak',
    'special',
    'specific',
    'speech',
    'spend',
    'sport',
    'spring',
    'staff',
    'stage',
    'stand',
    'standard',
    'star',
    'start',
    'state',
    'statement',
    'station',
    'stay',
    'step',
    'still',
    'stock',
    'stop',
    'store',
    'story',
    'strategy',
    'street',
    'strong',
    'structure',
    'student',
    'study',
    'stuff',
    'style',
    'subject',
    'success',
    'successful',
    'suddenly',
    'suffer',
    'suggest',
    'summer',
    'support',
    'sure',
    'surface',
    'system',
    'table',
    'take',
    'talk',
    'task',
    'tax',
    'teacher',
    'technology',
    'television',
    'tell',
    'term',
    'test',
    'than',
    'thank',
    'that',    
    'their',
    'them',
    'themselves',
    'then',
    'theory',
    'there',
    'these',
    'they',
    'think',
    'third',
    'this',
    'those',
    'though',
    'thought',
    'thousand',
    'threat',
    'through',
    'throughout',
    'thus',
    'time',
    'today',
    'together',
    'tonight',
    'top',
    'total',
    'tough',
    'toward',
    'town',
    'trade',
    'traditional',
    'training',
    'travel',
    'treatment',
    'tree',
    'trial',
    'trip',
    'trouble',
    'true',
    'truth',
    'try',
    'turn',
    'tv',
    'type',
    'under',
    'understand',
    'unit',
    'until',
    'use',
    'usually',
    'value',
    'various',
    'very',
    'victim',
    'view',
    'violence',
    'visit',
    'voice',
    'vote',
    'wait',
    'walk',
    'wall',
    'want',
    'war',
    'watch',
    'water',
    'way',
    'we',
    'weapon',
    'week',
    'well',
    'west',
    'western',
    'what',
    'whatever',
    'when',
    'where',
    'which',
    'while',
    'white',
    'who',
    'whole',
    'whose',
    'why',
    'wife',
    'will',
    'win',
    'wind',
    'window',
    'wish',
    'with',
    'within',
    'without',
    'woman',
    'wonder',
    'word',
    'work',
    'worker',        
    'wrong',
    'yard',
    'yes',
    'yet',
    'you',
    'young',
    'your',
    'yourself'
  ];

  const [word, setWord] = useState(randomWord());
  const [spoken, setSpoken] = useState('');  
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [microphoneOn, setMicrophoneOn] = useState(false);
  const [notChangeWord, setNotChangeWord] = useState(false);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomWord() {
    return words[randomIntFromInterval(0, words.length - 1)];
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function wordShow() {
    setWord(randomWord());
  }

  function updateWord() {
    setMicrophoneOn(false);
    wordShow();
    setSpoken('');
    setMessage('');
    setDisabled(false);       
  }

  async function listenWord() {
    setMicrophoneOn(false);
    const speech = new SpeechSynthesisUtterance();
    speech.text = word;
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
    await sleep(0);
    setDisabled(true);
    await sleep(1000);
    setDisabled(false);
  }

  async function speakWord() {      
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    
    recognition.onresult = (event) => {            
      const transcript = event.results[0][0].transcript.toLowerCase();
      setSpoken(transcript);
      check(transcript);
    };    
    await sleep(0);
    setNotChangeWord(true);
    setMicrophoneOn(true);
    await sleep(9000);
    /* setNotChangeWord(false); */
    setMicrophoneOn(false);
  }

  let nextWord = '';
  async function check(transcript) {    
    if (word === transcript || nextWord === transcript) {
      setMessage("Você acertou!!!"); 
      await sleep(2000);
      nextWord = randomWord();
      setWord(nextWord);
      setSpoken('');
      setMessage('');
      speakWord();
    } else {
      setNotChangeWord(false);
      setMessage(
        "Tente novamente pelo botão PRONUNCIAR ou troque a palavra"
      );                
    }    
  }
  
  return (
    <>
      <div
        className="pt-2 lg:pt-10 "        
      >
        <div className='mb-10 grid place-items-center'>
          <h1 className="text-center relative m-2 font-bold text-[28px]">Pronunciation English</h1>
          <label htmlFor="my-modal-6" className="btn btn-secondary modal-button animate-pulse">Como funciona!</label>
        </div>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom modal-middle">
          <div className="modal-box text-[15px]">
            <h3 className="font-bold text-[18px] text-[#00ff88] tracking-[.20em]">Como funciona!</h3>
            <div className="py-1 leading-relaxed">Por utilizar a ferramenta do Google TTS e STT (Text to Speech e Speech to Text), por favor, acesse esse App pelo navegador Google Chrome;</div>
            <div className="py-1 leading-relaxed">Ao acessar, permita/autorize a ativação do seu microfone;</div>
            <div className="py-1 leading-relaxed">É exibida uma palavra em inglês, que você pode trocar por outra pelo botão <p className='btn btn-outline text-[#00ff88] btn-success btn-xs'>TROCAR PALAVRA</p> . Você também pode ouvir a pronúncia correta pelo botão <p className='btn btn-outline text-[#00ff88] btn-success btn-xs'>OUVIR</p> , e pode praticar sua pronúncia pelo botão <p className='btn btn-outline text-[#00ff88] btn-success btn-xs'>PRONUNCIAR</p> ;</div>
            <div className="py-1 leading-relaxed">Se você acertar a pronúncia, uma nova palavra será exibida e o microfone continuará ativado por alguns instantes para você continuar praticando. Se você não acertar, você pode tentar novamente clicando em <p className='btn btn-outline text-[#00ff88] btn-success btn-xs'>PRONUNCIAR</p> , ou trocar a palavra. Se você trocar a palavra, precisará ativar novamente o microfone pelo botão <p className='btn btn-outline text-[#00ff88] btn-success btn-xs'>PRONUNCIAR</p> .</div>
            <div className="py-1 leading-relaxed">Então, bora praticar e destravar essa língua 😃 </div>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Ok!</label>
            </div>
          </div>
        </div>
        <div className="grid place-items-center bg-base-300 card shadow-xl m-2 p-2 h-96 sm:mx-20 sm:p-8 sm:h-80 bg-base-400">
          <div>
            <button className="btn btn-sm btn-outline btn-success xs:btn-md mr-2" 
              disabled={notChangeWord} 
              onClick={updateWord}>
              TROCAR PALAVRA
            </button>
            <button
              className="btn btn-sm btn-outline btn-success xs:btn-md  mr-2"
              onClick={listenWord}
              disabled={disabled}
            >
              OUVIR
            </button>
            <button className="btn btn-sm btn-outline btn-success xs:btn-md mr-2" 
            onClick={speakWord}>
              PRONUNCIAR
            </button>
            <button className="relative top-3.5 rounded-md"
              style={{ animation: microphoneOn ? 'pulse 1.5s ease-out infinite' : '' , color: microphoneOn ? '#fa4b4bfb' : 'gray'}}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 300 300"                
                className="fill-current h-10"
                >
                <path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003S232.835,0,149.996,0z M109.368,100.055c0-21.018,17.1-38.115,38.115-38.115s38.115,17.099,38.115,38.115v45.782c0,21.016-17.1,38.113-38.115,38.113c-21.015,0-38.115-17.1-38.115-38.113V100.055z M209.384,147.282c0,31.662-23.905,57.832-54.613,61.452v20.915h12.802v15.562H126.41v-15.562h12.802v-21.042c-30.231-4.056-53.628-30.003-53.628-61.328v-21.742h15.562v21.742c0,25.549,20.788,46.334,46.337,46.334s46.34-20.788,46.34-46.334v-21.742h15.562C209.384,125.537,209.384,147.282,209.384,147.282z"/>
			          <path d="M147.483,168.391c12.436,0,22.554-10.115,22.554-22.551v-12.991h-45.108v12.991C124.929,158.274,135.047,168.391,147.483,168.391z"/>
                </svg>
            </button>
            <p className="text-center text-[14px] font-bold p-2 xs2:text-[24px] xs2:p-4 sm:text-[28px]">
              {word}
            </p>
            <p className="text-center text-[14px] font-bold p-2 xs2:text-[20px] xs2:p-4 sm:text-[24px]">
              {spoken}
            </p>            
            <p className="text-center text-[14px] font-bold p-2 xs2:text-[16px] xs2:p-4 md:text-[18px]">
              {message}
            </p>
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="grid place-items-center py-4 xs2:pt-10 xs:pt-16 xs:text-[20px] sm:text-[24px]">
          <p className="font-bold">Monte sua lista de palavras</p>
          <button
            className="btn btn-success btn-start xs2:m-4 xs:mt-4 sm:m-6"
            onClick={() => navigate('/Add')}
          >
            MINHA LISTA
          </button>
        </div>        
      </div>
    </>
  );
}