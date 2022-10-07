// import mongoose from "mongoose";
import { connect } from "mongoose";


export default async function MongoDBConnect() {
  await connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      return true;
    })
    .catch((err) => {
      console.log("Error connected to MongoDB", err);
      return false;
    });
};
