const { User, BlogPost, Comment } = require('../models');
// const { post } = require('../routes/blog_routes');

module.exports = {
    async showHomepage(req, res) {

        const user = await User.findByPk(req.session.user_id, {
            attributes: ['username']
        });

        const posts = await BlogPost.findAll({

            attributes: ['id', 'title', 'content', 'date'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['content', 'date'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        });


        //flatten the data structure
        const flattenedPosts = posts.map(post => post.get({ plain: true }));

        res.render('homepage', {
            title: 'TB Homepage',
            posts: flattenedPosts,
            user: user ? user.get({ plain: true }) : false
        });
    },

    showRegisterPage(req, res) {
        res.render('register', {
            title: 'TB Register',
            register: true
        })
    },

    showLoginPage(req, res) {
        res.render('login', {
            title: 'TB Login',
            login: true
        })
    },

    showAdd(req, res) {
        res.render('add', {
            title: 'TB Add',
            user: req.session.user,
            add: true
        })
    },

    async showDashboard(req, res) {

        const user = await User.findByPk(req.session.user_id, {
            attributes: ['email', 'username'],
            include: [
                {
                    model: BlogPost,
                    attributes: ['id', 'title', 'content', 'date']
                }
            ]
        })

        res.render('dashboard', {
            title: '',
            user: user.get({ plain: true }),
            dashboard: true
        })
    },

    async showEditBlogPostPage(req, res) {
        const user = await User.findByPk(req.session.user_id, {
            attributes: ['email', 'username']
        });
        const blogPost = await BlogPost.findByPk(req.params.id);

        res.render('edit', {
            user: user.get({ plain: true }),
            title: "TB Edit",
            blogPost: blogPost.get({ plain: true }),
            edit_page: true
        })
    },

    async showCommentPage(req, res) {
        const user = await User.findByPk(req.session.user_id, {
            attributes: ['email', 'username']
        });
        const blogPost = await BlogPost.findByPk(req.params.blog_id);

        res.render('comment', {
            user: user.get({ plain: true }),
            title: "TB Comment",
            blogPost: blogPost.get({ plain: true }),
            comment_page: true
        })
    }

} 
