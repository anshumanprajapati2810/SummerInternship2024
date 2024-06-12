const express = require("express")
const router = express.Router();
const Register = require("../Model/RegisterModel")

router.post("/", async (req,res)=>{
    const registerData = new Register({
        email:req.body.email,
        password:req.body.password,
        Fname: req.body.Fname,
        Lname: req.body.Lname
    })
    await registerData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log("Not able to register");
    })
})
module.exports  = router