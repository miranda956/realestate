const express=require("express");
const router=express.Router();

const db=require("../models");

router.post("/regester",(req,res,next)=>{
    db.Client.create({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        gender:req.body.gender,
        contact:req.body.contact,
        city:req.body.city
    }).then((result)=>{
        res.redirect('/login');

    }).catch((err)=>{
        next(err);
    })
});
router.get('/profile',isloggedin,(req,res,next)=>{
    var clientId=req.params.id;
    db.Client.findAll({
        where:{
            id:clientId
        }
    }).then((info)=>{
        res.render("info",{
            info:info
        })
    }).catch((err)=>{
        next(err);
    })
});
// client & leased items 
router.get("/client/leases",isloggedin,(req,res,next)=>{
    clientId=req.user.id;
    db.Lease.findAll({
        include:[{
            model:Property
        }],
        include:[{
            model:Client,
            where:{
                id:clientId
            }
        }]
    }).then((info)=>{
        res.render("leases",{
            leases:info

        })

    }).catch((err)=>{
        next(err)
    })
})

// todo
// todo book feature  $ payments 

router.patch('/client/update',isloggedin,(req,res,next)=>{
    var clientId= req.user.id;
    db.Client.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        gender:req.body.gender,
        contact:req.body.contact,
        city:req.body.city,
    },{
        where:{
            id:clientId
        }
    }).then((result)=>{
        res.json(result);
        res.redirect("/homes")
        
    }).catch((err)=>{
        next(err);
    })

});

router.delete("/client/delete/id:",isloggedin,(req,res,next)=>{
    var clientId=req.user.id
db.Client.destroy({
    where:{
        id:clientId

    }

}).then(()=>{
    res.redirect('/login')
}).catch((err)=>{
    next(err);
})
});
function isloggedin(req,res,next){
    if(req.isAuthenticated()){
        return next()

    }
    res.redirect('/login')
}

router.get("logout",isloggedin,(req,res,next)=>{
    req.logout();
    res.redirect('/login')
    
}) 

module.exports=router;