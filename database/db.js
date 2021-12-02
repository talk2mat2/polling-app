const  Sequelize= require('sequelize')
const SequelizeAuto = require('sequelize-auto');
require('dotenv').config()


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_pass, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });

  const options = { caseFile: 'l', caseModel: 'p', caseProp: 'c',directory: './models' };

  exports.auto = new SequelizeAuto(sequelize, null, null, options);

async function connectDb(){

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connectDb()
module.exports=sequelize;
global.sequelize=sequelize;