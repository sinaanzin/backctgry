const express=require("express")
const app=express();
const cors=require('cors');


const studmodel=require('./db')

const materialRouter=require('./routes/materialRouter')
app.use(cors());
app.use(express.json())


app.use('/api/material',materialRouter)

app.listen(3005,()=>
console.log("connected")
)
