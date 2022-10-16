import { Router } from "express";
import validations from "#middlewares/validation";
import UserController from "#authController/UserController";

const authRouter = Router();

authRouter.post("/register", validations, UserController.registration);

authRouter.post("/checkCode", UserController.checkCode);

authRouter.post("/login", UserController.login);

authRouter.post("/logout", UserController.logout);

authRouter.get("/activate:link", UserController.activate);

authRouter.get("/refresh", UserController.refresh);

export default authRouter;
