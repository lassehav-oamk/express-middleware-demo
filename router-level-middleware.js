const express = require('express');
const app = express();
const routeComponent = require('./routers/router-demo');
const PORT = 3000;

/*****************************
 * 
 * ROUTES
 * 
 *****************************/

app.get('/', (req, res)  => {
  console.log('Route handling started');
  res.send('Hello, this route is working');
  console.log('Route handling completed');
});

app.use('/routerDemo', routeComponent);

app.listen(PORT, () => console.log('Application started at http://localhost:' + PORT));