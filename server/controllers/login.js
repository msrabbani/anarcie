const User = require('../models/users')
const jwt = require('jsonwebtoken')
const FB = require('fb')
require('dotenv').config()

var login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, (response) => {
    console.log(response);
    User.find({fb_id: response.id})
    .then(result => {
      if (result.length === 0) {
        User.create({
          fb_id: response.id,
          email: response.email,
          img: response.picture.data.url,
          name: response.name
        })
        .then(rows => {
          var bungkus = {
            id: rows._id,
            fb_id: rows.fb_id,
            email: rows.email,
            name: rows.name,
            img: rows.img
          }
          var token = jwt.sign(bungkus, process.env.JWT_SECRET)
          res.send({token: token, name: rows.name, id: rows._id, email: rows.email, img: rows.img})
        })
        .catch(err => {
          res.send(err)
        })
      } else {
        var bungkus = {
          id: result[0]._id,
          fb_id: result[0].fb_id,
          email: result[0].email,
          name: result[0].name,
          img: result[0].img
        }
        var token = jwt.sign(bungkus, process.env.JWT_SECRET)
        res.send({token: token, name: result[0].name, id: result[0]._id, email: result[0].email, img: result[0].img})
      }
    })
  });
}

module.exports = {
  login
}