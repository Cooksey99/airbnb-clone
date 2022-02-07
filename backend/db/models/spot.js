'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    guestCount: DataTypes.INTEGER,
    staySize: DataTypes.STRING,
    roomCount: DataTypes.INTEGER,
    bathCount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};