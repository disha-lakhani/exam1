const express=require('express');
const dbconnect = require('./config/db');
const userRouter = require('./routes/user.routes');
const taskRouter = require('./routes/task.route');


const app=express()
app.use(express.json())

app.use("/user",userRouter)
app.use("/task",taskRouter)






app.listen(8090,()=>{
    console.log("listening on port 8090..");
    dbconnect()
})