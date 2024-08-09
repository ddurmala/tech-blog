const { User } = require('../models');

module.exports = {
    showHomepage(req, res) {
        res.render('homepage', {
            title: ''
        });
    },

    showRegisterPage(req, res) {
        res.render('register', {
            title: '',
            register: true
        })
    },

    showLoginPage(req, res) {
        res.render('login', {
            title: '',
            login: true
        })
    },

    async showDashboard(req, res) {
        const user = await User.findByPk(req.session.user_id, {
            attributes: ['email']
        });

        res.render('dashboard', {
            title: '',
            user: user.get({ plain: true })
        })
    }
}
