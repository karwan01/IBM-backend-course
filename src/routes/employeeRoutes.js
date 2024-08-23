const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployees);
router.post("/", employeeController.createEmployee);

module.exports = router;
