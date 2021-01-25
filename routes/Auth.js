const express = require('express');
const router = express.Router();
const loginController = require('../controllers/Auth/Login');
const refreshController = require('../controllers/Auth/RefreshTokens');
const registerController = require('../controllers/Auth/Register');
const verify = require('../controllers/Auth/verifyToken');
const authMiddleware = require('../middlewares/Auth');


router.post('/login', loginController);

router.post('/register',registerController);

router.post('/refresh',refreshController);

router.post('/verify',verify);

router.post('/',(req,res)=>{console.log({...req.body})
    res.json({message:"OK"});
})

module.exports = router;
