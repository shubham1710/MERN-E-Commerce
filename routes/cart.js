const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:id',cartController.get_cart_items);
router.post('/cart/:id',cartController.add_cart_item);
router.delete('/cart/:id',cartController.delete_item);

module.exports = router;