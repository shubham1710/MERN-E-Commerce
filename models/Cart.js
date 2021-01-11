const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const CartSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    itemsId: [{
        type: String
    }],
    bill: {
        type: Number,
        required: true
    }
});

module.exports = Cart = mongoose.model('cart',CartSchema);