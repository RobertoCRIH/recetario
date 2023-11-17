const express = require('express')
const {connectToDB,getDB} = require('./db')
const {  ObjectId } = require('mongodb')
const bodyParser = require('body-parser');
const cors = require('cors');

//Init App
const app = express()
const port = 3001

//These are some elements that are necessary for the communication with the Front
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())
app.use(express.json())

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
        .find({},{projection: {id: 1,nombre: 1,autor:1,likes:1}})
        .forEach(receta => recetas.push(receta))
        .then(()=>{
            res.status(200).json(recetas)
        })
        .catch(()=>{
            res.status(500).json({error:"We could not fetch the data from the database"})
        })
})

app.get('/getone/:id',(req,res)=>{

    const id = req.params.id;

    db.collection('recetas')
        .findOne({_id: new ObjectId(id)})
        .then((r)=>{
            res.status(200).json(r)
        })
        .catch(()=>{
            res.status(500).json({error:"We could not fetch the data from the database"})
        })
})

app.delete('/delete/:id', async (req,res)=>{

    const id = req.params.id;

    db.collection('recetas')
    .deleteOne({_id : new ObjectId(id)})
    .then((r)=>{
        res.status(200).json(r)
    })
    .catch(()=>{
        res.status(500).json({error:"We could not fetch the data from the database"})
    })
})

app.post('/post', async (req,res)=>{

    const nombre = req.body.nombre;
    const autor = req.body.autor;
    const tiempo = req.body.tiempo;

    db.collection('recetas')
    .insertOne({
        nombre: nombre,
        autor:  autor,
        tiempo : tiempo
    })
    .then((r)=>{
        res.status(200).json(r)
    })
    .catch(()=>{
        res.status(500).json({error:"We could not fetch the data from the database"})
    })
})