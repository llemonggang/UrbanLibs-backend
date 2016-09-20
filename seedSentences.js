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
    sentence: "I stepped on a NOUN, now I'm a NOUN."
  },
  {
    sentence: 'ADJECTIVE, the NOUN decided to attack.'
  },
  {
    sentence: "It's better to be NOUN than NOUN "
  },
  {
    sentence: 'How can this happen, only NOUN can do this.'
  },
  {
    sentence: 'I am a NOUN. NOUN is perfect. Therefore, I am NOUN.'
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
  


].forEach(function(sentenceObject) {
  var sentence = new Sentence(sentenceObject)
  sentence.save(function(err) {

  });
});
