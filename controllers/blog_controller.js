const { User, BlogPost } = require('../models');


module.exports = {
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
            await BlogPost.update(
                req.body,
                {
                    where: {
                        id: req.params.post_id
                    },
                    returning: true,
                    plain: true
                }
            )
            res.redirect('/dashboard')
        } catch (error) {
            console.log(error);
            res.redirect('/dashboard');
        }
    }

}