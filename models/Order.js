const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const OrderSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    itemsId: [{
        type: String
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