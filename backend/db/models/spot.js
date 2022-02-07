'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    guestCount: DataTypes.INTEGER,
    staySize: DataTypes.STRING,
    roomCount: DataTypes.INTEGER,
    bathCount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Amentity, { foreignKey: 'spotsId' });
    Spot.hasMany(models.SpotsImage, { foreignKey: 'spotsId' });
    Spot.hasMany(models.Booking, { foreignKey: 'spotsId' });
    Spot.hasMany(models.Review, { foreignKey: 'spotsId' });
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};
