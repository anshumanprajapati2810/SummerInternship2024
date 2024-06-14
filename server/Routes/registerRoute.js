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
router.get("/", async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await Register.findOne({email,password});
        if(user){
            res.status(200).send(user);
        }
        else{
            res.status(401).send("Invalid email or password")
        }
    }catch(error){
        console.log("Error during login", error)
        res.status(500).send("Internal server error");
    }
})
module.exports  = router