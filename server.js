const express = require('express');
const path = require('path');
const htmlroutes = require('./routing/htmlroutes'); //HTML router path instance
const apiroutes = require('./routing/apiroutes'); //API router path instance
const app = express(); //Express js
const PORT = process.env.PORT || 3001; 
//process.env.PORT|| checks for live server heroku and use as port otherwise use local 3001

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiroutes);
app.use("/", htmlroutes);


app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);


