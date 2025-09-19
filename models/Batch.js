const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  batchName: { type: String, required: true, unique: true },
  numberOfStudents: { type: Number, required: true },
  numberOfClassesPerMonth: { type: Number, required: true },
  course: { type: String, required: true },
  medium: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Batch", batchSchema);
