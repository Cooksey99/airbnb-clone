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
     staySize: 2,
     roomCount: 2,
     bathCount: 1,
     nightlyCost: 194,
     description: 'The treehouse is an eclectic 1956 airstream/Spartan hodgepodge created by a Vietnam vet . It shares the grounds with a beautiful designed interior space that we have nicknamed “the studio”.',
     image1: 'https://a0.muscache.com/im/pictures/miso/Hosting-54129591/original/c4733fca-bedd-4aa9-9a56-76fb7aac098c.jpeg?im_w=1200',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
     {
     title: 'Test home',
     userId: 1,
     guestCount: 6,
     staySize: 3,
     roomCount: 2,
     bathCount: 1,
     nightlyCost: 246,
     description: 'Here is some information just to fill up space.',
     image1: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-540431431104831914/original/72bd2214-f0e5-4439-9017-37dd3ffe4e66.jpeg?im_w=1200',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
     {
     title: 'Beautifully Decorated, Comfortable, Beachfront 3 Bedroom House on Gulf Beach',
     userId: 1,
     guestCount: 7,
     staySize: 3,
     roomCount: 3,
     bathCount: 2,
     nightlyCost: 634,
     description: 'Amazing views, blissful sunsets, ocean breezes, and the sound of waves lapping at the shoreline await you at this fabulous, recently-built, pet-friendly, beachfront home located directly on the Gulf of Mexico. ""Villa Delphinus"" (named for the leaping dolphin constellation) was built 2008 and has a large, wrap-around, partially covered deck for panoramic views of the Gulf and Bay. The interior is bathed in that magical seaside light and features a vaulted living room, bamboo flooring, 2 bedrooms with queen beds, a third bedroom with a duo-bunk, and a sleeper sofa in the living room, 2 porcelain tiled bathrooms, and spacious, open living, dining, and kitchen areas. And, like all our great Dauphin Island vacation rentals, the kitchen is fully outfitted with everything you\'ll need for a great vacation. Please be advised of the following information prior to placing a Reservation: Minimum Age for the Primary Renter is 25 and Primary Renter must be present for the entire stay. Maximum Occupancy numbers include Children and cannot be exceeded at any time. All of our Homes are Non-Smoking. Some homes are Pet-friendly, with prior written permission, and a Pet Fee paid. A signed Rental Agreement is Required, which contains additional Rules and Guidance. We do not allow Weddings, Receptions or Parties at our Properties.',
     image1: 'https://a0.muscache.com/im/pictures/30c00b46-d66d-4d89-b9ca-3cb2d9d5f461.jpg?im_w=1200',
     image2: 'https://a0.muscache.com/im/pictures/58216b78-af2b-460d-b234-af597300d6d4.jpg?im_w=1200',
     image3: 'https://a0.muscache.com/im/pictures/21a178a0-1479-410b-bf8c-fad2cf70485a.jpg?im_w=720',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
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
