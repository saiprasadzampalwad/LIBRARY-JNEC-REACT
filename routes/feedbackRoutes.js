import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// Save feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ success: true, message: "Feedback saved ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
