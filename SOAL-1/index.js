const express = require("express");
const router = require("./src/routes");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.end('Hello World');
});


app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});