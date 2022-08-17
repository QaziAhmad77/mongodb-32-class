const mongoose = require('mongoose');
const Students = require('../models/student');


async function post (req,res){    
    try {
        const {name,email} = req.body;
        if(!name || !email){
            return res.status(400).send("Required fields can't be empty");
        }
        const student = new Students({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email
        });      
        await student.save(); // ye database me save kar detha he
        res.status(200).send({createdStudent: student});

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

async function getAll(req,res){
    try {                                        // find takes all records. We will gives conditions also inside find.
        const students = await Students.find({
            _id: new mongoose.Types.ObjectId("62fd2e9834b88cfafd0e4355")
        });
        res.status(200).send({students});
        }catch (error) {
        console.log(error);
        res.status(5000).send("Something went wrong");
    }
}

async function getSingle(req,res){
    try {
    const {studentId}= req.params;        
    const student = await Students.findById(studentId);
    res.status(200).send({student});
    } catch (error) {
        console.log(error);
    }
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
    users.splice(userId, 1);  
    res.status(200).send({users})
}

module.exports = {
    post,
    getAll,
    getSingle,
    update,
    deleted
}