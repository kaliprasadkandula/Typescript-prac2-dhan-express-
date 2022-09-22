import express, { response } from 'express';
import bcrypt from 'bcryptjs';


const router:express.Router = express.Router();

router.get('/', (req:express.Request, res:express.Response) => {
    res.send('This is the list of users');

});


router.post('/register',async (req:express.Request, res:express.Response) => {
    let body = req.body;
    //body=JSON.parse(body);
    const salt =await bcrypt.genSalt(10) //see all the methods of bcrypt should be synchronized
    let encrypted_pwd = await bcrypt.hash(body.password,salt);//hashed password generated 
    res.send(`[${body.name} ${body.password}] \n hashed password is: ${encrypted_pwd}`);

});

router.put('/', (req:express.Request, res:express.Response) => {
    res.send(' This is put method');

});

router.delete('/', (req:express.Request, res:express.Response) => {
    res.send('This is delete method');

});
module.exports = router;