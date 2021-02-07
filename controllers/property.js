const express=require("express");
const db=require("../models");
const upload = require("./upload");
const Owner=require("../controllers/owner");
// not figured out yet 

function router(app){
  // -- creating new property

  app.post("/api/post/property",(req,res,next)=>{
    db.Property.create({
      address:"pobox4",
      of_type:"mansion",
      lot_size:"546",
      property_name:"rentals",
      build_year:"2019",
      postalcode:"50100",
      Rooms:"9",
      date:2020-09-09,
      price:"900",
      location:"kakamega",
      description:"cjksahgvmnmcnhasjh",
      image:"https://www.shutterstock.com/image-photo/riga-latvia-view-old-houese-st-1470631151"
      
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
          id:1
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
        address:"djshgvc",
        of_type:"djbhvw wi",
        lot_size:"333",
        property_name:"wdiuwvbz",
        build_year:"2020",
        postalcode:"94857",
        Rooms:"657",
        date:2020-09-09,
        price:"6000",
        location:"dskjhg",
        description:"aslkdhv.wqVH",
  },{
    where:{
      id:2

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

