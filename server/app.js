var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

mongoose.connect('mongodb+srv://GreksO:FormationDevWeb3.0@meanapp.vptnq99.mongodb.net/meanApp?retryWrites=true&w=majority', {}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connexion db OK !');
  }
})



module.exports = app;
