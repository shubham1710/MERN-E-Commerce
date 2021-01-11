const mongoose = require('mongoose');
const Schema = mongoose.Schema();

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
    date_added: {
        type: Date,
        default: Date.now
    }
});
