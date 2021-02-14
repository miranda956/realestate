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
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        gender:req.body.gender,
        city:req.body.city,
        pwd:req.body.pwd
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err)
    })
})
// posting home feature 



app.patch('/api/owner/edit/:id',(req,res,next)=>{
    db.Owner.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        gender:req.body.gender,
        city:req.body.city
      
        
    },{
        where:{
            id:req.user.id
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
        pwd:req.body.pwd
        
        
    },{
        where:{
            id:req.user.id
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
            id:req.user.id
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
            id:req.user.id
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
            OwnerId:req.user.id
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
