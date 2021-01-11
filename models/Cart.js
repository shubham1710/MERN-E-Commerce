const mongoose = require('mongoose');
const Schema = mongoose.Schema();
var ItemSchema = require('./ItemSchema');
var UserSchema = require('./UserSchema');

const CartSchema = new Schema({
    user: UserSchema,
    items: [ItemSchema],
    bill: {
        type: Number,
        required: true
    }
});

module.exports = Order = mongoose.model('cart',CartSchema);