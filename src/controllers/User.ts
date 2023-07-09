import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();


const Login = async (req: any, res: Response) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body.email);
  console.log(req.body.password);
  const user = await User.findOne({ where: { mail: email } });
  console.log(user)
  if (user === null) {
    res.status(400).json({ errors: "Mauvaise combinaison email/password" });
  } else {
    const compare = async () => {
      const comp = await bcrypt.compare(
        req.body.password,
        user?.dataValues.password
      );
      if (comp == false) {
        return res
          .status(400)
          .json({ errors: "Mauvaise combinaison email/password" });
      } else {
        const userLogin = {
          id: user.dataValues.id,
          mail: user.dataValues.mail,
        };
        res.cookie("jwt", "test");
        /* req.session.user = user;
        req.session.cookie.maxAge = 3600000 */
        return res.status(200).json({
          status: 200,
          user: userLogin,
        });
      }
    };
    compare();
  }
};

const Admin = async (req: any, res: Response) => {
  /* console.log(req.session.user);
  if (req.session.user === undefined || req.session.user === null) { */
    res.status(200).json({ status: 200, message: "user no log" });
  /* } else {
    res.status(200).json("user log");
  } */
};

const Logout = async (req: any, res: Response, next: NextFunction) => {
  if (req.session.user === null) {
    res.status(200).json({ status: 400, message: "user no log" });
  } else {
    req.session.destroy()
    res.status(200).json({ status: 200, message: "user logout" });
    
  }
};

export { Login, Admin, Logout };
