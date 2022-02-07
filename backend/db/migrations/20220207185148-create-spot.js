'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guestCount: {
        type: Sequelize.INTEGER(100)
      },
      staySize: {
        type: Sequelize.STRING(30)
      },
      roomCount: {
        type: Sequelize.INTEGER(15)
      },
      bathCount: {
        type: Sequelize.INTEGER(15)
      },
      description: {
        type: Sequelize.STRING(2000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
