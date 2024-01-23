
const express = require("express");
const { addSelectedCourse } = require("../controller/selectedCourseController");
const studentRouter = express.Router()

studentRouter.post("/selectedCourse", addSelectedCourse)

module.exports = studentRouter