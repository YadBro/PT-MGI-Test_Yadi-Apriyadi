const express = require("express");
const app = express();
const PORT = 5000;
const router = require("./src/routes");

app.use(express.json());
app.use("/api/v1", router);

app.get('/', (req, res) => {
  res.end("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});