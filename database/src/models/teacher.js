const mongoose = require("mongoose");


const teacherSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },  
        city: {
            type: String,
            required: true
        }
    }
);

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;