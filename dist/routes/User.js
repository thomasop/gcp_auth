"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("../middleware/auth.js"));
const User_js_1 = require("../controllers/User.js");
const userRouter = express_1.default.Router();
userRouter.post("/login", User_js_1.Login);
userRouter.get("/admin", auth_js_1.default, User_js_1.Admin);
userRouter.get("/logout", auth_js_1.default, User_js_1.Logout);
exports.default = userRouter;
