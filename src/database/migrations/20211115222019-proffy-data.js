'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Teachers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      names: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      theme: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      start: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teachers');
  }
};
