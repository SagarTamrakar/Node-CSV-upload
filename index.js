/*
 * Author: SAGAR TAMRAKAR
 * Date: 22 Jan 2022
 */
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const upload = require('./controllers/upload')
const uploadRoutes = require('./routes/upload');
const userRoutes = require('./routes/user');

const app = express()

mongoose
  .connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/upload', uploadRoutes)
app.use('/user', userRoutes);

var port = process.env.PORT || 5555
app.listen(port, () => console.log('App connected on: ' + port))

