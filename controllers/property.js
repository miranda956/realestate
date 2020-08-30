const express=require("express");
const db=require("../models");
const router = require("./upload");
const Owner=require("../controllers/owner");
// not figured out yet 

module.exports=(app)=>{
    app.get("/homes",(req,res,next)=>{
        db.Property.findAll({})
        .then((data)=>{
            res.render("homes",{
              homes:data
            })
        }).catch((err)=>{
            next(err);
        })
    });

    app.post("/property",Owner,(req,res,next)=>{
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
      }).then(()=>{
        // i will figure out 
        res.render("properties")

      }).catch((err)=>{
        next(err);
      })
    })
// updating property
app.patch("/",Owner,(req,res,next)=>{
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
        description:req.body.description,

  }).then(()=>{
    // i will figure out 
  res.redirect("properties")
  }).catch((err)=>{
    next(err)
  })
})

    app.get("/search/keyword",(req,res,next)=>{
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


}