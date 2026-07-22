import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️ WARNING: Failed to connect to MongoDB. Make sure you have replaced the placeholder MONGO_URI in your .env file with a valid connection string.');
    // We remove process.exit(1) here so the server stays alive for you to test frontend routing,
    // though API calls that require the database will still fail until the URI is fixed.
  }
};

export default connectDB;
