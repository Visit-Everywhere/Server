import { Router } from "express";
import validations from "#middlewares/validation";
import UserController from "#authController/UserController";

const authRouter = Router();

authRouter.post("/register", validations, UserController.register);

authRouter.post("/checkCode", validations, UserController.checkCode);

authRouter.post("/login", validations, UserController.login);

authRouter.post("/logout", UserController.logout);

authRouter.get("/activate:link", UserController.activate);

authRouter.get("/refresh", UserController.refresh);

export default authRouter;
