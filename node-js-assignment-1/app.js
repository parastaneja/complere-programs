const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/employees', employeeRoutes);
app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
