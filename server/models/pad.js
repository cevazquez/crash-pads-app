const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const padSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: [128, "Title must not exceed 100 characters"]
  },
  city: { type: String, required: true, lowercase: true },
  airport: {
    type: String,
    required: true,
    min: [3, "Must be longer than 3 characters"]
  },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  beds: Number,
  shared: Boolean,
  description: { type: String, required: true },
  monthlyRate: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Pad", padSchema);
