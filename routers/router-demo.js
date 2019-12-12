const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router level middleware activated");
  next();
})

router.get('/', (req, res) => {
  res.send('Router works');
});

module.exports = router;
