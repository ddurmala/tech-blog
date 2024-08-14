const { User, BlogPost, Comment } = require('../models');


module.exports = {

    //create a new post
    async addPost(req, res) {
        const formData = req.body;
        try {
            await BlogPost.create({
                ...formData,
                UserId: req.session.user_id
            });

            res.redirect('/dashboard');

        } catch (error) {
            console.log(error);

            res.redirect('/add');
        }
    },

    async updatePost(req, res) {
        try {
            const updatedPost = await BlogPost.update({
                title: req.body.title,
                content: req.body.content
            }, {
                where: { id: req.params.id }
            });

            res.redirect('/'); // Redirect to the home page after updating
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    //create a new comment
    async addComment(req, res) {
        const formData = req.body;
        try {
            await Comment.create({
                ...formData,
                BlogPostId: req.params.blog_id,
                UserId: req.session.user_id
            });

            res.redirect('/');
        } catch (error) {
            console.log(error);

            res.redirect('/comment/' + req.params.blog_id);
        }
    },

    async deletePosts(req, res) {

        await BlogPost.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/dashboard');
    }

}