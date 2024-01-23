const selectedCourseModel = require("../models/studentSelectedCourse")



const addSelectedCourse = (req, res) => {
    const data = req.body
    selectedCourseModel.create({
        name: data.name,
        email: data.email,
        schoolEmail: data.schoolEmail,
        selectedCourses: data.array
    }).then((result) => {
        res.status(201).send("Saved Successfully")
    }).catch((err) => {
        res.status(401).send("Saved Successfully")
    })
}

module.exports = {addSelectedCourse}