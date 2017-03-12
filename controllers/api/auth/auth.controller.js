const usersRepo = require('../../../lib/usersRepository'),
    util = require('util');

class AuthController {

    constructor(router) {
        router.post('/login', this.login.bind(this));
        router.post('/logout', this.login.bind(this));
    }

    login(req, res) {
        console.log('*** login ****');
        var email = req.body.email;
        usersRepo.getUserByEmail(email, (err, user) => {
            if (err) {
                console.log('*** login error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** login ok');
                res.json({
                    status: true,
                    error: null,
                    data: user
                });
            }
        });

    }

    logout(req, res) {
        res.json(true);
    }

}

module.exports = AuthController;