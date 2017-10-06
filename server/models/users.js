const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/anarcie')

const schema = new mongoose.Schema({
  fb_id: 'string',
  name: 'string',
  email: 'string',
  img: 'string',
}, {
  timestamps: true
})

const user = mongoose.model('users', schema)

module.exports = user
