import express from "express";
import cors from "cors";
import connectMongo from "./config/mongo.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectMongo(); // 👈 MongoDB connect

app.use("/api/feedback", feedbackRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
