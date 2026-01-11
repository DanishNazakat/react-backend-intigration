const express=require("express");
const router=express.Router();
const {home}=require("../controllers/Auth");
const{login}=require("../controllers/Auth");
router.post("/",home);
router.post("/login",login);

module.exports=router;