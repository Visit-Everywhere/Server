import express from "express";
import DB from "#utils/connectMongoose"; // DB connecting
import fs from "fs";
import path from "path";
import authRouter from "#authRoute/authRoutes";
import redis from '#middlewares/redis'
import cookieParser from "cookie-parser";

const app = express();
const { models } = DB; // extracting al models
const PORT = process.env.PORT || 3000;

// middlewares
app.use((req, res, next) => {
  // now in every request would be our models, we don't need to import everywhere
  req.models = models;
  next();
});
 
// app.use(express.static('public')) // if project is 1 tier
app.use(cookieParser())
app.use(express.json());
app.use(redis())
app.use(authRouter);
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
