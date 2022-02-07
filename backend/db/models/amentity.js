'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amentity = sequelize.define('Amentity', {
    spotsId: DataTypes.INTEGER,
    amentityName: DataTypes.STRING
  }, {});
  Amentity.associate = function(models) {
    // associations can be defined here
    Amentity.belongsTo(models.Spot, { foreignKey: 'spotsId' })
  };
  return Amentity;
};
