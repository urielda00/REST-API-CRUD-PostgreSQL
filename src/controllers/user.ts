import { Request , Response} from "express";
import client from "../dbconnect";


// Read all
export const fetchAll = async(req:Request , res:Response)=>{
  try {
    client.query(`SELECT * FROM dahan;`,(err,result)=>{
      if(!err){
         res.status(200).send(result.rows)
      }else{
        console.log('err in fetchall query:',err.message);
         res.status(409).send(err.message)
      }
      client.end
    })
  } catch (error) {
    console.log('error in fetch all:', error.message);
    res.status(500).send();
  }
};

// Update one - age, by Id
export const updateOne = async(req:Request , res:Response)=>{
  try {
    const {id, newAge} = req.body;
    client.query(`UPDATE dahan SET age=${newAge} WHERE id=${id};`,(err,result)=>{
      if(!err){
         res.status(200).send(result.rows)
      }else{
        console.log('err in updateOne query:',err.message);
         res.status(409).send(err.message)
      }
      client.end
    })
  } catch (error) {
    console.log('error in updateOne:', error.message);
    res.status(500).send();
  }
};

// Delete one by name
export const deleteOne = async(req:Request , res:Response)=>{
  try {
    const {name} = req.body;
    client.query(`DELETE FROM dahan WHERE name='${name}';`,(err,result)=>{
      if(!err){
         res.status(200).send(result.rows)
      }else{
        console.log('err in deleteOne query:',err.message);
         res.status(409).send(err.message)
      }
      client.end
    })
  } catch (error) {
    console.log('error in deleteOne:', error.message);
    res.status(500).send();
  }
};


// Insert one by name
export const insertOne = async(req:Request , res:Response)=>{
  try {
    const {name,age,work,hobby,style,month,father,id} = req.body;
    client.query(`INSERT INTO 
    dahan(name,age,work,hobby,style,month,father,id)  
    VALUES('${name}',${age},'${work}','${hobby}','${style}',${month},'${father}',${id});`,(err,result)=>{
      if(!err){
         res.status(200).send(result.rows)
      }else{
        console.log('err in insertOne query:',err.message);
         res.status(409).send(err.message)
      }
      client.end
    })
  } catch (error) {
    console.log('error in insertOne:', error.message);
    res.status(500).send();
  }
};