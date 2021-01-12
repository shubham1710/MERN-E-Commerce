const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    items: [{
        productId: String,
        quantity: Number
    }],
    bill: {
        type: Number,
        required: true
    }
});

module.exports = Cart = mongoose.model('cart',CartSchema);