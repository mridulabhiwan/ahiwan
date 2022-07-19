const {check,validationResult}=require("express-validator");


exports.validateSinginRequest=[
    check("password")
    .isLength({min:6})
    .withMessage({message:"at least 6 character is required"}),
    check('email')
    .notEmpty()
    .withMessage({msg:"email is required"}),
    check("username")
    .notEmpty()
    .withMessage({msg:"username is required"}),
];

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors && errors.errors.length>0){
        return  res.status(200).json(errors.errors[0].msg);

        
    }
    next();
   }