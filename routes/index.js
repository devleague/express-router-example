var express = require('express');
var router = express.Router();

router.route('/')
  .all(function(req, res, next) {
    console.log('ALL requests to the index page go here');
    next();
  })
  .get(function(req, res) {
    res.send('GET response from Express Router Examples!');
  })
  .post(function(req, res) {
    res.send('POST response from Express Router Examples!');
  });

// Export router so it can be used in app.js
module.exports = router;
