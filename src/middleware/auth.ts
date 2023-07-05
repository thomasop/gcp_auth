import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default (req: any, res: Response, next: NextFunction) => {
  if (req.session.user) next();
  else return res.status(401).json({ status: 401, errors: "no access" });
};
