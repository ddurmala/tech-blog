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

    }

}