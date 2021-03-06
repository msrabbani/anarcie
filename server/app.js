var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var login = require('./routes/login');

var app = express();
var cors = require('cors')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/anarcie')
// mongoose.connect(`mongodb://msr:msr1234@cluster0-shard-00-00-g7yx7.mongodb.net:27017,cluster0-shard-00-01-g7yx7.mongodb.net:27017,cluster0-shard-00-02-g7yx7.mongodb.net:27017/anarcie_${process.env.NODE_ENV}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`, err=>{
//   if (err) {
//     console.log(err);
//   } console.log(`========================Connect Mongo Anarcie_${process.env.NODE_ENV}=============================`);
// })
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
