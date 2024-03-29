const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  km_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fix_price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Pricing;
