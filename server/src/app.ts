import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Mail, MailData } from "./models/mail";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

// create express app
const app = express();

//  Connect to MongoDB
async function connectToMongo() {
  try {
    mongoose.connect(process.env.MONGO_URL || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to mongodb", error);
    process.exit(1);
  }
}
connectToMongo();

// middleware
app.use(cors());
app.use(express.json());

// CRUD ROUTES

app.post("/mails", async (req: Request, res: Response) => {
  try {
    const newMail = new Mail(req.body);
    console.log(req.body);
    const savedMail = await newMail.save();
    res.status(201).json(savedMail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to save mail" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "hi", timestamp: 10, otherData: [1, 2, 3] });
});

app.get("/mails", async (req: Request, res: Response) => {
  try {
    const mails = await Mail.find();
    res.json(mails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch mails" });
  }
});

app.listen(5020, () => {
  console.log("server starteddasda testingdd");
});
