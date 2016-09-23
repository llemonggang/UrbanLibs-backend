var express = require('express');
var router = express.Router();
var Word = require('../models/word.js')
var random = require('mongoose-random');
var http = require('http');


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

router.get('/define', function(req, res, next) {
  var wordToDefine = decodeURIComponent(req.query.word);

  // http://api.urbandictionary.com/v0/define?term= + wordToDefine

  http.get({
        host: 'api.urbandictionary.com',
        path: '/v0/define?term=' + wordToDefine
    }, function(response) {
        var body = '';

        response.on('data', function(d) {
            body += d;
        });

        response.on('end', function() {
            var parsed = JSON.parse(body);
            res.json(parsed)
        });
    });
})


// router.get('/sync', function(req, res, next) {
//   Word.syncRandom(function (err, result) {
//     console.log(result);
//   })
// })

module.exports = router;
