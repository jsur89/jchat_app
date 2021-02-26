"use strict";

const bcrypt = require("bcrypt");
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "male",
      },
      {
        firstName: "Sam",
        lastName: "Smith",
        email: "sam.smith@gmail.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "male",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@gmail.com",
        password: bcrypt.hashSync("secret", 10),
        gender: "female",
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "testemail1@email.com",
        password: bcrypt.hashSync("secret", 10),
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "testemail2@email.com",
        password: bcrypt.hashSync("secret", 10),
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "testemail3@email.com",
        password: bcrypt.hashSync("secret", 10),
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "testemail4@email.com",
        password: bcrypt.hashSync("secret", 10),
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        gender: faker.name.gender(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
