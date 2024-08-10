const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/first",async(req,res)=>{
    res.status(200).send("First Render Hosting");
});

app.listen(8000, ()=>{
    console.log("server started at http://127.0.0.1:8000");
})