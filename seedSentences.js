require('dotenv').config();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_CONNECTION);

var Sentence = require('./models/sentence');


var sentenceArr = [
  {
    sentence: 'The girl VERB her NOUN and it was ADJECTIVE.'
  },
  {
    sentence: 'The boy VERB his NOUN and it was ADJECTIVE.'
  },
  {
    sentence: 'Be carefull not to vaccum the NOUN when you clean under your bed.'
  },
  {
    sentence: 'I like my hot dogs with mustard, relish and NOUN.'
  },
  {
    sentence: 'NOUN are the staple of ADJECTIVE Austin.'
  },
  {
    sentence: 'I was about to ask her out but then she dropped the NOUN.'
  },
  {
    sentence: 'NOUN are yummy summer treats.'
  },
  {
    sentence: 'Oh my god, VERB that NOUN.'
  },
  {
    sentence: "Don't let the NOUN,"
  },
  {
    sentence: 'ADJECTIVE, the NOUN decided to attack.'
  },
  {
    sentence: "It's better to be NOUN than nobody."
  },
  {
    sentence: 'How can this happen, only NOUN can do this.'
  },
  {
    sentence: "My body is ADJECTIVE, that I VERB, myself. "
  },
  {
    sentence: "People say nothing is ADJECTIVE, but I do nothing every day."
  },
  {
    sentence: 'One of the great things about NOUN is sometimes there are some ADJECTIVE pictures.'
  },
  {
    sentence: 'The NOUN to success is always under construction.'
  },
  {
    sentence: 'I like being ADJECTIVE.'
  },
  {
    sentence: 'No man goes before his time - unless NOUN leaves early.'
  },
  // {
  //   sentence: ""
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },
  // {
  //   sentence: ''
  // },





].forEach(function(sentenceObject) {
  var sentence = new Sentence(sentenceObject)
  sentence.save(function(err) {

  });
});
