var express = require('express')
var request = require('request')
var legacy = require('legacy-encoding')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var sgfPath = req.query.sgfpath
  request({
    method: 'GET',
    uri: sgfPath,
    encoding: null
  },
    function (error, response, body) {
      if (error) {
        return console.error('upload failed:', error)
      }
      var sgf = legacy.decode(body, 'gb18030')
      res.render('singlePlayer', { title: '一盘大棋', SGF: sgf })
    })
})

module.exports = router
