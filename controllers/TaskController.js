const Task = require('../models/Task')
const index = (req,res,next) => {
    Task.find()
    .then(response => {
        res.json ({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "Error while finding"
        })
    })
}



const add = (req,res,next) => {
    let task = new Task ({
        title:req.body.title,
        status:req.body.status
    })
    task.save()
    .then(response => {
        res.json({
            message: "Task was added succesfully to the database"
        })
    })
    .catch(error =>{
        res.json({
            message: "Error 404 while adding task"
        })
    })
}

const update = (req,res,next) => {
    let taskId = req.body.taskId
    let updatedData = {
        title:req.body.title,
        status:req.body.status
    }

    Task.findByIdAndUpdate(taskId,{$set: updatedData})
    .then(() => {
        res.json({
            message: 'The task was updated succesfully'
        })
    })
    .catch(error => {
        res.json({
            message: "Error 404 while updating"
        })
    })
}

module.exports = {
    index,add,update
}