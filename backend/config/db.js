const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      colors.cyan.underline(
        `MongoDB Connected: ${connection.connection.host} `,
      ),
    );
  } catch (error) {
    console.log(colors.red.bold(`Error: ${error.message}`));
    process.exit();
  }
};

module.exports = connectDB;
