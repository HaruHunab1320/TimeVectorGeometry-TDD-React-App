const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/icoHexSequences', (req, res) => {
  setTimeout(()=>{
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
  }, 1000);
});

app.listen(3001, () => {
  console.log('express app listening on port 3001');
});
