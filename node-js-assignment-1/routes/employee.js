// eslint-disable-next-line import/no-unresolved
const express = require('express');

const routes = express.Router({ mergeParams: true });
const employeeController = require('../controllers/employee');

routes.get('/', employeeController.getEmployeeList);

// EmployeeDetails API
// Delete
// Add employee
// Update employee API

module.exports = routes;
