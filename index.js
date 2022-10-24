/*
 * Author: SAGAR TAMRAKAR
 * Date: 22 Jan 2022
 */
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const uploadRoutes = require('./routes/upload');
const userRoutes = require('./routes/user');
const userAccountRoutes = require('./routes/userAccount')
require('dotenv').config()
const app = express()
mongoose
  .connect(`${process.env.MONGO_DB_CONNECTION_STR}/test`, { useNewUrlParser: true })
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err))

app.use(bodyParser.json())

app.use('/upload', uploadRoutes)
app.use('/user', userRoutes);
app.use('/userAccount', userAccountRoutes);

var port = process.env.PORT || 5555
app.listen(port, () => console.log('App connected on: ' + port))

