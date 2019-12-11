const express = require('express')
const app = express()
const PORT = 3000;

/* Application level middleware, active for all endpoints */
app.use((req, res, next) => {
  console.log('I am application level middleware');
  next(); // remember to call next, otherwise the execution stops
})

/* Path or route specific middleware */
app.use('/another', (req, res, next) => {
  console.log('This middleware is activated only for routes with path /another');
  next();
})

app.get('/', (req, res)  => {
  console.log('Route handling started');
  res.send('Hello, this route is working');
  console.log('Route handling completed');
})

app.get('/another', (req, res) => {
  res.send('Another route which works');
})

app.post('/another', (req, res) => {
  res.send('Another route works with POST');
})

app.listen(PORT, () => console.log('Application started at http://localhost:' + PORT));