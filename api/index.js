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
        tiempo : tiempo,
        likes: 0
    })
    .then((r)=>{
        res.status(200).json(r)
    })
    .catch(()=>{
        res.status(500).json({error:"We could not fetch the data from the database"})
    })
})

app.put('/put', async (req,res)=>{

    const id = req.body.id;
    const nombre = req.body.nombre;
    const autor = req.body.autor;
    const tiempo = req.body.tiempo;
    const likes = req.body.likes;

    db.collection('recetas')
    .updateOne({_id : new ObjectId(id)},{$set:{
        nombre: nombre,
        autor: autor,
        tiempo: tiempo,
        likes: likes
    }})
    .then((r)=>{
        res.status(200).json(r)
    })
    .catch(()=>{
        res.status(500).json({error:"We could not fetch the data from the database"})
    })


})

app.patch('/patch',(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;

    db.collection('recetas')
    .updateOne({_id : new ObjectId(id)},{$set:{
        nombre: nombre,
    }})
    .then((r)=>{
        res.status(200).json(r)
    })
    .catch(()=>{
        res.status(500).json({error:"We could not fetch the data from the database"})
    })
})


//Header y options
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Encabezados permitidos
    next();
});
  
// Ruta con el método OPTIONS
app.options('/ruta', (req, res) => {
// Puedes configurar los encabezados que deseas enviar en la respuesta OPTIONS
res.status(200).end(); // Terminar la respuesta sin enviar un cuerpo
});