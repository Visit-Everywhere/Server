import { Router } from "express";
import UserController from "../../controllers/auth/UserController.js"

const authRouter = Router();

authRouter.post("/registration", UserController.registration);

authRouter.post("/login", UserController.login);

authRouter.post("/logout", UserController.logout);

authRouter.get("/activate:link", UserController.activate);

authRouter.get("/refresh", UserController.refresh);

export default authRouter;
