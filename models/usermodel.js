const mongoose = require("mongoose");
const UserSchema=new mongoose.Schema({
    username:{
         type:String,
         unique:true,
         trim:true
          },
      email:{
          type:String,
          trim:true
      },
      password:{
          type:String
      },
    },{timestamps:true,versionKey: false })

    module.exports =mongoose.model("user",UserSchema);