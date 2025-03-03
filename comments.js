//Create web server

const express = require('express');
const app = express();

//create a router
const router = express.Router();

//define a route
router.get('/comments', (req, res) => {
  res.send('Comments page');
});

//use the router
app.use('/', router);

//start the server
app.listen(3000, () => {
  console.log('Server started');
});