

let requiresLogin = (req, res, next) => {

    if(req.session && req.session.userId){
        next();
    }else{
        res.redirect('/login');
    }

}

module.exports = requiresLogin;