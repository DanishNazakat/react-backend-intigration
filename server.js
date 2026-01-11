let express = require('express');
const cors = require('cors');
let path = require('path')
let app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
let PORT=3000;
const roter=require("./Router/route");
let mongoose = require('mongoose')

mongoose.connect("mongodb+srv://danishnazakat:ONiYN5yCLwlGYgDZ@cluster0.rpvrbpd.mongodb.net/?appName=Cluster0",
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




