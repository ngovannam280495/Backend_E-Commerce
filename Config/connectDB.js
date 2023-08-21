import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  const URL_MONGODB = process.env.URL_MONGODB;
  try {
    await mongoose.connect(URL_MONGODB);
    console.log('Connected to Mongo database successfully');
  } catch (error) {
    console.log(error.massage);
    process.exit(1);
  }
};

export default connectDB;
