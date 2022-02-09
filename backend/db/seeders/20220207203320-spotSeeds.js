'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
     title: 'Treehouse hosted by Darrel',
     userId: 1,
     guestCount: 2,
     staySize: '2 bedrooms',
     roomCount: 2,
     bathCount: 1,
     nightlyCost: 194,
     description: 'The treehouse is an eclectic 1956 airstream/Spartan hodgepodge created by a Vietnam vet . It shares the grounds with a beautiful designed interior space that we have nicknamed “the studio”.',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
     {
     title: 'Test home',
     userId: 1,
     guestCount: 6,
     staySize: '3 bedrooms',
     roomCount: 2,
     bathCount: 1,
     nightlyCost: 246,
     description: 'Here is some information just to fill up space.',
     createdAt: new Date(),
     updatedAt: new Date(),
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
