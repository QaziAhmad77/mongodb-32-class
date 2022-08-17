// const {mongoClient} = require('mongodb');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;



async function connection(){
    const uri = "mongodb+srv://QaziAhmad:qazi03331602121ahmad@cluster0.82zpao1.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        const connectionObj = await client.connect();
        console.log(connectionObj);
        return connectionObj.db("first_db");
    } catch (errors) {
        console.log(errors);
    }
}

module.exports = connection;