import { Router } from "express";
import upload from "#utils/aws";
import ImageController from '../controllers/ImageController.js'

const imageRouter = Router();

// images multers3

imageRouter.post("/upload", upload.single("image"), ImageController.uploadImage);


export default imageRouter;