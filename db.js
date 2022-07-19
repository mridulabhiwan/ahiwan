const mongoose = require("mongoose");
 mongoose.set('debug', true);

mongoose.connect("mongodb+srv://mridulverma:goldenfish@cluster0.9fac2.mongodb.net/?retryWrites=true&w=majority",{
    
    useNewUrlParser:true,

    useUnifiedTopology: true 

}).then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("no connection")
})