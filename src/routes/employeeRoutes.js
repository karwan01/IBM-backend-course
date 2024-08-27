const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Define routes without the /api/employees prefix
router.get("/", employeeController.getEmployees);
router.post("/", employeeController.createEmployee);
router.delete("/", employeeController.deleteEmployee);

module.exports = router;
