var express = require('express');
var router = express.Router();
var Word = require('../models/word.js')
var random = require('mongoose-random');


router.get('/random', function(req, res, next) {
  Word.findRandom().limit(1).exec(function (err, words) {
    console.log(words);
    res.json(words)
  })
})

// router.get('/sync', function(req, res, next) {
//   Word.syncRandom(function (err, result) {
//     console.log(result);
//   })
// })

module.exports = router;
