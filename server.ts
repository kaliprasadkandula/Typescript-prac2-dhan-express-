import express from 'express';
//const express = require('express'); //[require express is not working ]
const router = require('./routes/User.ts')
const app:express.Application= express();
const {logger}= require('./logger/app_logger');
app.use(logger);
app.use(express.json());
var comapny:string = 'Dhan AI'
const port:number = 3000;
app.use(express.json());
app.use('/users',router)
app.get('/', (req, res) => {
    res.send(`Welcome to our ${comapny}`);
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

