const express = require('express');
const app = express();

app.use(function(req, res){
  res.send('it\'s working');
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(3000);
