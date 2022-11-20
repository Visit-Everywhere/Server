import express from "express";
import {DB, connect} from "#utils/connectMongoose"; // DB connecting
import fs from "fs";
import path from "path";
import redis from '#middlewares/redisMiddleware'
import cookieParser from "cookie-parser";
import allRouter from "./routes/index.js"

const app = express();
const { models } = DB; // extracting al models
const PORT = process.env.PORT;


// middlewares
app.use((req, res, next) => {
  // now in every request would be our models, we don't need to import everywhere
  req.models = models;
  next();
});
connect()
// app.use(express.static('public')) // if project is 1 tier
app.use(cookieParser())
app.use(express.json());
app.use(redis())
// activate all routes
app.use("/", allRouter)

app.use((error, req, res, next) => {
  // its our error handler middleware
  if (error.status !== 500) {
    // if error is not internal server error its response, we also write it in our logger
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }

  fs.appendFileSync(
    // writing error in our logger file
    path.join(process.cwd(), "log.txt"),
    `${req.method}___${req.url}___${Date.now()}___${error.name}___${error.message}\n`
  );

  res.status(error.status).json({
    // then returning internal server error
    status: error.status,
    message: "Internal Server Error",
    data: null,
    token: null,
  });

  process.exit();
});

app.listen(PORT, console.log(`I'm ready on http://localhost:${PORT}`));
