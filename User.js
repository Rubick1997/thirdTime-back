import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
  picture: { type: String, required: true },
});

export default mongoose.model("User", User);
