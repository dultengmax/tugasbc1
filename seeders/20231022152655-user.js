"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "abdul",
          email: "abdul@Mail.com",
          createdAt: "2023-10-10",
          updatedAt: "2023-10-11",
        },
        {
          name: "abdulee",
          email: "abdueel@Mail.com",
          createdAt: "2023-10-10",
          updatedAt: "2023-10-14",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('People', null, {});
     
  },
};
