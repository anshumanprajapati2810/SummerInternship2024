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
router.get("/",async(req,res)=>{

    try{
        // console.log("fetching job")
        const data = await job.find();
        // console.log("fetching job")
        res.status(201).json(data);
        // console.log("jobs fetched")
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    
    }
})

router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const data = await job.findById(id);
        if(!data){
            res.status(404).json({error : "No such application found"})
        }
        else{
            res.json(data).status(200);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})

    }
})

module.exports = router