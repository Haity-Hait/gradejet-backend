const express = require("express")
const { createDepartment } = require("../controller/DepartmentController")

const DepartmentRouter = express.Router()

DepartmentRouter.post("/department", createDepartment)

module.exports = DepartmentRouter