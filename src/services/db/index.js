const sequelize = require('sequelize');

module.exports = function () {
    try {
        const DB = process.env.DATABASE;
        const USER = process.env.USER;
        const PASSWORD = process.env.PASSWORD;
        const db = new sequelize(DB,USER,PASSWORD,{
            host: "localhost",
            dialect: "mysql"
        });
        return db;
    }
    catch(e) {console.log(e)}
};