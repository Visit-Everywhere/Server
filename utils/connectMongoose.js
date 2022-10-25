import mongoose from "mongoose";


import models from "../models/index.js";

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
    return true;
  } catch (err) {
    console.log(`DB don't connected ${err}`);
    return false;
  }
}
export const DB = {
  models
};
