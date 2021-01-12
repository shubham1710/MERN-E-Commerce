const { Router } = require('express');
const orderController = require('../controllers/orderControllers');
const router = Router();

router.get('/order/:id',orderController.get_orders);
router.post('order/:id',orderController.new_order);

module.exports = router;