import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRouter from "./routes/User.js";
import session from "express-session";
import connectSequelizeStore from 'connect-session-sequelize'
import connect from "./database/connect.js";
dotenv.config();

let app = express();
export const server = createServer(app);
const SequelizeStore = connectSequelizeStore(session.Store)

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyParser.urlencoded({ extended: false }));

let myStore = new SequelizeStore({
  db: connect
})
app.use(
  session({
    secret: process.env.SECRET_COOKIE as string,
    resave: false,
    saveUninitialized: false,
    store: myStore
  })
);

myStore.sync();

app.use("/user", userRouter);

export default app;