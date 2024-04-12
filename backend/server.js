const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is Running successfully');
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(colors.yellow.bold(`Server started on port ${PORT}`)),
);
