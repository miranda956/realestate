 // considered done 
const db=require("../models");
const express=require("express");


function isloggedin(req,res,next){
if(req.isAuthenticated()){
    return next();
}
else{
    res.redirect('/login')
}

}

function router(app){

    app.get("/api/staff/getall",(req,res,next)=>{{
        db.Admin.findAll({
            attributes:["f_name","l_name","email","contact"]
        }).then((staff)=>{
          res.json(staff)
        }).catch((err)=>{
          console.error(err)
        })
    }})
// admin -signup
app.post("/api/admin/create",(req,res,next)=>{
    db.Admin.create({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        pwd:req.body.pwd
    })
    .then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        next(err)
    })
})
// admin profile
app.get("/api/get/admin/:id",(req,res,next)=>{;
    db.Admin.findAll({
        attributes:["f_name","l_name","email"],
        where:{
            id:1
        }
    }).then((profile)=>{
        res.status(201).json(profile)
    }).catch((err)=>{
        next(err);
    })
})
// admin edit account
app.patch('/api/admin/edit/:id',(req,res,next)=>{
    
    db.Admin.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact
 
    },{
        where:{
            id:req.user.id 
        }
    })
    .then((profileupdate)=>{
        res.status(201).json(profileupdate)
    })
    .catch((err)=>{
        next(err)
    })
})
app.get("/get/clients",(req,res,next)=>{
    db.Client.findAll({
        attributes:["f_name","l_name","email","gender","contact","city"]
    })
    .then((result)=>{
        // res.status(201).json(result)
        res.json(result)
    }).catch((err)=>{
        next(err);
    })
});
// admin can delete account

// admin managing sytem components 
// client view for admin 
app.get("/api/get/clients",(req,res,next)=>{
    db.Client.findAll({
        attributes:["f_name","l_name","email","gender","contact","city"]
    })
    .then((result)=>{
        // res.status(201).json(result)
        
        res.render('client', {result, layout: 'main'});
    }).catch((err)=>{
        next(err);
    })
});
// clients and leased property of the client 
app.get("/api/leasedclients",(req,res,next)=>{
    db.Client.findAll({
        include:[db.Property]
        
    }).then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        next(err)
    })
})
// client & leased items 
app.get("/api/get/leasedproperty/client/:id",(req,res,next)=>{
    db.Client.findAll({
        include:[db.Property],
        where:{
            id:2
        }
    }).then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        next(err);
    })
})
// owner view for admin 
app.get("/api/get/owner",(req,res,next) => {
    db.Owner.findAll({
        attributes:["f_name","l_name","email","gender","contact","city"]
    })
    .then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err);
    }) 
});

//  specific owner by their property
app.get("/api/owner/properties/:id",(req,res,next)=>{
    db.Property.findAll({
        include:[db.Owner]
    },
    {
        where:{
            OwnerId:4
        }
    }
    ).then((data)=>{
        res.status(201).json(data)
    }).catch((err)=>{
        next(err)
    })
})
 
// owners by their leased  properties
app.get("/api/owners/leasedproperty",(req,res,next)=>{
    db.Property.findAll({
        include:[db.Client]
    
    }).then((data)=>{
        res.status(201).json(data)
        }).catch((err)=>{
            next(err)
        })
    })
    



// owner and the leased properties 
// -- Single owner and the leased property 
app.get("/api/owner/leasedproperty/:id",(req,res,next)=>{
    db.Property.findAll({
        include:[db.Client],
        where:{
         OwnerId:4
        }
    
    }).then((data)=>{
        res.status(201).json(data)
        }).catch((err)=>{
            next(err)
        })
    })
    

// property view for admin

    
  app.get("/logout",isloggedin,(req,res,next)=>{
      req.logout();
      res.redirect("/login");
  })
  /* search features */
app.get("/api/property/filter",isloggedin,(req,res,next)=>{
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
        res.status(201).json(searchresult)

    }).catch((err)=>{
        next(err);
    })
      
  })
}
module.exports=router;
