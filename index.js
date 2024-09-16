require('dotenv').config()
const express = require('express');
const mongodb = require('mongodb')

const connectToMongoDB  =require('./connect');
const urlRoute=require('./router/url');
const URL = require("./models/url");
const { config } = require('dotenv');
const app = express();
const port=8000;

connectToMongoDB(process.env.DATABASE_URL).then(()=>console.log("database connection established"));

app.use(express.json());
app.use("/url", urlRoute);

app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitedHistory:{
                    timestamp:Date.now()
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
})

app.listen(port,()=>{
    console.log('listening on port'+port); 
})