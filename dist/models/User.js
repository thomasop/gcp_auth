"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_js_1 = __importDefault(require("../database/connect.js"));
const sequelize_typescript_1 = require("sequelize-typescript");
const User = connect_js_1.default.define("user", {
    id: {
        type: sequelize_typescript_1.DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    mail: {
        type: sequelize_typescript_1.DataType.STRING,
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
});
exports.default = User;
