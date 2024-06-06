const mongoose = require ("mongoose")
const JobSchema = new mongoose.Schema({
    title :String,
    location:String,
    Experience:String,
    aboutCompany:String,
    aboutJob:String,
    Whocanapply:String,
    perks: Array,
    AdditionalInfo:String,
    CTC:String,
    StartDate : String,
    company : String,
    category : String,
    createAt:{
        type : Date,
        default : Date.now,
    },
    
    
})
module.exports = mongoose.model("Job", JobSchema)