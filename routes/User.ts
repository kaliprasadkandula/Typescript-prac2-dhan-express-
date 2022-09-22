import express, { response } from 'express';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator';
const router:express.Router = express.Router();

router.get('/', (req:express.Request, res:express.Response) => {
    res.send('This is the list of users');

});


router.post('/register',[
    body('email').isEmail().withMessage('Proper email is required'),
    body('password').isLength({min:5}).withMessage('Proper password of length of 5 is required'),
    body('name').not().isEmpty().withMessage('name  is required'),
],async (req:express.Request, res:express.Response) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()}) //if errors present, return them 
    }
    let body = req.body;
    
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