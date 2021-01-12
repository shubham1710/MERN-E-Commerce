const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})

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