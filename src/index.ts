import express from 'express';
import dotenv from 'dotenv';
import client from './dbconnect';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import userRouter from './routes/user';

// Configurations:
const app = express();
dotenv.config();
const port = process.env.PORT||3000;


// Middlewares:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:false}));
app.use(morgan("common"));

// Routers:
app.use('/users',userRouter)


// Connect to the DB and then listen on the port.
client
.connect()
.then(()=>{
 app.listen(port,()=>{
  console.log(`app is listening at port: ${port}`);
})
})
.catch((err)=>{
  console.log(err.message);
})
