const mongoose = require("mongoose");

const Department = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    courses: [], // You can specify the type if needed
    schoolName: {
        type: String
    },
    schoolEmail: {
        type: String
    },
    dateInstituted: {
        type: Date,
        default: Date.now
    }
});

const DepartmentModel = mongoose.models.department || mongoose.model("department", Department);

module.exports = DepartmentModel;
