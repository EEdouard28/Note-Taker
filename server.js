const express = require('express');
const path = require('path');
const htmlroutes = require('./routing/htmlroutes'); //brings html router instance in
const apiroutes = require('./routing/apiroutes');
const app = express();
const PORT = process.env.PORT||3001;
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


//HTML ROUTES 
// GET NOTES AND INDEX. HTML
//API ROUTES
//GETAPI NOTES AND DB.JSON AND RETURN ALL SAVED NOTES
//POST API NOTES RECEIVE NEW NOTES TO SAVE ON BODY AND ADD TO DB JSON & RETURN TO CLIENT
//UNIQUE ID FOR EACH NOTE .. NPM PACKAGES
//BONUS: DELETE API RECEIVVE A QUERY PARAM WITH ID OF NOTE TO DELETE