const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('test');
  res.send('Hello');
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
