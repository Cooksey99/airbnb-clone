'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      guestCount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      staySize: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      roomCount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bathCount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nightlyCost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      image1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image2: {
        type: Sequelize.STRING,
      },
      image3: {
        type: Sequelize.STRING,
      },
      image4: {
        type: Sequelize.STRING,
      },
      image5: {
        type: Sequelize.STRING,
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
