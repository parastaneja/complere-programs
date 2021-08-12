const config = require('konphyg')(`${__dirname}/../config`)('all');

const {
  MysqlManager,
} = require('../libs/managers');

console.log(config);
const mysqlManager = MysqlManager(config.mysql);
module.exports = {
  mysqlManager,
};
