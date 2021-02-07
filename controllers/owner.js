const express=require("express");
const db=require("../models");



function isloggedin(req,res,next){
    if(req.isAutheticated()){
        return next();
    }
    else {
        return res.redirect('/login')
    }
}
function router(app){
// owner regeters 
app.post("/api/create/owner",(req,res,next)=>{
    db.Owner.create({
        f_name:"rero",
        l_name:"peter",
        email:"peter@gmail.com",
        contact:"1234567890",
        gender:"male",
        city:"kwisero",
        pwd:"ijsd78378"
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err)
    })
})
// posting home feature 



app.patch('/api/owner/edit/:id',(req,res,next)=>{
    db.Owner.update({
        f_name:"lashly",
        l_name:"boby",
        email:"fero@gmail.com",
        contact:"0123456789",
        gender:"male",
        city:"kisumu"
      
        
    },{
        where:{
            id:2
        }
    }).then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        next(err)
    })
})
// change password 
app.patch('/api/change/password/owner/:id',(req,res,next)=>{
    db.Owner.update({
        pwd:"reet",
        
        
    },{
        where:{
            id:2
        }
    }).then((newpwd)=>{
        res.status(201).json(newpwd)

    }).catch((err)=>{
        next(err)
    })
})
// owner profile
app.get("/api/owner/profile/:id",(req,res,next)=>{
    db.Owner.findAll({
        attributes:['f_name','l_name','email','contact','gender'],
        where:{
            id:2
        }
    })
    .then((data)=>{
        res.status(202).json(data)
    }).catch((err)=>{
        next(err);
    })
})
// owners and their  his properties
app.get("/api/get/owner/property",(req,res,next)=>{
    db.Property.findAll({
        include:[db.Owner]
    }).then((properties)=>{
        res.status(201).json(properties)
    }).catch((err)=>{
        next(err);
    })
})

//-- owner and his properties
app.get("/api/get/properties/owner/:id",(req,res,next)=>{
    db.Property.findAll({
        include:[db.Owner],
        where:{
            id:3
        }
    }).then((data)=>{
        res.json(data)

    }).catch((err)=>{
        next(err);
    })
})
// can see all the leases he made on his properties 


app.delete("/api/property/delete/:id",(req,res,next)=>{
    db.Property.destroy({
        where:{
            OwnerId:2
        }
    }).then((destroyed)=>{
        res.status(201).json(destroyed)
    }).catch((err)=>{
        next(err);
    })
})
app.get("/logout",isloggedin,(req,res)=>{
    req.logout();
    res.redirect('/login');
});

// returning owners properties 

}
module.exports=router;
