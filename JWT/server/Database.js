import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
  process.env.DATABASEDB,
  process.env.USERDB,
  process.env.PASSWORDDB,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default db;
