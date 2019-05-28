const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const port = 4242;
app.get('/hello', function (req, res) {
  res.json({ message: 'Hello Nerds' })
});

app.listen(port, () => {
 console.log("The API is running on port " + port);
});
