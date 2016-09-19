const mongoose = require('mongoose');
var random = require('mongoose-random');


var sentenceSchema = new mongoose.Schema ({
  sentence:  String
})

sentenceSchema.plugin(random, { path: 'r' });

const Sentence = mongoose.model('Sentence', sentenceSchema);

module.exports = Sentence;
