const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql');
const path = require('path');
const port = 3000;
const host = '127.0.0.1'; 

const app = express()

app.get('/', (req, res) => {
    res.send('Successful response.');
  });
  
app.listen(port, function(){
    console.log(`Server is running at http://${host}:${port}`);
});
