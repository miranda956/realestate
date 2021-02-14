const express=require("express");
const db=require("../models");
const upload = require("./upload");
const Owner=require("../controllers/owner");
// not figured out yet 

function router(app){
  // -- creating new property

  app.post("/api/post/property",(req,res,next)=>{
    db.Property.create({
      address:req.body.address,
      of_type:req.body.of_type,
      lot_size:req.body.lot_size,
      property_name:req.body.property_name,
      build_year:req.body.build_year,
      postalcode:req.body.postalcode,
      Rooms:req.body.Rooms,
      date:req.body.date,
      price:req.body.price,
      location:req.body.location,
      description:req.body.description,
      image:req.body.image
      
    }).then((property)=>{
      res.status(201).json(property)
    }).catch((err)=>{
      next(err);
    })
  })
  // get all unrented homes 
    app.get("/api/get/properties",(req,res,next)=>{
        db.Property.findAll({
          
        })
        .then((data)=>{
            res.status(202).json(data)
        }).catch((err)=>{
            next(err);
        })
    });
    // view property --  by id
    app.get('/api/get/property/:id',(req,res,next)=>{
      db.Property.findAll({
        where:{
          id:req.param.id
        }
      }).then((home)=>{
        res.status(202).json(home)
      }).catch((err)=>{
        next(err)
      })
    })
    // creating a resource  

// patching a resource 
app.patch("/api/update/property/:id",(req,res,next)=>{
  db.Property.update({
        address:req.body.address,
        of_type:req.body.of_type,
        lot_size:req.body.lot_size,
        property_name:req.body.property_name,
        build_year:req.body.build_year,
        postalcode:req.body.postalcode,
        Rooms:req.body.Rooms,
        date:req.body.date,
        price:req.body.price,
        location:req.body.location,
        description:req.body.description
  },{
    where:{
      id:req.param.id

    }
  }).then((property)=>{
  res.status(201).json(property)
  }).catch((err)=>{
    next(err)
  })
})
// searching a resource 
    app.get("api/search/keyword",(req,res,next)=>{
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
        }).then((results)=>{
            res.render("search",{
                search:results
            })
        }).catch((err)=>{
            next(err);
        })
    })
    // deleting a resource

    
    
}
module.exports=router;

