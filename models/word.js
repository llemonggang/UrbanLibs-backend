const mongoose = require('mongoose');

var wordSchema = new mongoose.Schema({
  word: String,
  type: String
})

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
