var express = require('express');
var router = express.Router();
var Sentence = require('../models/sentence.js')
var random = require('mongoose-random');


router.get('/random', function(req, res, next) {
  Sentence.findRandom().limit(1).exec(function (err, sentences) {
    console.log(sentences);
    res.json(sentences)
  })
})

// router.get('/sync', function(req, res, next) {
//   Sentence.syncRandom(function (err, result) {
//     console.log(result);
//   })
// })

module.exports = router;
