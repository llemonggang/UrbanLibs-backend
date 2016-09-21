require('dotenv').config();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
    word: 'shatner commas',
    type: 'noun'
  },
  {
    word: 'assclown',
    type: 'noun'
  },
  {
    word: 'creeper',
    type: 'noun'
  },
  {
    word: 'caraoke',
    type: 'verb'
  },
  {
    word: 'execubabble',
    type: 'noun'
  },
  {
    word: 'finger guns',
    type: 'noun'
  },
  {
    word: 'floordrobe',
    type: 'noun'
  },
  {
    word: 'festivus',
    type: 'noun'
  },
  {
    word: 'farticles',
    type: 'noun'
  },
  {
    word: 'murica',
    type: 'noun'
  },
  {
    word: 'slow burn',
    type: 'noun'
  },
  {
    word: 'spot tease',
    type: 'noun'
  },
  {
    word: 'beer thirty',
    type: 'noun'
  },
  {
    word: 'bing',
    type: 'adjective'
  },
  {
    word: 'textrovert',
    type: 'noun'
  },
  {
    word: 'peasantvision',
    type: 'noun'
  },
  {
    word: 'passhole',
    type: 'noun'
  },
  {
    word: 'webshite',
    type: 'noun'
  },
  {
    word: 'resting bitch face',
    type: 'noun'
  },
  {
    word: 'roomate chicken',
    type: 'noun'
  },
  {
    word: 'pregret',
    type: 'noun'
  },
  {
    word: 'laundry limbo',
    type: 'noun'
  },
  {
    word: 'last texter',
    type: 'noun'
  },
  {
    word: 'headphone zombie',
    type: 'noun'
  },
  {
    word: 'hot mess',
    type: 'noun'
  },
//added verbs

  {
    word: 'party hats',
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
    word: 'english muffin top',
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

].forEach(function(wordObject) {
  var word = new Word(wordObject)
  word.save(function(err) {

  });
});
