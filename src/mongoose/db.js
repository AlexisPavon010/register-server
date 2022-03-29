import mongoose from 'mongoose';
import { DATABASE_URL } from '../config.js';

const ConnectDb = async () => {
  try {
    // Use new db connection
    await mongoose.connect(DATABASE_URL, {
      useUnifiedTopology: true,
      // useFindAndModify: true,
      // useCreateIndex: true,
      useNewUrlParser: true,
      bufferCommands: true,
      // bufferMaxEntries: 0
    });
    console.log('db is Connected 🚀')

  } catch (error) {
    console.log(error)
  }
};
ConnectDb()