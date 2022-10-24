import { Router } from "express";
import validations from "#middlewares/validation";
import UserController from "#authController/UserController";

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

authRouter.post("/logout", UserController.logout);

// refresh token routes

authRouter.get("/refresh", UserController.refresh);


export default authRouter;
