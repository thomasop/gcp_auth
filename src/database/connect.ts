import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let connect = new Sequelize(`postgresql://postgres:${process.env.DATABASE_PASSWORD}@db.wbwoxzrfkrbunqpekiiz.supabase.co:5432/postgres`)

try {
  connect.authenticate();
  console.log("Database is connecting");
} catch (error) {
  console.log(error);
}

export default connect;
