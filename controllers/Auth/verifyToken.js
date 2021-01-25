const AuthService = require("../../libs/Auth");

module.exports =async (req,res,next)=>{
    try{
        const accessToken = req.headers["authorization"].split(" ")[1];
        const result = await AuthService.verifyAccessToken(accessToken);
        req.body = {...req.body,...result}
        res.redirect(307,req.query["location"]);
    } catch (err){
        next(err);
    }
}