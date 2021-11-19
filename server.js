'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send("My GH server");
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on Port ${process.env.PORT}`));

module.exports = {
  server: app
}