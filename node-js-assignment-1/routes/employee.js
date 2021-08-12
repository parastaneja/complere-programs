const express = require('express');
const employeeController = require('../controllers/employee');

const router = express.Router();

router.get('/', async (req, res) => {
  const employeeList = await employeeController.getEmployeeList();
  res.send({
    success: 'true',
    data: employeeList,
  });
});

module.exports = router;
