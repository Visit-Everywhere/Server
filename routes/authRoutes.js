import { Router } from "express";
import validations from "#middlewares/validationMiddleware";
import UserController from "#authController/UserController";
import authMiddleware from "#middlewares/authMiddleware";

const authRouter = Router();

// register routes
authRouter.post("/register", validations, UserController.register);

authRouter.post("/code", validations, UserController.checkCode);

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


export default authRouter;
