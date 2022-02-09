'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Amentities', [
      {
        spotsId: null,
        amentityName: 'Wifi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'TV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Free parking on premises',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Air conditioning',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Private patio or balcony',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Private hot tub',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Security cameras on property',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Bathtub',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Backyard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotsId: null,
        amentityName: 'Garden view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Amentities', null, {});
  }
};
