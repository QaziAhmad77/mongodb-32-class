const express = require('express');
const app = express();

app.use(express.json());  // request ka apna ak formate hota he jisko hm json se convert karte he


const userRouter = require('./routes/user');
app.use("/api/users",userRouter);

const connection = require('./models');
connection();

const port = 4000;
app.listen(port,()=>{
    console.log(`Server is running on: ${port}`);
})
// MVC

// models folder me hm database k model rakte he ye database k saath communication karta he. ye database k files hote he
// Mongodb schemaless he mtlb isme wo hame force nahe karta k hame ho data store karna he osme ye ye fields honge
// ou ye zyada data store karne k liye use hota he or isme data in the form of file store hota he json k form he or 
// isme koi relation nahe hoti.