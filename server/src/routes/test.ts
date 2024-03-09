import express, { Request, Response } from "express";
import { Mail } from "../models/mail";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.send("database connection workign!!!");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});




export default router;
