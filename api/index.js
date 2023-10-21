const express = require('express')

const {connectToDB,getDB} = require('./db')
const {  ObjectId } = require('mongodb')

//Init App
const app = express()
const port = 3001

//Database Connection
let db
connectToDB((err)=>{
    if (!err){
        app.listen(port,()=>{
            console.log('app running on port ' + port)
        })
        db = getDB()
    }
})



//routes
app.get('/get',(req,res)=>{

    let recetas =[]

    db.collection('recetas')
        .find()
        .forEach(receta => recetas.push(receta))
        .then(()=>{
            res.status(200).json(recetas)
        })
        .catch(()=>{
            res.status(500).json({error:"We could not fetch the data from the database"})
        })
})

