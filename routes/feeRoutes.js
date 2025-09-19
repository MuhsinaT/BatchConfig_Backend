const express = require("express");
const router = express.Router();
const FeeRule = require("../models/FeeRule");

// Add fee rule for a batch
router.post("/", async (req, res) => {
  try {
    const feeRule = new FeeRule(req.body);
    await feeRule.save();
    res.status(200).json(feeRule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all fee rules for a batch
// Get all fee rules
router.get("/", async (req, res) => {
  try {
    const rules = await FeeRule.find().populate("batchId"); // ← no filter
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Update a fee rule
router.patch("/:id", async (req, res) => {
  try {
    const updatedRule = await FeeRule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRule);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a fee rule
router.delete("/:id", async (req, res) => {
  try {
    await FeeRule.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
