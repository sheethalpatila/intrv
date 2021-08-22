
const mongoose = require("mongoose")

const catRoutes = require("./routes/category");

const prodctRoutes = require("./routes/product");

const cors = require("cors");

const express = require ("express");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect( "mongodb://localhost:27017/task", 
    {
        useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
    }).then (() => {
        console.log ("DB CONNECTED")
    }).catch ("DB is having problem ");



    app.use ("/api" , catRoutes);

    app.use ("/api" , prodctRoutes);


    const port =  2000;
    app.listen (port , () => {
        console.log("app is running "+ port);
    });