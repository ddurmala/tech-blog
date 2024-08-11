const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

// create blog post
router.post('/add', blog_controller.addPost);


module.exports = router;