const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');


class User extends Model {

}





sequelize.sync({alter: true});

module.exports = {
    
};