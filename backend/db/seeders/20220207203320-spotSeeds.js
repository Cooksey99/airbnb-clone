'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [{
     guestCount: 2,
     staySize: '2 bedrooms',
     roomCount: 2,
     bathCount: 1,
     description: 'The treehouse is an eclectic 1956 airstream/Spartan hodgepodge created by a Vietnam vet . It shares the grounds with a beautiful designed interior space that we have nicknamed “the studio”.',
     createdAt: new Date(),
     updatedAt: new Date(),
   }], {});
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
