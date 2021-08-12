const employeeModel = require('../models/employee');

const getEmployeeList = async () => {
  const employeeList = await employeeModel.getEmployeeList();
  return employeeList;
};

module.exports = {
  getEmployeeList,
};
