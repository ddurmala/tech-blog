const router = require('express').Router();
const user_controller = require('../controllers/user_controller');

// register
router.post('/register', user_controller.registerUser);

//login
router.post('/login', user_controller.loginUser);

//logout
router.get('/logout', user_controller.logoutUser);

module.exports = router;