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
app.use(express.static("public"));
require("./controllers/admin")(app);
require("./controllers/client")(app)
require("./controllers/owner")(app)
require("./controllers/property")(app)
app.engine('handlebars',exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
db.sequelize.sync({force:false}).then(()=>{
   const port = process.env.PORT || 4500;
   app.listen(port,()=> 
    console.log(`Server running on port ${port} 🔥`)); 
}).catch((err)=>{
    console.log(err)
});

    