'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [{
      title: 'John Doe',
      content: false,
      img:'ar.png',
      author:'abdul',
      createdAt: "2023-10-10",
      updatedAt: "2023-10-11",


    },
      {
        title: 'abdulll',
        content: false,
        img:'ar.png',
        author:'abdul',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  
  }
};
