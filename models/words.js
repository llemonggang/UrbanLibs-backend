require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Word = require('./models/word');

var wordsArr = [
  {
    word: 'tasty',
    type: 'adjective'

  },
  {
    word: 'coolio',
    type: 'adjective'
  },
  {
    word: 'large and in charge',
    type: 'adjective'
  },
  {
    word: 'avery',
    type: 'adjective'
  },
  {
    word: 'alan',
    type: 'adjective'
  },
  {
    word: 'adorkable',
    type: 'adjective'
  },
  {
    word: 'doable',
    type: 'adjective'
  },
  {
    word: 'charmingly ghetto',
    type: 'adjective'
  },
  {
    word: 'fungry',
    type: 'adjective'
  },
  {
    word: 'giganticus',
    type: 'adjective'
  },
  {
    word: 'joyngous',
    type: 'adjective'
  },
  {
    word: 'talenful',
    type: 'adjective'
  },
  {
    word: 'adorablicious',
    type: 'adjective'
  },
  {
    word: 'beautifulest',
    type: 'adjective'
  },
  {
    word: 'confidentical',
    type: 'adjective'
  },
  {
    word: 'excitapated',
    type: 'adjective'
  },
  {
    word: 'importeresting',
    type: 'adjective'
  },
  {
    word: 'phat',
    type: 'adjective'
  },
  {
    word: 'naff',
    type: 'adjective'
  },
  {
    word: 'quirky',
    type: 'adjective'
  },
  {
    word: 'elena',
    type: 'adjective'
  },
  {
    word: 'edgy',
    type: 'adjective'
  },
  {
    word: 'eglaf',
    type: 'adjective'
  },
  {
    word: 'lame',
    type: 'adjective'
  },
  {
    word: 'fugly',
    type: 'adjective'
  },
  {
    word: 'Shatner commas',
    type: 'adjective'
  },
  {
    word: 'Assclown',
    type: 'adjective'
  },
  {
    word: 'Creeper',
    type: 'adjective'
  },
  {
    word: 'Caraoke',
    type: 'adjective'
  },
  {
    word: 'execubabble',
    type: 'adjective'
  },
  {
    word: 'finger guns',
    type: 'adjective'
  },
  {
    word: 'floordrobe',
    type: 'adjective'
  },
  {
    word: 'Festivus',
    type: 'adjective'
  },
  {
    word: 'farticles',
    type: 'adjective'
  },
  {
    word: 'murica',
    type: 'adjective'
  },
  {
    word: 'slow burn',
    type: 'adjective'
  },
  {
    word: 'spot tease',
    type: 'adjective'
  },
  {
    word: 'beer thirty',
    type: 'adjective'
  },
  {
    word: 'Bing',
    type: 'adjective'
  },
  {
    word: 'textrovert',
    type: 'adjective'
  },
  {
    word: 'peasantvision',
    type: 'adjective'
  },
  {
    word: 'passhole',
    type: 'adjective'
  },
  {
    word: 'webshite',
    type: 'adjective'
  },
  {
    word: 'resting bitch face',
    type: 'adjective'
  },
  {
    word: 'roomate chicken',
    type: 'adjective'
  },
  {
    word: 'pregret',
    type: 'adjective'
  },
  {
    word: 'laundry limbo',
    type: 'adjective'
  },
  {
    word: 'last texter',
    type: 'adjective'
  },
  {
    word: 'Headphone Zombie',
    type: 'adjective'
  },
  {
    word: 'hot mess',
    type: 'adjective'
  },
//added verbs
  {
    word: 'kill',
    type: 'verb'
  },
  {
    word: 'party hats',
    type: 'verb'
  },
  {
    word: 'fapioca',
    type: 'verb'
  },
  {
    word: 'identify',
    type: 'verb'
  },
  {
    word: 'hit the slopes',
    type: 'verb'
  },
  {
    word: 'fireass',
    type: 'verb'
  },
  {
    word: 'suckeranium',
    type: 'verb'
  },
  {
    word: 'roflstomped',
    type: 'verb'
  },
  {
    word: 'raphke',
    type: 'verb'
  },
  {
    word: 'drinkspiration ',
    type: 'verb'
  },
  {
    word: 'suckerfice',
    type: 'verb'
  },
  {
    word: 'humanoidrobotic',
    type: 'verb'
  },
  {
    word: 'captivate',
    type: 'verb'
  },
  {
    word: 'fappable',
    type: 'verb'
  },{
    word: 'irish exit',
    type: 'verb'
  },
  // added noun
  {
    word: 'chapped lips',
    type: 'noun'
  },
  {
    word: 'beaver',
    type: 'noun'
  },
  {
    word: 'fresh meat',
    type: 'noun'
  },
  {
    word: 'milk Shake',
    type: 'noun'
  },
  {
    word: 'popsicle',
    type: 'noun'
  },
  {
    word: 'pink chewies',
    type: 'noun'
  },
  {
    word: 'watermellons',
    type: 'noun'
  },
  {
    word: 'bobambas',
    type: 'noun'
  },
  {
    word: 'tugce',
    type: 'noun'
  },
  {
    word: 'nupies',
    type: 'noun'
  },
  {
    word: 'starter buttons',
    type: 'noun'
  },
  {
    word: 'golden winnebagoes',
    type: 'noun'
  },
  {
    word: 'md 20/20',
    type: 'noun'
  },
  {
    word: 'yasi',
    type: 'noun'
  },
  {
    word: 'minger',
    type: 'noun'
  },
  {
    word: 'libtard',
    type: 'noun'
  },
  {
    word: 'idiot',
    type: 'noun'
  },
  {
    word: 'kanjar',
    type: 'noun'
  },
  {
    word: 'buttaface',
    type: 'noun'
  },
  {
    word: 'whispering eye',
    type: 'noun'
  },
  {
    word: 'bubble butt',
    type: 'noun'
  },
  {
    word: 'pink taco',
    type: 'noun'
  },
  {
    word: 'canadiache',
    type: 'noun'
  },
  {
    word: 'git hub',
    type: 'noun'
  },
  {
    word: 'chuggaaconroy',
    type: 'noun'
  },
  {
    word: 'lipstick',
    type: 'noun'
  },
  {
    word: 'anderface',
    type: 'noun'
  },
  {
    word: 'bärenjäger',
    type: 'noun'
  },
  {
    word: 'keemstar',
    type: 'noun'
  },
  {
    word: 'hipster ',
    type: 'noun'
  },

]
