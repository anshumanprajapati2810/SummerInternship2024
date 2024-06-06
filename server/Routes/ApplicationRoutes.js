const express = require("express")
const router = express.Router();
const application = require('../Model/Application.js')

router.post("/", async(req,res)=>{
    const applicationData = new application({
        coverLetter: req.body.coverLetter,
        user : req.body.user,
        company: req.body.company,
        category: req.body.category,
        body : req.body.body,
        ApplicationId : req.body.ApplicationId
    })
    await applicationData.save().then((data)=>{
        res.status(200).send(data)
        // console.log(res.status())
    }).catch((error)=>{
        console.log(error, "error posting the data")
    })
})

module.exports = router