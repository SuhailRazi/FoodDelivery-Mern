import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health Ok" });
});

app.use("/api/my/user", myUserRoute);

app.listen(5000, () => {
  console.log("Running on port 5000");
});
