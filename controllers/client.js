const express=require("express");



const db=require("../models");
function router(app){
app.post("/api/create/client",(req,res,next)=>{
    db.Client.create({
        f_name:req.body.f_name,
        l_name:req.user.l_name,
        email:req.user.email,
        gender:req.body.gender,
        contact:req.body.contact,
        city:req.body.city,
        pwd:req.body.pwd
    }).then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        next(err);
    })
});
app.get('/api/get/client/:id',(req,res,next)=>{
    db.Client.findAll({
        attributes:["f_name","l_name","email","gender","contact","city",],
        where:{
            id:req.user.id
        }
    }).then((info)=>{
        res.status(201).json(info);
    }).catch((err)=>{
        next(err);
    })
});
// client & leased items 
app.get("/api/client/leases/:id",(req,res,next)=>{
    db.Lease.findAll({
        include:[{
            // @ts-ignore
            model:Property
        }],
        // @ts-ignore
        include:[{
            // @ts-ignore
            model:Client,
            where:{
                id:req.user.id
            }
        }]
    }).then((info)=>{
        res.status(201).json(info);
    }).catch((err)=>{
        next(err)
    })
})

// todo
// todo book feature  $ payments 

app.get('/api/book/property',(req,res,next)=>{
    db.Property.findAll({
        // not yet done 
        attributes:["property_name","Room","price"],
        where:{
            id:req.params.id

        }
    }).then((data1)=>{
      db.Client.findAll({
          attributes:["f_name","l_name","email","email","contact"],
          where:{
              id:req.user.id
          }
      }).then((data2)=>{
          const date=Date.now();
          db.Rent.create({
              Property_name:data1.dataValues.Property_name,
              Room:data1.dataValues.Room,
              price:data1.dataValues.price,
              f_name:data2.dataValues.f_name,
              l_name:data2.dataValues.l_name,
              email:data2.dataValues.email,
              contact:data2.dataValues.email
          }).then((data3)=>{
              res.redirect("api/charges")
              }).then((booked)=>{
                  db.Property.update({
                      istaken:true
                }).then((ispaid)=>{
                    db.Rent.update({
                        ispaid:true,
                        rentedat_Date:date
                    }).catch((err)=>{
                        next(err)
                    })
                }) 
              }).catch((err)=>{
                  next(err)
              })
          }).catch((err)=>{
              next(err)
          })
      }).catch((err)=>{
          next(err)
      })
    })
    




app.patch('/api/client/update/:id',(req,res,next)=>{
    db.Client.update({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        gender:req.body.gender,
        contact:req.body.contact,
        city:req.body.city
    },{
        where:{
            id:req.user.id
        }
    }).then((result)=>{
        res.status(201).json(result)
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
app.get("logout",isloggedin,(req,res,next)=>{
    req.logout();
    res.redirect('/login')
    
}) 
}
module.exports=router;
