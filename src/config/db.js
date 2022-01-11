/* eslint-disable max-len */
const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected at ${connect.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  };
};

module.exports = connectDB;
