import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import DefaultData from './default.js'
import bodyparser from 'body-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './routes/routes.js'


const app = express();
dotenv.config({path:'/.env'});

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('frontend/build'));
 
}

const port = process.env.PORT || 4000;
const DB = process.env.DB;

mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log("Connected successfully..")
}).catch(err=>{
    console.log(err);
})

app.listen(port,()=>{
console.log(`Server is running at port ${port}`);
})

//default data to database
DefaultData();