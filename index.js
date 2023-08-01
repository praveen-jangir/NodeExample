const express = require('express');
const app = express();
const port = 3000;
const totalCount = require('./readFile');
const sum = require('./sum');
app.get('/', (req, res) => {
  res.send("Hello World");
});
app.get('/sum', (req, res) => {
  var arr = [1, 23, 44, 4];
  res.send("Total Sum Of ["+String(arr)+"] => "+sum(arr));
});
app.get('/count', (req, res) => {
  res.send("Total Count => " + totalCount());
});
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
