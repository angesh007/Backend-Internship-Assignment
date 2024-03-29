const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_delivery', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
