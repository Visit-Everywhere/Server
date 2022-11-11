import { Router } from "express";
import upload from "#utils/aws";
import ImageController from './ImageController.js'

const imageRouter = Router();

// images multers3

authRouter.post("/upload", upload.single("image"), ImageController.uploadImage);


export default imageRouter;