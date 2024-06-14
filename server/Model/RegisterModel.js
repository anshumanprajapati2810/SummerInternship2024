const mongoose = require("mongoose")
const RegisterSchema = new mongoose.Schema({
    email : String,
    password : String,
    Fname : String,
    Lname : String
})
module.exports = mongoose.model("Register" , RegisterSchema)