const mongoose = require('mongoose');
const Schema = mongoose.Schema();
var ItemSchema = require('./ItemSchema');
var UserSchema = require('./UserSchema');

const OrderSchema = new Schema({
    user: UserSchema,
    items: [ItemSchema]
})

module.exports = Order = mongoose.model('order',OrderSchema);