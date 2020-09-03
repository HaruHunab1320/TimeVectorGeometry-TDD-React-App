const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/icoHexSequences', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: 'CREATIVE GENESIS',
      created_at: Date.now(),
    },
    {
      id: 2,
      name: 'PRIMAL MATRIX',
      created_at: Date.now(),
    },
  ]);
});

app.listen(3001, () => {
  console.log('express app listening on port 3001');
});
