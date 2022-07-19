const User = require("../models/usermodel");

//register user 
exports.register=async(req,res)=>{
    try{
        const data = await User(req.body);
        const result = await data.save();
        res.send({msg:"user registered",result})

    }catch(e){
        console.log(e);
        res.send(e)
    }
},

// set user or update user
exports.setuser=async(req,res)=>{
    try{
        const {username,email,password,id}=req.body;
      const data = await User.findOneAndUpdate({id:id},{$set:{username:username,email:email,password:password}},{new:true});
      res.send({msg:"user data updated",data});
    }catch(e){
        console.log(e);
        res.send(e);
    }
},

//find user by id
exports.getuser=async(req,res)=>{
    try{
      const id = req.params.id;
      const data = await User.findById({_id:id});
      res.send(data);
    }catch(e){
        console.log(e);
        res.send(e);
    }
},

//get all user
exports.getalluser=async(req,res)=>{
    try{
        const data = await User.find();
        res.send(data);

    }catch(e){
        res.send(e);
    }
},

//delete user
exports.deleteuser=async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await User.findByIdAndDelete({_id:id});
        res.send({msg:"user deleted"})

    }catch(e){
        console.log(e);
        res.send(e);
    }
}