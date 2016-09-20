const mongoose = require('mongoose');
var random = require('mongoose-random');


var wordSchema = new mongoose.Schema({
  word: String,
  type: String
})

wordSchema.plugin(random, { path: 'r' });

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
