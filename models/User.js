const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const bcrypt = require('bcrypt');

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
    register_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email');
}

module.exports = User = mongoose.model('user',UserSchema);