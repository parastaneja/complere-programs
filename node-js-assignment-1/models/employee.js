const config = require('konphyg')(`${__dirname}/../config`)('all');

const { mysqlManager } = require('../managers');

const getEmployeeList = async () => {
  const conn = await mysqlManager.getConnection();
  const query = `
    SELECT * FROM ${config.mysql.schema}.employee order by employee_id desc
    `;
  const { rows } = await conn.query(query);
  return rows;
};

module.exports = {
  getEmployeeList,
};
