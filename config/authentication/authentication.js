
const passport=require('passport');
module.exports.isAuthenticated=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    else 
    res.redirect('/login')

}
module.exports.login=(req,res,next)=>{
passport.authenticate('local',{
    successRedirect:'',
    failureRedirect:'/signup'
})(req,res,next)

}
module.exports.logout=(req,res,next)=>{
    req.logout();
    req.flash("you are succesfully logged out");
    req.session.Destroy();
}