const mongoose = require('mongoose');

var wordScema = {
  word: String,
  type: String
}

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
