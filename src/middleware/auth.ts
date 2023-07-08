import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export default (req: any, res: Response, next: NextFunction) => {
  console.log(req.session)
  console.log(req.session.user)
  if (req.session.user) next();
  else return res.status(401).json({ status: 401, errors: "no access" });
};
