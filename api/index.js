const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

let icoList = [
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
];

app.get('/icoHexSequences', (req, res) => {
  setTimeout(() => {
    res.status(200).json(icoList);
  }, 1000);
});

app.post('/icoHexSequences', (req, res) => {
  const newIco = {
    id: icoList.length + 1,
    name: req.body.name,
    created_at: Date.now(),
  };

  icoList.push(newIco);

  res.status(200).json(newIco);
});

app.listen(3001, () => {
  console.log('express app listening on port 3001');
});
