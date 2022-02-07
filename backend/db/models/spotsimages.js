'use strict';
module.exports = (sequelize, DataTypes) => {
  const spotsImages = sequelize.define('spotsImages', {
    spotsId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  spotsImages.associate = function(models) {
    // associations can be defined here
  };
  return spotsImages;
};