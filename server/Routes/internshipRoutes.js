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

router.get("/",async(req,res)=>{

    try{
        const data = await internship.find();
        res.status(201).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    
    }
})
router.delete("/",async(req,res)=>{

    try{
        const data = await internship.findOneAndDelete();
        res.status(201).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"})
    
    }
})

router.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const data = await internship.findById(id);
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