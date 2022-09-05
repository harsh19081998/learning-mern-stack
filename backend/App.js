require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

//connect to MongoDB
connectDB();

app.get("/",(req,res)=>{
    res.send("Basic start");
});

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB.');
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT} checkout: http://localhost:${PORT}`);
    });
});
