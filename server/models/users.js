const mongoose = require('mongoose')

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
