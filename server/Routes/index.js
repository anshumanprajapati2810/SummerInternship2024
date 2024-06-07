const express = require("express")
const router = express.Router();
const ApplicationRoute = require("./ApplicationRoutes")

router.get("/",(req,res)=>{
    res.send("This is our backend")
})
router.use('/application',ApplicationRoute);



module.exports=router;