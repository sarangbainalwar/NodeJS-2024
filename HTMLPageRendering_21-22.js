const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "./public");

//app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('',(_,res) => {
   res.sendFile(`${publicPath}/index.html`);
})
app.get('/about',(_,res) => {
   res.sendFile(`${publicPath}/about.html`);
})
app.get('/help',(_,res) => {
   res.sendFile(`${publicPath}/help.html`);
})
app.get('/profile',(_,res) => {
   const user = {
      name: 'John Doe',
      age: 30,
      hobby: 'Reading',
      skills:['HTML','CSS','JS']
   }
   res.render('profile.ejs',{user});
})

app.get('/login',(_,res) => {
   res.render('login');
})

app.get('*',(_,res) => {
   res.sendFile(`${publicPath}/404.html`);
})





app.listen(5000);

