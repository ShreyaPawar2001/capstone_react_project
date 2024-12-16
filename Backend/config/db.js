const mongoose = require('mongoose');
// require('dotenv').config(); 
// MongoDB connection URI from .env file


require("dotenv").config();
const dbConnect=()=>
    {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('connected to DB')) 
    .catch((err)=>{
        console.log("Issue Generated")
    })
}

module.exports=dbConnect;


