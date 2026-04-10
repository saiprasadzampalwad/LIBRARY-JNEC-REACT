import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  department: String,
  regNo: String,
  section: String,
  purpose: String,
  frequency: String,
  staffBehavior: String,
  staffKnowledge: String,
  staffEfficiency: String,
  staffEffectiveness: String,
  envCleanliness: String,
  envLighting: String,
  envEquipment: String,
  opac: String,
  internet: String,
  circulation: String,
  reference: String,
  magazine: String,
  readingHall: String,
  sufficiency: String,
  condition: String,
  suggestions: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
