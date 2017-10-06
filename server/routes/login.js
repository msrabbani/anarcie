var express = require('express');
var router = express.Router();
var FB = require('fb')
var user = require('../controllers/login')

// require('dotenv').config()

const setAccessToken = (req,res,next) => {
  FB.setAccessToken(req.headers.fbaccesstoken)
  next()
}

router.post('/', setAccessToken, user.login)

module.exports = router