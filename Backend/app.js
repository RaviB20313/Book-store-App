const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes/books-routes");
const cors = require("cors");


const app= express();


//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose.connect("mongodb+srv://b20313:spd16ReZRaOEXabM@cluster0.pu1kjtc.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to database");
})
.then(()=>{
    app.listen(5000);
}).catch((err)=>{
    console.log(err);
});

//spd16ReZRaOEXabM
