const bodyParser = require("body-parser")
const express  = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000
const cors = require("cors")
const {connect} = require('./db.js')
const router = require("./Routes/index.js")

app.use(cors())
app.use(bodyParser.json({limit : "50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))
app.use(express.json())
connect();
app.use((req,res,next)=>{
    req.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "*")
    next();
})
app.use("/api",router)

app.get('/', (req,res)=>{
    res.send("Hello this is my backend")
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})