const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnections');
const dotenv = require('dotenv').config();
const validateToken = require('./middleware/validateTokenHandler');
 

connectDb();
const app=express();

const port = process.env.PORT;
app.use(express.json())
// Middleware to validate token
app.use(validateToken);
app.use("/api/contacts",require("./Routes/contactRoutes"))
app.use("/api/users",require("./Routes/userRoutes"))
app.use(errorHandler)

app.get('/home',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
