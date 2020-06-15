'use strict'
const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const config = require('../config/global');

const getUser = (req, res) => {
    User.find().then((users) => {
        return res.status(200).send({users});
    }).catch(err => {
        return res.status(500).send({err});
    });
}

const save = (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password){
            throw 'Bad Request'
        }
        User.create({ username, password: md5(password) }, (err, result) => {
            if(err) return res.status(500).send({err});
            return res.status(201).send({user: result});
        })
    } catch (error) {
        return res.status(500).send({error});
    }
}

const login = (req, res) => {
    try {
        const { username, password } = req.body;
        User.findOne({
                username,
                password: md5(password)
        }, (err, user) => {
            if (err || !user) return res.status(401).send({err: 'operator not found, incorrect credentials'});
            console.log('user', user)
            let token = jwt.sign({ user }, config.jwt_secret, { expiresIn: '1h'  });
            user.password = undefined;
            res.status(200).send({ status: 'OK', data: user, token: token });
        }).catch(err => {
            res.status(401).send({ status: 'Unauthorized', error: err });
        });
    } catch (error) {
        return res.status(500).send({error});
    }
    
}

module.exports = {
    getUser,
    save,
    login
}