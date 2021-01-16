const { Router } = require('express');
const authController = require('../controllers/authControllers');
const router = Router();
const {requireAuth} = require('../middleware/auth');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/user', requireAuth, authController.get_user);

module.exports = router;