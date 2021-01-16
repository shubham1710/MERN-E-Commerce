const { Router } = require('express');
const authController = require('../controllers/authControllers');
const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/user', authController.get_user);

module.exports = router;