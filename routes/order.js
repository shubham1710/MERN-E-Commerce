const { Router } = require('express');
const orderController = require('../controllers/orderControllers');
const router = Router();

router.get('/order/:id',orderController.get_orders);
router.post('/order',orderController.checkout);

module.exports = router;