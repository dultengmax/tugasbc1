const express = require('express')
const app = express()
const port= 5000

app.get('/abdul',(req,res)=>{
    res.send("abdul gantengggg")
})

app.listen(port,()=>{
    console.log("app listening on port 5000");
})