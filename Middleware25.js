const express = require('express');
const app = express();
const reqFilter=require('./middleware.js');  //importing middleware.js file

//application-level middleware
//app.use(reqFilter);

app.get('/',(req,res) => {
    res.send('Welcome to Home Page');
})

//route-level middleware
app.get('/users',reqFilter,(req,res) => {
    res.send('Welcome to Users Page');
})

app.get('/about',(req,res) => {
  res.send('Welcome to About Page');
})

app.listen(5000)