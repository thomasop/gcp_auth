import { QueryTypes } from "sequelize";
import connect from "../database/connect.js";
import { DataType } from "sequelize-typescript";

const User = connect.define(
  "user",
  {
    id: {
      type: DataType.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    mail: {
      type: DataType.STRING,
    },
    password: {
      type: DataType.STRING,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

export default User;
