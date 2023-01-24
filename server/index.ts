import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
const connectDB = require("./database");
dotenv.config({ path: "database/.env" });

const app: Express = express();

const PORT = process.env.PORT;

// TODO: fix error with server module "Error: Cannot find module 'server'" when using connectDB from separate file
// mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_STRING, {});

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.set("json spaces", 2);

app.post("/api", (req: Request, res: Response, next) => {
  res.send(req.body);
  // console.log(req);
  // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
  // res.json(JSON.stringify(req));
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!`);
});
