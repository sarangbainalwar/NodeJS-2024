const express = require("express");
const app = express();
app.get("/home", (req, res) => {
  res.send(`<input type = 'text' placeholder = 'Enter your name' value="${req.query.name}"> <button>Submit</button>`);
});

app.get("/about", (req, res) => {
    res.send("<h1>hello world, about page...</h1><a href='/help'>Help</a>");
  });

  app.get("/help", (req, res) => {
    res.send([
      {
        name: "Andrew",
        age: 27,
        location: "Philadelphia",
        email: "andrew@example.com"
      },
      {
        name: "John",
        age: 30,
        location: "New York",
        email: "john@example.com"
      }
    ]);
});


  app.listen(5000);
