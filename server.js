const express =require('express');
const cookieparser=require('cookie-parser');
const methodoverride =require('method-override');
const session=require('express-session');
const exphbs=require('express-handlebars');
const flash =require("connect-flash");
const bodyparser=require("body-parser");
const path =require("path");
const winston =require("winston");
const expresswinston =require("express-winston");
const db=require("./models");


const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.text());
app.use(bodyparser.json());
app.use(cookieparser());
app.use(session({
    secret:"q2455",
    resave:true,
    saveUninitialized:true
}));
app.use(methodoverride("_method"));
app.use(expresswinston.logger({
    transports:[
        new winston.transports.Console({
            json:true,
            colirize:true
        }),
        new winston.transports.File({
            filename:'logs/success.log'
        })
    ]
}))
app.use(expresswinston.errorLogger({
    transports:[
        new winston.transports.Console({
            json:true,
            colorize:true
        }),
        new winston.transports.File({
            filename:"logs/error.log"
        })
    ]
}));
app.engine('handlebars',exphbs({defaultLayout:"main"}));
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash("success_msg");
    res.locals.error_msg=req.flash("error_msg");
    res.locals.error=req.flash("error");
    res.locals.user=req.user||null;
    next();
})
app.set("view engine","handlebars");
app.use(express.static("public"));
db.sequelize.sync({force:false}).then(()=>{
   const port = process.env.PORT || 4500;
   app.listen(port, () => `Server running on port ${port} 🔥`); 
}).catch((err)=>{
    console.log(err)
});

