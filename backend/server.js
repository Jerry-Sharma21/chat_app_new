const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is Running successfully');
});

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find(c => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(
  PORT,
  console.log(colors.yellow.bold(`Server started on port ${PORT}`)),
);
