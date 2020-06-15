'use strict'
const Task = require('../models/Task');

const getTasks = (req, res) => {
    Task.find({userId: req.params.id}).then((tasks) => {
        return res.status(200).send({tasks});
    }).catch(err => {
        return res.status(500).send({err});
    });
}

const getTaskById = (req, res) => {
    Task.findById(req.params.id).then((task) => {
        return res.status(200).send({task});
    }).catch(err => {
        return res.status(500).send({err});
    });
}

const save = (req, res) => {
    try {
        const { name, description, date, userId } = req.body;
        if(!name || !userId){
            throw 'Bad Request'
        }
        Task.create({ name, description, date, userId }, (err, result) => {
            if(err) return res.status(500).send({err});
            return res.status(201).send({task: result});
        })
    } catch (error) {
        return res.status(500).send({error});
    }
}

const updateTaskById = (req, res) => {
    try {
        const { body } = req;
        Task.findByIdAndUpdate(req.params.id, body, (err, result) => {
            if(err) {
                console.log(err)
                return res.status(500).send({err});
            }
            return res.status(200).send({task: {...body, _id: req.params.id}});
        })
    } catch (error) {
        return res.status(500).send({error});
    }
    
}

module.exports = {
    getTasks,
    save,
    getTaskById,
    updateTaskById
}