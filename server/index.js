const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
const port = process.env.PORT || 3001; 
const conn = mysql.createConnection(config);

app.use(bodyParser.json());

//------login------
const { loginUser } = require('./connection/auth/loginUsers');

app.post('/login', loginUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//------register------
const { registerUser } = require('./connection/auth/registerUsers');

app.post('/register', registerUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
