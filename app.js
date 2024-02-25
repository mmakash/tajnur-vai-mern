const express=require('express');
const app=new express();
const bodyParser=require('body-parser');
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const hpp=require('hpp');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const dbConnection = require('./db');



//Security
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));
app.use(bodyParser.json());

const userRouter = require('./src/route/user-routes');
const taskRouter = require('./src/route/task-routes');
const authRouter = require('./src/route/auth-routes');


// Rate Limiting
const limiter=rateLimit({windowMs:15*60*1000,max:300});
app.use(limiter);

// database connection
dbConnection().catch((e)=>{
  console.log(e);
})


app.use("/api",userRouter);
app.use("/api",taskRouter);
app.use("/api",authRouter);


module.exports=app;





