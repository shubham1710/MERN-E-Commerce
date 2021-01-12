const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        },
        name: String,
        quantity: {
            type: Number,
            default: 0
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Cart = mongoose.model('cart',CartSchema);