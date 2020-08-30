const express=require("express");
const db=require("../models");

const router=express.Router();

function isloggedin(req,res,next){
    if(req.isAutheticated()){
        return next();
    }
    else {
        return res.redirect('/login')
    }
}

// owner regeters 
router.post("/owner/signup",(req,res,next)=>{
    db.Owner.create({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        gender:req.body.gender,
        pwd:req.body.pwd
    }).then(()=>{
    
        res.redirect("/login")
    }).catch((err)=>{
        next(err)
    })
})
// posting home feature 

router.patch('/owner/edit/id:',isloggedin,(req,res,next)=>{
    var OwnerId=req.user.id
    db.Owner.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        gender:req.body.gender,
        pwd:req.body.pwd,
        where:{
            id:OwnerId

        }
    }).then((data)=>{
        res.redirect("/owner/profile")

    }).catch((err)=>{
        next(err)
    })
})
// return owner with his properties 

// owner profile

router.get("/owner",isloggedin,(req,res,next)=>{
    var OwnerId=req.user.id;
    db.Owner.findAll({
        where:{
            id:OwnerId

        }
    })
    .then((data)=>{
        res.render('profile',{profile:data})
    }).catch((err)=>{
        next(err);
    })
})
// owner can get all his properties
router.get("/owner/property",isloggedin,(req,res,next)=>{
    var OwnerId=req.user.id;
    db.Property.findAll({
        include:[{
            model:Owner,
            where:{
                id:OwnerId
            }
        }]
    }).then((properties)=>{
        res.render("properties",{
            properties:properties

        })
    }).catch((err)=>{
        next(err);
    })
})
// can see all the leases he made on his properties 
router.get("owner/report",isloggedin,(req,res,next)=>{
    var OwnerId=req.user.id
    db.Lease.findAll({
        include:[{
            model:Property
        }],
        include:[{
            model:Client
        }],
        include:[{
            model:Owner,
            where:{
                id:OwnerId
            }
        }]
    }).then((data)=>{
        res.render("ownerreport",{
            ownerreport:data

        })

    }).catch((err)=>{
        next(err)
    })
})
router.delete('/owner/delete/id:',isloggedin,(req,res,next)=>{
    var  OwnerId=req.user.id
    db.Owner.destroy({
        where:{
            id:OwnerId
        }
    }).then(()=>{
        res.redirect("/login")
    }).catch((err)=>{
        next(err)
    })
});
router.get("/logout",isloggedin,(req,res)=>{
    req.logout();
    res.redirect('/login');
});

// returning owners properties 

router.get("owner/properties")
 //owner deleting home  
 router.get("/property/delete/id:",isloggedin,(req,res,next)=>{
     db.Property.destroy({
         include:[{
             model:Owner,
             where:{
                 id:req.params.id
             }
         }]
     })
     
 })
module.exports=router;