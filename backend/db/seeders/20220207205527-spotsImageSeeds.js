'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SpotsImages', [
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/30c00b46-d66d-4d89-b9ca-3cb2d9d5f461.jpg?im_w=960",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/9dc074c5-fd61-4445-b9ae-1cbe12060788.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/f264a0c8-76de-4647-9f4a-c26217c26db7.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/58216b78-af2b-460d-b234-af597300d6d4.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/21a178a0-1479-410b-bf8c-fad2cf70485a.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/5214dcc9-a764-49b8-a5dd-b2c2db9f3311.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/bd134958-acfd-47af-bda1-6698e5cd2e76.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/64b66ddc-5eba-4fd1-a5e7-3b47dbe293c6.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/56f46cba-b88c-4ec6-ba49-f0ad8ea66f6d.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/c807a70c-b537-40a2-8edf-c1c8de7d58b4.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/9d97f815-b4db-4a1a-b065-61afa1ba1fec.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/bf3db7cd-f05d-4033-b6a8-bdeea68ec2c7.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/54c65041-2ab7-40df-84bd-1ca87828ea8a.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotsId: 3,
      url: "https://a0.muscache.com/im/pictures/0778ede6-ed7e-4213-9b6a-12be3ff2a1c0.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('SpotsImages', null, {});
  }
};
