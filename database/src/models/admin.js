const mongoose = require("mongoose");


const adminSchema = mongoose.Schema(
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

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;