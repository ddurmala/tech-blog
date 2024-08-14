const router = require('express').Router();
const blog_controller = require('../controllers/blog_controller');

// create blog post
router.post('/add', blog_controller.addPost);

//update blogPost
router.put('/edit/:id', blog_controller.updatePost);

//create a new comment
router.post('/comment/:blog_id', blog_controller.addComment);

//delete blogPost
router.delete('/remove/:id', blog_controller.deletePosts);

module.exports = router;