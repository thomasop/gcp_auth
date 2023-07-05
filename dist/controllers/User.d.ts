import { NextFunction, Response } from "express";
declare const Login: (req: any, res: Response) => Promise<void>;
declare const Admin: (req: any, res: Response) => Promise<void>;
declare const Logout: (req: any, res: Response, next: NextFunction) => Promise<void>;
export { Login, Admin, Logout };
