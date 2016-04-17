var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuelmapper', stylesheet: "/stylesheets/style.css", js: "/javascripts/landing.js", what: 'active', background: 'class=background' });
});
router.get('/app', function(req, res, next) {
  res.render('app', { title: 'Fuelmapper', stylesheet: "/stylesheets/style.css", js: "/javascripts/main.js", calculate: 'active' });
});

module.exports = router;
