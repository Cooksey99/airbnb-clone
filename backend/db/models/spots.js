'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spots = sequelize.define('Spots', {
    guestCount: DataTypes.INTEGER,
    staySize: DataTypes.STRING,
    roomCount: DataTypes.INTEGER,
    bathCount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Spots.associate = function(models) {
    // associations can be defined here
  };
  return Spots;
};