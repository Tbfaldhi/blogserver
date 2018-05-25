var express = require('express');
var router = express.Router();
const { register, login } = require('../controller/user.controller')
const { addblog, getlist, updateBlog, deleteBlog } = require('../controller/blog.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',login)
router.post('/register',register)
router.post('/blogpost',addblog)
router.get('/getlist',getlist)
router.delete('/deleteblog/:_id',deleteBlog)

module.exports = router;
