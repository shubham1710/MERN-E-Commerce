const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: String,
        quantity: Number,
        price: Number
    }],
    address: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    }
})

module.exports = Order = mongoose.model('order',OrderSchema);