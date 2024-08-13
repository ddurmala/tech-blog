const { User, BlogPost } = require('../models');
// const { post } = require('../routes/blog_routes');

module.exports = {
    async showHomepage(req, res) {

        const posts = await BlogPost.findAll({
            attributes: ['title', 'content', 'createdAt'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        //flatten the data structure
        const flattenedPosts = posts.map(post => ({
            title: post.title,
            content: post.content,
            author: User.username,
            createdAt: post.createdAt
        }));

        res.render('homepage', {
            title: 'TB Homepage',
            posts: flattenedPosts
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
                    attributes: ['id', 'title', 'content', 'createdAt']
                }
            ]
        })

        res.render('dashboard', {
            title: '',
            user: user.get({ plain: true })
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
        const blogPost = await BlogPost.findByPk(req.params.id);

        res.render('comment', {
            user: user.get({ plain: true }),
            title: "TB Comment",
            blogPost: blogPost.get({ plain: true }),
            comment_page: true
        })
    }

} 
