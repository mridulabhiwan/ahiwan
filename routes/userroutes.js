const router=require("express").Router();
const controller = require("../controller/usercontroller");
const {validateSinginRequest, isRequestValidated} = require("../validator/uservalidation"); 

// api endpoints
router.post("/register",validateSinginRequest,isRequestValidated,controller.register);
router.put("/setuser",controller.setuser);
router.get("/getuser/:id",controller.getuser);
router.get("/getalluser",controller.getalluser);
router.get("/deleteuser/:id",controller.deleteuser);


module.exports=router; 