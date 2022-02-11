'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    guestCount: DataTypes.INTEGER,
    staySize: DataTypes.INTEGER,
    roomCount: DataTypes.INTEGER,
    bathCount: DataTypes.INTEGER,
    nightlyCost: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    image4: DataTypes.STRING,
    image5: DataTypes.STRING,
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
