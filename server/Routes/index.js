const express = require("express")
const router = express.Router();
const ApplicationRoute = require("./ApplicationRoutes")
const intern = require("./internshipRoutes")
const job = require("./jobRoutes")

router.get("/",(req,res)=>{
    res.send("This is our backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);



module.exports=router;