const { User, BlogPost } = require('../models');
// const { post } = require('../routes/blog_routes');

module.exports = {
    async showHomepage(req, res) {
        const posts = await BlogPost.findAll() || [];

        res.render('homepage', {
            title: 'TB Homepage',
            posts
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
            add: true
        })
    },

    async showDashboard(req, res) {

        const user = await User.findByPk(req.session.user_id, {
            attributes: ['email', 'username'],
            include: [
                {
                    model: BlogPost,
                    attributes: ['title', 'content', 'createdAt']
                }
            ]
        });

        if (user && user.BlogPosts) {
            const userBlogPosts = user.BlogPosts;

            res.render('dashboard', {
                title: '',
                user: user.get({ plain: true }),
                userBlogPosts
            })
        } else {

            res.render('dashboard', {
                title: '',
                user: user.get({ plain: true }),
                userBlogPosts: []
            });
        }
    }

} 
