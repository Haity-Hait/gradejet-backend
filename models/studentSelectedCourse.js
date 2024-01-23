const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");

const selectedCourse = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    schoolEmail: {
        type: String,
        required: true,
    },
    selectedCourses: [

    ]
})

const selectedCourseModel = mongoose.models.selectedCourses || mongoose.model("selectedCourses", selectedCourse)

module.exports = selectedCourseModel