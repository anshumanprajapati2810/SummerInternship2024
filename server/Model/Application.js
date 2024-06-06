const mongoose = require ("mongoose")
const applicationSchema = new mongoose.Schema({
    company : String,
    category : String,
    createAt:{
        type : Date,
        default : Date.now,
    },
    Application : Object,
    user : Object,
    status : {
        type : String,
        enum : ["pending", "successful", "rejected"],
        default : "pending"
    }
})
module.exports = mongoose.model("Application", applicationSchema)