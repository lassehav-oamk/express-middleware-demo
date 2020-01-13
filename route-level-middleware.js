const express = require('express');
const app = express();
const PORT = 3000;

/*****************************
 * 
 * MIDDLEWARE SECTION
 * 
 *****************************/

function headerEchoer(req, res, next) {
  console.log('Request headers:');
  for(let property in req.headers)
  {
    console.log(property + ' - ' + req.headers[property]);
  }

  next();
}

function mw1(req, res, next) {
  console.log('mw1 running');
  next();
}

function mw2(req, res, next) {
  console.log('mw2 running');
  next();
}

function mw3(req, res, next) {
  console.log('mw3 running');
  next();
}

/*****************************
 * 
 * ROUTES
 * 
 *****************************/

/*
  Here a single middleware function called headerEchoer is given for a route.
*/
app.get('/demonstration', headerEchoer, (req, res) => {
  res.send('Another route which works');
});

/* 
  Each route can be given multiple middleware by passing them as an array.
*/
app.get('/multiple', [mw1, mw2, mw3], (req, res)  => {
  console.log('Route handling started');
  res.send('Route with multiple middleware executed. See the server console log for mw output');
});


app.listen(PORT, () => console.log('Application started at http://localhost:' + PORT));