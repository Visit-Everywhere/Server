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

authRouter.post("/restoreEmail", validations, UserController.restoreEmail);
authRouter.post("/restoreCode", validations, UserController.restoreCode);
authRouter.put("/restorePassword", validations, UserController.restorePassword);


// ...

authRouter.post("/logout", UserController.logout);

authRouter.get("/activate:link", UserController.activate);

authRouter.get("/refresh", UserController.refresh);


export default authRouter;
