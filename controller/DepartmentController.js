const DepartmentModel= require("../models/Department")

const createDepartment = (req, res) => {
    const {name, schoolName, schoolEmail} = req.body;

    try {
        DepartmentModel.find({name, schoolEmail}).then((result) => {
            if (result.length > 0) {
                res.status(409).send({ message: `${name} department exists in ${schoolName} school already.`, status: false })
            } else {
                DepartmentModel.create({
                    name,
                    schoolEmail,
                    schoolName
                }).then(() => {
                    res.status(201).send({message: `${name} is now a department at ${schoolName}`})
                }).catch((err) => {
                res.status(409).send({err})
                })
            }
        })
    } catch (error) {
        res.status(500).send({error, message: "Internal Server Error"})
    }
    
  
}

const getSchoolDepartment = (req, res) => {
    const {schoolEmail} = req.body;
    DepartmentModel.find({schoolEmail}).then((result) => {
        res.status(201).send({result})
    }).catch((err) => {
        res.status(401).send({err})
    })
}


module.exports = {createDepartment, getSchoolDepartment}