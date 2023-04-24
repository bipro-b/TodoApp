const express =require("express")
const cors = require("cors");
const app = express();


// 
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello Developer.")
})


const registerRoute = require("./routes/user");
const { register } = require("./controllers/user");


app.use("/api/v1/user",registerRoute);



module.exports = app;
