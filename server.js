const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());  


const studentRouter = require('./routes/student');
app.use("/api/students",studentRouter);

mongoose.connect("mongodb+srv://QaziAhmad:qazi03331602121ahmad@cluster0.82zpao1.mongodb.net/electrical").then(function(result) {  // mongoose odm k through hm mongodb k saath connection kar lete he
    console.log("Database connected");
}).catch(function(err) {
    console.log(err);
});

const port = 4000;
app.listen(port,()=>{
    console.log(`Server is running on: ${port}`);
})