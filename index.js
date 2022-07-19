const express = require("express")
const app = express();
var bodyParser = require('body-parser');
require("./db")

const port = process.env.PORT || 9000;

app.use(express.json());
const userroutes = require("./routes/userroutes");
app.use(userroutes);


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});