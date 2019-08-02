const Sequelize = require('sequelize');

module.exports = new Sequelize('bulletinapidb', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});
