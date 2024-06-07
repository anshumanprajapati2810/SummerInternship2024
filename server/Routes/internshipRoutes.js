const express = require("express")
const router = express.Router();
const internship = require('../Model/Internship.js')
const interndata = require('../Data/InternshipDatAvl.js')

router.post("/", async(req,res)=>{
    try{
        const internships =  interndata;
        const savedInternships = [];
        for(const internshipData of internships){
            const newInternship = new internship(internshipData);
            const savedInternship = await  newInternship.save();
            savedInternships.push(savedInternship);
        }
        res.send(savedInternships);
    }
    catch(error){
        console.log("Error while posting data: ", error)
        res.status(500).send("Internal server error")
    }
})
module.exports = router