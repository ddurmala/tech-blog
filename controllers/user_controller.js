const { User } = require('../models');

module.exports = {
    async registerUser(req, res) {
        try {
            const user = await User.create(req.body);

            req.session.user_id = user.id;

            res.redirect('/dashboard');

        } catch (error) {
            console.log(error);
            res.redirect('/register');
        }
    },

    async loginUser(req, res) {
        const formData = req.body;

        const user = await User.findOne({
            where: {
                email: formData.email
            }
        });
        console.log(formData);

        if (!user) {
            return res.redirect('/register');
        }

        const valid_pass = await user.validatePassword(formData.password);

        if (!valid_pass) {
            return res.redirect('/login')
        }

        req.session.user_id = user.id;

        res.redirect('/dashboard');
    },

    logoutUser(req, res) {
        req.session.destroy();

        res.redirect('/')
    }
}