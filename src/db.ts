import mongoose from 'mongoose'

export async function initMongoose() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/haves_and_needs_db');
    console.log('connection established')
  } catch (error) {
    console.error(error);
  }
}
