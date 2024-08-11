const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

// create blog post
router.post('/add', blog_controller.addPost);

//update blogPost
router.put('/update/:post_id', blog_controller.updatePost)

//delete blogPost


module.exports = router;