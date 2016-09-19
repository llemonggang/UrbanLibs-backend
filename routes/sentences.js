var express = require('express');
var router = express.Router();
var Sentence = require('../models/sentence.js')


router.get('/:sentenceId', function (req, res, next) {
  res.json(res.sentence)
})

module.exports = router;
