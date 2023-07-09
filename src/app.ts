import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/User.js";
dotenv.config();

let app = express();
export const server = createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "https://test-auth-alpha.vercel.app" }));
app.use(cookieParser('test'));

app.use("/user", userRouter);

export default app;