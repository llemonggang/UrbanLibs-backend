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
    word: 'burn',
    type: 'verb'
  },
  {
    word: 'accelerate',
    type: 'verb'
  },
  {
    word: 'identify',
    type: 'verb'
  },
  {
    word: 'decide',
    type: 'verb'
  },
  {
    word: 'receive',
    type: 'verb'
  },
  {
    word: 'sell',
    type: 'verb'
  },
  {
    word: 'walk',
    type: 'verb'
  },
  {
    word: 'create',
    type: 'verb'
  },
  {
    word: 'miss',
    type: 'verb'
  },
  {
    word: 'poke',
    type: 'verb'
  },
  {
    word: 'remember',
    type: 'verb'
  },
  {
    word: 'express',
    type: 'verb'
  },
  {
    word: 'captivate',
    type: 'verb'
  },{
    word: 'advocate',
    type: 'verb'
  },
  // added noun
  {
    word: 'lips',
    type: 'noun'
  },
  {
    word: 'hand',
    type: 'noun'
  },
  {
    word: 'fish',
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
    word: 'chocolate',
    type: 'noun'
  },
  {
    word: 'radio',
    type: 'noun'
  },
  {
    word: 'texas',
    type: 'noun'
  },
  {
    word: 'scooter',
    type: 'noun'
  },
  {
    word: 'riely',
    type: 'noun'
  },
  {
    word: 'we Work',
    type: 'noun'
  },
  {
    word: 'general assembly',
    type: 'noun'
  },
  {
    word: 'austin',
    type: 'noun'
  },
  {
    word: 'banana',
    type: 'noun'
  },
  {
    word: 'helmet',
    type: 'noun'
  },
  {
    word: 'karate',
    type: 'noun'
  },
  {
    word: 'idiot',
    type: 'noun'
  },
  {
    word: 'leash',
    type: 'noun'
  },
  {
    word: 'shark',
    type: 'noun'
  },
  {
    word: 'dinosaur',
    type: 'noun'
  },
  {
    word: 'bubble butt',
    type: 'noun'
  },
  {
    word: 'taco',
    type: 'noun'
  },
  {
    word: 'rotten egg',
    type: 'noun'
  },
  {
    word: 'git hub',
    type: 'noun'
  },
  {
    word: 'stinky socks',
    type: 'noun'
  },
  {
    word: 'lipstick',
    type: 'noun'
  },
  {
    word: 'mike',
    type: 'noun'
  },
  {
    word: 'iPhone',
    type: 'noun'
  },
  {
    word: 'refried bean',
    type: 'noun'
  },
  {
    word: 'hot dog',
    type: 'noun'
  },

]
