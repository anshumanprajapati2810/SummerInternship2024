const express = require("express")
const router = express.Router();
const job = require('../Model/Jobs.js')
const jobdata = require('../Data/JobDataAvl.js')

// router.post("/", async(req,res)=>{
//     try{
//         const jobs =  jobdata;
//         const savedjobs = [];
//         for(const jobData of jobs){
//             const newjob = new job(jobData);
//             const savedjob = await  newjob.save();
//             savedjobs.push(savedjob);
//         }
//         res.send(savedjobs);
//     }
//     catch(error){
//         console.log("Error while posting data: ", error)
//         res.status(500).send("Internal server error")
//     }
// })
router.post("/",async (req,res)=>{
    const JobData=new job({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        Experience: req.body.experience,
        category: req.body.category,
        aboutCompany:req.body.aboutCompany,
        aboutInternship:req.body.aboutInternship,
        Whocanapply: req.body.Whocanapply,
        perks: req.body.perks,
        AdditionalInfo:req.body.AdditionalInfo,
        CTC: req.body.ctc,
        StartDate:req.body.StartDate,
    })
    await JobData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the data")
    })
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
router.delete("/",async(req,res)=>{

    try{
        const data = await job.findOneAndDelete();
        res.status(200).json(data);
        console.log("deleted job")
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    
    }
})

module.exports = router