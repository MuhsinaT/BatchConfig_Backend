const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Routes
const batchRoutes = require("./routes/batchRoutes");
const feeRoutes = require("./routes/feeRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(" DB connection error:", err));

// API Routes
app.use("/api/batches", batchRoutes);
app.use("/api/fees", feeRoutes);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
