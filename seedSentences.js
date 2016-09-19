require('dotenv').config();

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_CONNECTION);

var Sentence = require('./models/sentence');


var sentenceArr = [
  {
    sentence: 'The girl <span>VERB</span> her <span>NOUN</span> and it was  <span>ADJECTIVE</span>.'
  },

].forEach(function(sentenceObject) {
  var sentence = new Sentence(sentenceObject)
  sentence.save(function(err) {

  });
});
