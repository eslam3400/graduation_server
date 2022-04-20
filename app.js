const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth')

var app = express();

mongoose.connect("mongodb://localhost:27017/Graduation", {
  useNewUrlParser: true,
});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected to mongodb'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/users', usersRouter);

module.exports = app;
