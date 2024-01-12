const express = require("express")
const { createDepartment, getSchoolDepartment } = require("../controller/DepartmentController")

const DepartmentRouter = express.Router()

DepartmentRouter.post("/department", createDepartment)
DepartmentRouter.post("/get/department", getSchoolDepartment)

module.exports = DepartmentRouter