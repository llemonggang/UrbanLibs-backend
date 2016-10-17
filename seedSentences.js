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
    sentence: 'Be careful not to vaccum the NOUN when you clean under your bed.'
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
    sentence: "Don't let the NOUN run your life. You've got to VERB til you own it."
  },
  {
    sentence: 'The NOUN decided to attack and it was ADJECTIVE.'
  },
  {
    sentence: "It's better to be NOUN than nobody."
  },
  {
    sentence: 'How can this happen? Only NOUN can do this.'
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
  {
    sentence: "ADJECTIVE donuts, always wind up in my mouth."
  },
  {
    sentence: 'I like NOUN; it ADJECTIVE me. I can VERB and look at it for hours.'
  },
  {
    sentence: "No one's dream job involves a NOUN."
  },
  {
    sentence: 'NOUN really needs a day between Saturday and Sunday.'
  },
  {
    sentence: 'I need to stop being so damn ADJECTIVE.'
  },
  {
    sentence: "Dont worry, NOUN is coming."
  },
  {
    sentence: 'NOUN change, things go ADJECTIVE, VERB happens, life goes on.'
  },
  {
    sentence: 'NOUN your life, or your VERB.'
  },
  {
    sentence: 'I wish I could see it from ADJECTIVE perspective.'
  },
  {
    sentence: "Don't ADJECTIVE your VERB, coz' it's your dream job."
  },
  {
    sentence: "You don't have to be ADJECTIVE to work here. We will train you. "
  },
  {
    sentence: 'Today was going great, until ADJECTIVE NOUN showed up.'
  },
  {
    sentence: "I'm busy and you are NOUN, so VERB."
  },





].forEach(function(sentenceObject) {
  var sentence = new Sentence(sentenceObject)
  sentence.save(function(err) {

  });
});
