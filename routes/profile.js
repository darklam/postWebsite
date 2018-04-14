const express = require('express');
const router = express.Router();

const User = require('../services/userService');

let requiresLogin = (req, res, next) => {

    if(req.session && req.session.userId){
        next();
    }else{
        res.redirect('/login');
    }

}

router.get('/', requiresLogin, async (req, res) => {

    let id = req.session.userId;

    let user;

    try{

        user = await User.findUser({ _id: id });

    }catch(error){

        console.log(error);

    }

    res.render('profile', user);

});

module.exports = router;