const express = require("express");
const router = express.Router();
const Batch = require("../models/Batch");

// Create new batch
router.post("/", async (req, res) => {
  try {
    const batch = new Batch(req.body);
    await batch.save();
    res.status(200).json(batch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all batches
router.get("/", async (req, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
