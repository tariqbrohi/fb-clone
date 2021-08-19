let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let user = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String
    }
);

module.exports = mongoose.model('User', user);