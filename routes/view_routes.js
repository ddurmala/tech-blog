
const router = require('express').Router();
const view_controller = require('../controllers/view_controller');
const { redirectGuest, redirectUser } = require('./helpers')

// homepage route
router.get('/', view_controller.showHomepage);

//register route
router.get('/register', redirectUser, view_controller.showRegisterPage);

//login route
router.get('/login', redirectUser, view_controller.showLoginPage);

//dashboard route
router.get('/dashboard', redirectGuest, view_controller.showDashboard)

//add blog post route
router.get('/add', redirectGuest, view_controller.showAdd);

//get individual blog posts for editing
router.get('/edit/:id', redirectGuest, view_controller.showEditBlogPostPage)

//get blog post for commenting
router.get('/comment/:blog_id', redirectGuest, view_controller.showCommentPage)


module.exports = router;