const mongoose = require('mongoose');
const { mongodb } = require('../../../config/env.config');

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb.uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;