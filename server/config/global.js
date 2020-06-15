require('dotenv').config()

const config = {
    jwt_secret: process.env.jwt_secret,
    token_time: process.env.token_time,
    db: {
        uri: process.env.db_uri
    }
}

module.exports = config;