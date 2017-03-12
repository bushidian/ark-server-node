const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../models/user');

class UsersRepository {

    // get a User
    getUserByEmail(email, callback) {
        console.log('*** UsersRepository.getUserByEmail');

        var user = new User();
        user.email = email;
        user.name = email.substring(0, email.indexOf('@'));

        callback(null, user);
    }
}

module.exports = new UsersRepository();