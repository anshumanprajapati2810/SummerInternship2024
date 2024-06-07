const express = require("express")
const router = express.Router()
const adminUsername = 'admin'
const adminPassword = 'admin'

//for admin login

router.post("/adminlogin",(req,res)=>{
    const {username, password} = req.body;
    if(username === adminUsername && password === adminPassword){
        res.send("Admin is here")
    }
    else{
        res.status(401).send("Unauthorised")
    }
})
module.exports = router;