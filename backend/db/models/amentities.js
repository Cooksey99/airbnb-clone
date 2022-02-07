'use strict';
module.exports = (sequelize, DataTypes) => {
  const amentities = sequelize.define('amentities', {
    spotsId: DataTypes.INTEGER,
    amentityName: DataTypes.STRING
  }, {});
  amentities.associate = function(models) {
    // associations can be defined here
  };
  return amentities;
};