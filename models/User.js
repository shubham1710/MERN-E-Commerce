var UserSchema = require('./UserSchema');
module.exports = User = mongoose.model('user',UserSchema);