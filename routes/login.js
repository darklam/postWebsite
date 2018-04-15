const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../services/userService');

router.get('/', (req, res) => {

    res.render('login');

});

router.post('/', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let user;

    try{
        user = await User.findUser({ username: username });
    }catch(error){
        console.log(error);
        res.redirect('/');
    }

    if(!user){
        console.log('User not found');
    }

    let result;

    try {

        result = await bcrypt.compare(password, user.password);

    }catch(error){

        console.log(error);

    }

    if(result === true){

        console.log('Authenicated!');
        req.session.userId = user._id;
        res.redirect('/profile');

    }else{

        console.log('Wrong password');
        res.redirect('/login');

    }

});

module.exports = router;