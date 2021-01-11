const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true,
        default: 'Customer'
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user',UserSchema);