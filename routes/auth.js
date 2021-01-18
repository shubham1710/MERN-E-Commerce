const { Router } = require('express');
const authController = require('../controllers/authControllers');
const router = Router();
const auth = require('../middleware/auth');

router.post('/register', authController.signup);
router.post('/login', authController.login);
router.get('/user', auth, authController.get_user);

module.exports = router;