const {MongoClient} =require('mongodb')

let dbConnection

module.exports = {
    connectToDB: (cb)=>{
        MongoClient.connect('mongodb://127.0.0.1:27017/pagina-recetas')
            .then((client)=>{
                dbConnection = client.db()
                return cb()
            })
            .catch(err=>{
                console.log(err)
                return cb(err)
            })
    },
    getDB: ()=> dbConnection

}