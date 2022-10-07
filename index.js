import MongoDBConnect from "./utils/connect.mongoose.js";
import pkg from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
const app = pkg();

const start = async () => {
  try {
    await MongoDBConnect();
  } catch (err) {
    console.error(err);
  }
};
start();

export default app;


