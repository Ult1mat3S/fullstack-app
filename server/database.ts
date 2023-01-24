import dotenv from "dotenv";

dotenv.config({ path: "database/.env" });

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
