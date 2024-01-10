const DepartmentModel= require("../models/Department")

const createDepartment = (req, res) => {
    const {name, schoolName, schoolEmail} = req.body
    DepartmentModel.create({
        name,
        schoolEmail,
        schoolName
    }).then(() => {
        res.status(201).send({message: `${name} is now a department at ${schoolName}`})
    })
}


module.exports = {createDepartment}