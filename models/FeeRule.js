const mongoose = require("mongoose");

const feeRuleSchema = new mongoose.Schema({
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", required: true },

  // New fields
  noOfStudentsMin: { type: Number, required: true },
  noOfStudentsMax: { type: Number, required: true },
  region: { type: String, required: true },
  medium: { type: String, required: true },
  course: { type: String, required: true },

  monthlyFee: { type: Number, required: true },
  totalClasses: { type: Number, required: true },

  negotiableFee: {
    type: Number,
    required: true,
    min: [800, "Negotiable fee must be at least 800"],
  },
  discount: {
    type: Number,
    min: 0,
    max: 100, // percentage
    default: null,
  },
  remarks: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FeeRule", feeRuleSchema);
