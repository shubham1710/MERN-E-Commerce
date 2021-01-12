const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    // incorrect email
    if(err.message==='incorrect email'){
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if(err.message==='incorrect password'){
        errors.password = 'That password is incorrect';
    }

    // duplicates error codes
    if(err.code===11000){
        errors.email = 'That email is already registered';
        return errors;
    }
  
    // validation error
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const maxAge = 3 * 24 * 60 * 60;

// create jwt and send in cookie to browser
const createToken = (id) => {
    return jwt.sign({ id }, config.get('jwtsecret'), {
        expiresIn: maxAge
    });
}

module.exports.signup = async (req,res) => {
    const { name, email, password } = req.body;
    try{
        const user = await User.create({name, email, password});
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({user: user._id});
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(401).json({errors});
    }
}

module.exports.login = async (req,res) => {
    const { email, password } = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({user: user._id});
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

module.exports.logout = (req,res) => {
    res.cookie('jwt','', {maxAge: 1});
    res.send('Success!');
}