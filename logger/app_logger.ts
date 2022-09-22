import express from 'express';

let logger = (req:express.Request, res:express.Response,next:express.NextFunction) => {
    let url:string = req.url
    let method:string = req.method
    let time:string = new Date().toLocaleTimeString() //
    let date:string = new Date().toLocaleDateString() 
    console.log(`[${method}] [${url}] [${time}] [${date}]`)
    next() //looper method 
}
module.exports ={logger}