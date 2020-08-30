 // considered done 
const db=require("../models");
const express=require("express");
const router=express.Router();

function isloggedin(req,res,next){
if(req.isAuthenticated()){
    return next();
}
else{
    res.redirect('/login')
}

}
// admin -signup
router.post("admin/signup",(req,res,next)=>{
    db.Admin.create({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        pwd:req.body.pwd
    })
    .then((data)=>{
        res.redirect('/admin/panel')
    }).catch((err)=>{
        next(err)
    })
})
// admin profile
router.get("profile",isloggedin,(req,res,next)=>{;
    var AdminId=req.user.id;
    db.Admin.findAll({
        where:{
            id:AdminId
        }
    }).then((profile)=>{
        res.render("profile",{
            profile:profile
        })

    }).catch((err)=>{
        next(err);
    })
})
// admin edit account
router.patch('/admin/edit/:id',isloggedin,(req,res,next)=>{
    var AdminId=req.params.id;
    db.Admin.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        pwd:req.body.pwd, 
    },{
        where:{
            id:AdminId
        }
    }
    )
    .then((data)=>{
        res.redirect('/admin/panel')
    })
    .catch((err)=>{
        next(err)
    })
})
// admin can delete account
router.delete("/admin/delete/:id",isloggedin,(req,res,next)=>{
    db.Admin.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.redirect("/login")
    }).catch((err)=>{
        next(err)
    })
})
// admin managing sytem components 
// client view for admin 
router.get("/clients",isloggedin,(req,res,next)=>{
    db.Client.findAll({})
    .then((result)=>{
        res.render('clients',{Clients:result})
    }).catch((err)=>{
        next(err);
    })
});

// client search 
router.get("/", isloggedin,(req,res,next) => {
    db.Client.findAll({
        where:{
            $or:{
                f_name:{
                    $like:"%"+req.params.keyword+"%"
                },
                l_name:{
                    $like:"%"+req.params.keyword+"%"
                },
                email:{
                    $like:"%"+req.params.keyword+"%"
                },
                contact:{
                    $like:"%"+req.params.keyword+"%"
                },
                gender:{
                    $like:"%"+req.params.keyword+"%"
                },
                city:{
                    $like:"%"+req.params.keyword+"%"
                },
                
            }
        }
    }).then((result)=>{
        res.render("clientsearch",{
            clientsearch:result
        })
    }).catch((err)=>{
        next(err);
    })
  
});


// clients and leased property of the client 
router.get("/leasedclients",isloggedin,(req,res,next)=>{
    db.Lease.findAll({
        include:[{
            model:Property
        }],
        include:[{
            model:Client
        }]
    }).then((data)=>{
        res.render("leasedclients",{
            leasedclients:data
        })
    }).catch((err)=>{
        next(err)
    })
})
// client & leased items 
router.get("leasedto",isloggedin,(req,res,next)=>{
    db.Lease.findAll({
        include:{
            model:Property,
            include:[{
                model:Client,
                where:{
                    id:req.params.id
                }
                
            }]
        }
    }).then((data)=>{
        res.render("leasedto",{
            leasedto:data
        })

    }).catch((err)=>{
        next(err);
    })
})


// owner view for admin 
router.get("/owner", isloggedin,(req,res,next) => {
    db.Owner.findAll({})
    .then((result)=>{
        res.render("owner",{
            owner:result
        })
    }).catch((err)=>{
        next(err);
    }) 
});
// owner filter by the admin
router.get("ownerfilter",isloggedin,(req,res,next)=>{
    db.Owner.findAll({
        where:{
            $or:{
                f_name: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  l_name: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  email: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  contact: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  gender: {
                    $like: "%" + req.params.keyword + "%"
                  },

            }
        }
    }).then((result)=>{
        res.render("ownerfilter",{
            ownerfilter:result 
        })
    }).catch((err)=>{
        next(err)
    })
})

//  specific owner by their property

router.get("owner/properties/id:",isloggedin,(req,res,next)=>{
    db.Property.findAll({
        include:[{
            model:Owner,
            where:{
                id:req.params.id
            }
            
        }]
    }).then((data)=>{
        res.render("ownerproperty",{
            ownerproperty:data
        })
    }).catch((err)=>{
        next(err)
    })

})
 
// owners by their properties

router.get("/owner/property",isloggedin,(req,res,next)=>{
    db.Property.findAll({
        include:[{
            model:Owner
        }]
    }).then((data)=>{
        res.render("ownersdata",{
            ownersdata:data
        })
    }).catch((err)=>{
        next(err)
    })
})
// owner and the leased properties 
router.get("leased",isloggedin,(req,res,next)=>{
    db.Lease.findAll({
        include:[{
            model:Owner,
            where:{
                id:req.params.id
            }
        }]
    }).then((data)=>{
        res.render("leased",{
            leased:data

        })
        
    }).catch((err)=>{
        next(err);
    })

})
// all leased properties and their owners 
router.get("leasedproperty",isloggedin,(req,res,next)=>{
    db.Lease.findAll({
        include:[{
            model:Property
        }],
        include:[{
            model:Owner
        }]
    }).then((data)=>{
        res.render("leasedproperty",{
            leasedproperty:data
        })
    }).catch((err)=>{
        next(err)
    })
})

// property view for admin
 router.get("/property",isloggedin,(req,res,next)=>{
     db.Property.findAll({})
     .then((result)=>{
         res.render("property",{
             Property:result
         })
     }).catch((err)=>{
         next(err)
     })
 });
 
    
  router.get("/logout",isloggedin,(req,res,next)=>{
      req.logout();
      res.redirect("/login");
  })
  /* search features */
  router.get("property/filter",isloggedin,(req,res,next)=>{
    db.Property.findAll({
        where:{
            $or:{
                address: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  of_type:{
                      $like:"%"+req.params.keyword +"%"
                  },
                  lot_size: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  property_name: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  location: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  price: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  build_year: {
                    $like: "%" + req.params.keyword + "%"
                  },
                  Rooms: {
                    $like: "%" + req.params.keyword + "%"
                  }
            }
        }
    }).then((searchresult)=>{
        res.render("properties",{
            properties:searchresult

        })

    }).catch((err)=>{
        next(err);
    })
      
  })
 
module.exports=router;
