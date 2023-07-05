"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.Admin = exports.Login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_js_1 = __importDefault(require("../models/User.js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ mail: user }, process.env.SECRET_TOKEN);
};
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.body.email;
    let password = req.body.password;
    const user = yield User_js_1.default.findOne({ where: { mail: email } });
    if (user === null) {
        res.status(400).json({ errors: "Mauvaise combinaison email/password" });
    }
    else {
        const compare = () => __awaiter(void 0, void 0, void 0, function* () {
            const comp = yield bcrypt_1.default.compare(req.body.password, user === null || user === void 0 ? void 0 : user.dataValues.password);
            if (comp == false) {
                return res
                    .status(400)
                    .json({ errors: "Mauvaise combinaison email/password" });
            }
            else {
                const userLogin = {
                    id: user.dataValues.id,
                    mail: user.dataValues.mail,
                };
                /* res.cookie("token", user, {
                  httpOnly: true, secure: true, sameSite: true
                }) */
                req.session.user = user;
                req.session.cookie.maxAge = 3600000;
                return res.status(200).json({
                    status: 200,
                    user: userLogin,
                });
            }
        });
        compare();
    }
});
exports.Login = Login;
const Admin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.session.user);
    if (req.session.user === undefined || req.session.user === null) {
        res.status(200).json("user no log");
    }
    else {
        res.status(200).json("user log");
    }
});
exports.Admin = Admin;
const Logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.session.user === null) {
        res.status(200).json({ status: 400, message: "user no log" });
    }
    else {
        req.session.destroy();
        res.status(200).json({ status: 200, message: "user logout" });
    }
});
exports.Logout = Logout;
