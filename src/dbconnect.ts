import pg from 'pg'
import dotenv from 'dotenv';


dotenv.config();

const client = new pg.Client({
  host : process.env.DB_HOST,
  port : parseInt(process.env.DB_PORT,10),
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DB
})

export default client;