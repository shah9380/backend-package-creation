// Author: Easwaran Potti K
const express = require('express')
const app = express()
const port = 3000

app.use((req,res, next)=>{
    let currentTime = Date.now()
    let currentDataAndTIme = new Date().toLocaleString("en-Us", {timeZone: 'Asia/Kolkata'})
    next()
    let timeToProcess = Date.now() - currentTime;
    console.log("\nMethod type: ",req.method, "\nRequested URL: ", req.url, "\nCurrent Date & Time: ",currentDataAndTIme, "\nTime taken to process request: "+timeToProcess+" ms")
    
})
app.get('*',(req,res) =>{
    res.send('This is a sample API to study middleware')
});

app.listen(port,()=>{
    console.log('Day 6 Classwork:- Logging Middleware')
})