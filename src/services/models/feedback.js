const db = require('../db/index');
const sequelize = require('sequelize');

const FeedBack = db().define('feedback',{
    name: {
        type: sequelize.STRING,
        required: true
    },
    email: {
        type: sequelize.STRING,required:true
    },
    message: {
        type:sequelize.TEXT,
        required:true
    }
});

module.exports = FeedBack;