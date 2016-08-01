var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next){
  res.render('signup', {error: null})
})
router.get('/signin', function(req, res, next){
  res.render('signin')
})
module.exports = router;
