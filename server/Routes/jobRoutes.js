const express = require("express")
const router = express.Router();
const job = require('../Model/Jobs.js')
const jobdata = require('../Data/JobDataAvl.js')

router.post("/", async(req,res)=>{
    try{
        const jobs =  jobdata;
        const savedjobs = [];
        for(const jobData of jobs){
            const newjob = new job(jobData);
            const savedjob = await  newjob.save();
            savedjobs.push(savedjob);
        }
        res.send(savedjobs);
    }
    catch(error){
        console.log("Error while posting data: ", error)
        res.status(500).send("Internal server error")
    }
})
module.exports = router