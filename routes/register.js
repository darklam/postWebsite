const express = require('express');
const router = express.Router();
const User = require('../services/userService');


router.post('/newUser', (req, res) => {


    const body = req.body;

    if(
        body.email &&
        body.username &&
        body.password
    ){

        let userData = {
            email: body.email,
            username: body.username,
            password: body.password
        };

        User.createUser(userData).then((user) => {
            
            console.log('User created successfully: ', user);

            res.redirect('/login');

        }).catch((error) => {
            
            console.log('Error: ', error);

        });

    }

});

router.get('/', (req, res) => {

    res.render('register');

});

module.exports = router;