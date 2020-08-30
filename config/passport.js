const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const db=require('../models');
const user = require("../models/user");
module.exports=(passport)=>{

passport.LocalStrategy(new LocalStrategy({
        usernameField:"email",
        passwordField:'pwd',
        passReqToCallback:true
    },
        (email,pwd,done)=>{
            db.User.findOne({
                where:{
                    email:email
                }
            }).then((dbUser)=>{
                if(!dbUser){
                    return done(null,false,{
                        message:'invalid email'
                    })
                } else if(!dbUser.validpassword(pwd)){
                    return done(null,false,{
                        message:"invalid password"
                    })
                }
                return done(null,dbUser);
            })

        }
    ));
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    });
    passport.desirializeUser((id,done)=>{
        user.findByid(id,(err,user)=>{
            done(err,user)
        });
    });
}
