class AuthController {

    constructor(router) {
       router.post('/login', this.login.bind(this));
       router.post('/logout', this.login.bind(this));
    }
    
    login(req, res){
        res.json(true);
    }

    logout(req, res){
        res.json(true);
    }
    
}

module.exports = AuthController;