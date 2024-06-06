const mongoose = require ("mongoose")
const InternshipSchema = new mongoose.Schema({
    title :String,
    location:String,
    Duration:String,
    aboutCompany:String,
    aboutInternship:String,
    Whocanapply:String,
    perks: Array,
    AdditionalInfo:String,
    stipend:String,
    StartDate : String,
    company : String,
    category : String,
    createAt:{
        type : Date,
        default : Date.now,
    },
    
    
})
module.exports = mongoose.model("INternship", InternshipSchema)