import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Mail, MailData } from "./models/mail";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

// create express app
const app = express();

async function connectToMongo() {
  try {
    mongoose.connect(process.env.MONGO_URL || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to mongodb", error);
  }
}
connectToMongo();

// middleware
app.use(cors());
app.use(express.json());
const mailData: MailData = {
  id: 7,
  fullName: "Sarah Johnson",
  datePosted: "2024-03-11T07:30:00",
  email: "sjohnson@company.com",
  userPost: "Rough draft of the presentation. Please give it a look.",
  postType: ["work-in-progress"],
  seen: "seen",
  category: "drafts",
  subject: "Presentation Draft",
};

const router = express.Router();
router.post("/mails", async (req: Request, res: Response) => {
  try {
    const newMailObject = new Mail(req.body);
    console.log(newMailObject);
    const savedMail = await newMailObject.save();
    res.status(201).json(savedMail);
  } catch (error) {}
});

router.get("/mails", async (req: Request, res: Response) => {
  try {
    const mails = await Mail.find(); // Fetch all mails from the database
    res.json(mails);
  } catch (error) {
    res.status(500).json("error");
  }
});

app.post('/receiveData', (req, res) => {
  const receivedData = req.body;
  console.log('Received Data:', receivedData); 
  res.json({ message: 'Data received succedssfully!' });
});

app.use('/api/mails', router); 

app.listen(5020, () => {
  console.log("server starteddasda");
});

app.get("/", (req, res) => {
  res.end();
});
