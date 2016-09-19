const mongoose = require('mongoose');

var sentenceScema = {
  sentence: String,
}

const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence;
