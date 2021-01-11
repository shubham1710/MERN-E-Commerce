const mongoose = require('mongoose');
const Schema = mongoose.Schema();
var ItemSchema = require('./ItemSchema');
var UserSchema = require('./UserSchema');

const OrderSchema = new Schema({
    user: UserSchema,
    items: [ItemSchema],
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