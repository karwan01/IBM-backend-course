const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const logger = require("./config/logger");
const bodyParser = require("body-parser");

const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send("Server Error");
});

module.exports = app;
