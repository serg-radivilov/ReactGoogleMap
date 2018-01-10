const express = require('express');
const http = require('http');
const path = require('path');

const data = require('./data');

const app = express();
http.createServer(app).listen((5000), () => {
  console.log(`Server Started! Port: ${5000}`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.use('/data', (req, res) => {
  res.send(data)
});