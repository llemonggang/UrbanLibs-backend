var express = require('express');
var router = express.Router();
var Word = require('../models/word.js')
var random = require('mongoose-random');


router.get('/random', function(req, res, next) {
  Word.findRandom({ type: 'noun' }).limit(1).exec(function (err, noun) {

    Word.findRandom({ type: 'verb'}).limit(1).exec(function (err, verb) {

      Word.findRandom({ type: 'adjective'}).limit(1).exec(function (err, adjective) {

        res.json({
          noun: noun,
          verb: verb,
          adjective: adjective
        })
      })
    })
  })
})

// router.get('/sync', function(req, res, next) {
//   Word.syncRandom(function (err, result) {
//     console.log(result);
//   })
// })

module.exports = router;
