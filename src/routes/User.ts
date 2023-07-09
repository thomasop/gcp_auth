import express, { Request, Response } from "express";
import auth from "../middleware/auth.js";
import { Admin, Login, Logout } from "../controllers/User.js";
import { body } from "express-validator";

const userRouter = express.Router();

userRouter.post("/login", Login);
userRouter.get("/admin", Admin);
userRouter.get("/logout", Logout);

export default userRouter;

