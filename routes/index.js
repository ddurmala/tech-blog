const router = require('express').Router();

const blog_routes = require('./blog_routes');
const view_routes = require('./view_routes');
const user_routes = require('./user_routes');

router.use('/', [view_routes, user_routes, blog_routes]);

router.use('/add', [blog_routes, user_routes, view_routes]);

router.use('/edit', user_routes, blog_routes, view_routes)

router.use('/remove', user_routes, blog_routes, view_routes)

module.exports = router;