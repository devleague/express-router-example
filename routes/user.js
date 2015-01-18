var express = require('express');
var router = express.Router();

/**
 * Routers can be used like middleware.
 * This next snippet is called on ALL requests that go through this router.
 */
router.use(function(req, res, next) {
  console.log('Entering user routes');

  // It's important to pass the request on to the next handler
  next();
});

/**
 * This path is relative to the path defined on line 13 in app.js
 */
router.get('/', function(req, res) {
  res.send('List all users');
});

router.get('/:id', function(req, res) {
  // Grab id from the route parameter;
  // Example: If you go to /user/1, userId will be set to 1.
  var userId = req.params.id;
  res.send('User: ' + userId);
});

// Export router so it can be used in app.js
module.exports = router;
