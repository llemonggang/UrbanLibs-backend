const mongoose = require('mongoose');

var sentenceSchema = new mongoose.Schema ({
  sentence:  String
})

const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence;
