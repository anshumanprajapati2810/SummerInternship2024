const express = require("express")
const router = express.Router();
const ApplicationRoute = require("./ApplicationRoutes")
const intern = require("./internshipRoutes")
const job = require("./jobRoutes")
const admin = require("./admin")
const register = require("./registerRoute")

router.get("/",(req,res)=>{
    res.send("This is our backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);
router.use('/admin',admin)
router.use('/register',register)



module.exports=router;