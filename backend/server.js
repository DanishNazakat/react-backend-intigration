let express = require('express');
const cors = require('cors');
let path = require('path')
let app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
let PORT=3000;
const roter=require("./Router/route");
let mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MongoDBSecretkey,
    {

})

.then(()=>{
    console.log("Connected to MongoDB");
})   
.catch((err)=>{
    console.log("Error connectiong to mongoDB",err)
})

app.use("/api",roter);




app.listen(PORT,()=>{
    console.log("server is running")
})




