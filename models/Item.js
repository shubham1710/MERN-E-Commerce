const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Text,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        required: true,
        default: 0
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);
