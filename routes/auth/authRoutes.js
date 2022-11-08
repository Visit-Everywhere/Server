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

// images multers3
import upload from "#utils/aws";

authRouter.post("/images", upload.single("image"), async (req, res) => {
  await req.models.ImageModel.create({
    link: req.file.location,
    key: req.file.key,
  });
  res.send({
    message: "Uploaded!",
    link: req.file.location
  });
});

export default authRouter;
