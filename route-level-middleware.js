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

/*****************************
 * 
 * ROUTES
 * 
 *****************************/

app.get('/', (req, res)  => {
  console.log('Route handling started');
  console.log('Middleware was activated at ' + req.mwActivationTime);
  res.send('Hello, this route is working');
  console.log('Route handling completed');
});

app.get('/demonstration', headerEchoer, (req, res) => {
  res.send('Another route which works');
});

app.listen(PORT, () => console.log('Application started at http://localhost:' + PORT));