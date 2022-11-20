import Router from "express";

import imageRouter from "./imageRoutes.js";
import authRouter from "./authRoutes.js";

const allRouter = new Router

allRouter.use("/image", imageRouter);
allRouter.use("/user", authRouter);

export default allRouter
