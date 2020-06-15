'use strict'

const jwt = require('jsonwebtoken');
const config = require('../config/global');

const checkToken = (request, response, next) => {
    let token = (request.headers ? request.headers.authorization : null);
    if (!token) {
        return response.status(401).send({
            messaje: 'No token found'
        });
    }
    jwt.verify(token, config.jwt_secret, (err, decode) => {
        if (err) {
            return response.status(401).send({
                error: err,
                messaje: 'Incorrect token'
            });
        }

        next();
    });
}

module.exports = {
    checkToken
}