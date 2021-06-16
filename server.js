const express = require("express");
const morgan  = require("morgan");

const app     = express();

app.use(morgan("tiny"));

app.get("/",async (res,req,next)=>{
    res.status(200).json({"ping":"pong"});
} )
const port    = 3000;

app.listen(port,()=>{
    console.log("Server listening at port "+ port);
});