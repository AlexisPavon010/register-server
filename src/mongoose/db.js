import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const db = async () => {
  try {
    // Use new db connection
    await mongoose.connect(process.env.DATABASE_URL, {
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

db()