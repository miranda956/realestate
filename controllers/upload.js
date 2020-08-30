const express=require("express");
const multer=require("multer");
const path =require("path");
const db =require("../models");
const router=express.Router();

router.use(express.static("public"));

const storage=multer.diskStorage({
    destination:"./public/images/uploads",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname));
    }
});
const upload= multer({
    storage:storage,
    limits:{filesize:3000000},
    fileFilter:(cb,file,req)=>{
        checkFileType(cb,file)
    }
}).single("pics");

function checkFileType(cb,file){
    const filetypes= /jpg|jpeg|png|gif/;
    const extname=filetypes.test(path.extname(file.originalname)).tolowercase();
    const memetype=filetypes.test(file.memetype)

    if(memetype && extname){
        return(null,true)
    } else{
        return("images only ")

    }
}
router.post("/images",upload,(req,res,next)=>{
})
module.exports=router;

 