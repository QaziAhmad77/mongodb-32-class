const connection = require('../models');
const mongodb = require('mongodb');

async function post (req,res){     // controllers me hm wo medalware rakte he jo response bejte he
    try {
        const {name,email, phone_number} = req.body;
        if(!name || !email || !phone_number){
            return res.status(400).send("Required fields can't be empty");
        }
        const db = await connection();  // connection ak asynchronous operation he to hm iska wait karenge
        const createdUser = await db.collection("users").insertOne({
            name: name,
            email: email,
            phone_number: phone_number
        });               // users is a collection in first_db database

        res.status(200).send({createdUser});

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

async function getAll(req,res){
    try {
        const db = await connection();
        const user = await db.collection("users").findOne({
            // _id: new mongodb.ObjectId("62fcda4e17558e20b5e91ed0")
            name: "Ahmad",
        });
        res.status(200).send({user});
    } catch (error) {
        console.log(error);
        res.status(5000).send("Something went wrong");
    }
}

function getSingle(req,res){
    const userId= req.params.userId;         // userId ko hm req.params se get karenge
    const result = users[userId];
    if(!result){
        return res.status(400).send("Invalid user id");
    }
    res.status(200).send({user: result})
}

function update(req,res){
    const {name} = req.body;
    const {userId} = req.params;
    const result = users[userId];
    if(!result){
        return res.status(400).send("Invalid user id");
    }
    users[userId] = name;
    res.status(200).send({users});
}

function deleted(req,res){
    const {userId}=req.params;
    const result = users[userId];
    if(!result){
        return res.status(400).send("Invalid user id");
    }
    users.splice(userId, 1);  // splice is a mthod of array which delete a specific index data
    res.status(200).send({users})
}

module.exports = {
    post,
    getAll,
    getSingle,
    update,
    deleted
}