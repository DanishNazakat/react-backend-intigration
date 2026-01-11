const mongoose=require("mongoose");

const UserData=new mongoose.Schema({
    Fname:{
       type:String,
       required:true 
    },
    Lname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


let User=mongoose.model("userSignupData",UserData);
module.exports=User;