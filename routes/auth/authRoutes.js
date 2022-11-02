import { Router } from "express";
import validations from "#middlewares/validationMiddleware";
import UserController from "#authController/UserController";
import authMiddleware from "#middlewares/authMiddleware";

const authRouter = Router();

// register routes
authRouter.post("/register", validations, UserController.register);

authRouter.post("/checkCode", validations, UserController.checkCode);

// login routes

authRouter.post("/login", validations, UserController.login);

// restore password routes
authRouter.post("/restore/email", validations, UserController.restoreEmail);
authRouter.post("/restore/code", validations, UserController.restoreCode);
authRouter.put("/restore/password", validations, UserController.restorePassword);

// logout routes
authRouter.post("/logout", authMiddleware, UserController.logout);

// refresh token routes
authRouter.get("/refresh", UserController.refresh);

// images
import multer from "multer";
import { uploadFile, getFileStream } from "#utils/S3";
const upload = multer({ dest: process.cwd() + "/uploads/" });

authRouter.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  console.log(result, 'result');
  await req.models.ImageModel.create({
    link: result.Location,
    key: result.key,
  });
  res.status(200).json({ message: "ok", data: { link: file.filename } });
});

authRouter.get('/images/:key', (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key)
  
  readStream.pipe(res)
})

export default authRouter;
