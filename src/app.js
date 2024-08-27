require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
// const logger = require("./config/logger");

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use("*", bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Register routes with the /api/employees prefix
app.use("/api/employees", employeeRoutes);

// Default route for base URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  // logger.error(err.message);
  res.status(500).send("Server Error");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
