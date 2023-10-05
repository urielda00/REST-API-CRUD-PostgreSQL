import express from 'express';
import {fetchAll,updateOne,deleteOne,insertOne} from '../controllers/user';
const userRouter = express.Router();


userRouter.get('/',fetchAll);
userRouter.post('/updateOne',updateOne);
userRouter.delete('/deleteOne',deleteOne);
userRouter.patch('/insertOne',insertOne);


export default userRouter;