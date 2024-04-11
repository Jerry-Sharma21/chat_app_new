const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

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

app.listen(PORT, console.log(`Server started on port ${PORT}`));
