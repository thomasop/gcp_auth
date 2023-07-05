"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let connect = new sequelize_1.Sequelize(`postgresql://postgres:${process.env.DATABASE_PASSWORD}@db.wbwoxzrfkrbunqpekiiz.supabase.co:5432/postgres`);
try {
    connect.authenticate();
    console.log("Database is connecting");
}
catch (error) {
    console.log(error);
}
exports.default = connect;
