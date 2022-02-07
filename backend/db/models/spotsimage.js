'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotsImage = sequelize.define('SpotsImage', {
    spotsId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  SpotsImage.associate = function(models) {
    // associations can be defined here
    SpotsImage.belongsTo(models.Spot, { foreignKey: 'spotsId' });
  };
  return SpotsImage;
};
