const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:Homerunstre6@localhost/groomer-api', {logging: false});
module.exports = {sequelize};