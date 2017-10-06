var express = require('express');
var router = express.Router();
var FB = require('fb')
var user = require('../models/users')

// require('dotenv').config()

const setAccessToken = (req,res,next) => {
  FB.setAccessToken(req.headers.fb_access_token)
  console.log(req.headers.fb_access_token);
  next()
}

router.post('/me', setAccessToken, (req,res) => {
  FB.api('/me',{fields : ['id','name','email','picture.type(large)']}, (fbresponse) => {
    console.log('---respon dari fb---',fbresponse);

    user.find({
      fb_id:fbresponse.id
    }).then((data)=>{
      console.log('---data yang didapat---',data);
      if (data.length === 0) {
        db.create({
          fb_id:fbresponse.id,
          email:fbresponse.email,
          img:fbresponse.picture.data.url,
          name:fbresponse.name
        }).then((datamasuk) => {
          console.log('---data yang dimasukan database---',datamasuk);
          var dataMentah = {
            id:datamasuk._id,
            fb_id:datamasuk.fb_id,
            email:datamasuk.email,
            name:datamasuk.name
          }
          var token = jwt.sign(dataMentah, process.env.DB_HOST)
          console.log('token-nya', token);
          res.send({token: token, name: datamasuk.name, id: datamasuk._id})
        }).catch((err) => {
          res.send(err)
        })
      } else {
        var dataMentah = {
          id: data[0]._id,
          fb_id: data[0].fb_id,
          email: data[0].email,
          name: data[0].name
        }
        var token = jwt.sign(dataMentah, process.env.DB_HOST)
        console.log('token-nya', token);
        console.log('nama-nya', data);
        res.send({token: token, name: datamasuk[0].name, id: datamasuk[0]._id})
      }
    })
  })
})

module.exports = router;

//========================================================================================================================
// const login = (req, res) => {
//   FB.api('/me', {fields: ['id','name','email','picture']}, (response) => {
//     // res.send(response)
//     console.log('ini response fb', response);
//
//     db.find({fb_id: response.id})
//     .then(result => {
//       if(result.length === 0){
//         db.create({
//           fb_id: response.id,
//           email: response.email,
//           img: response.picture.data.url,
//           name: response.name
//         })
//         .then(rows =>{
//           console.log('ini rows',rows)
//           var siapBungkus = {
//             id: rows._id,
//             fb_id: rows.fb_id,
//             email: rows.email,
//             name: rows.name
//           }
//           var token = jwt.sign(siapBungkus, process.env.JWT_SECRET)
//           console.log('tokennya', token);
//           res.send({token: token, name: rows.name, id: rows._id})
//         })
//         .catch(err =>{
//           res.send(err)
//         })
//       } else {
//         var siapBungkus = {
//           id: result[0]._id,
//           fb_id: result[0].fb_id,
//           email: result[0].email,
//           name: result[0].name
//         }
//         var token = jwt.sign(siapBungkus, process.env.JWT_SECRET)
//         console.log('tokennya', token);
//         console.log('namanya', result);
//         res.send({token: token, name: result[0].name, id: result[0]._id})
//       }
//     })
//   })
// }
//
//
//
// module.exports = {
//   login,
// }
