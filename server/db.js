const mongoose = require("mongoose")
require('dotenv').config();
DATABASEURL = process.env.DATABASEURL
const url = DATABASEURL
// console.log(url)
module.exports.connect = ()=>{
    mongoose.connect(url,console.log('Connection Established with database'));
}