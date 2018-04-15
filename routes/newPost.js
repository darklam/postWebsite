const express = require('express');
const router = express.Router();
const requiresLogin = require('../requiresLogin');
const User = require('../services/userService');
const Post = require('../services/postService');


router.get('/', requiresLogin, async (req, res) => {

    let user;

    try {

        user = await User.findUser({_id: req.session.userId});

    }catch(error) {

        console.log(error);

        res.redirect('/');

    }

    res.render('newPost', {username: user.username});

});

router.post('/', requiresLogin, async (req, res) => {

    let user;

    try {

        user = await User.findUser({_id: req.session.userId});

    }catch(error) {

        console.log(error);
        res.redirect('/');

    }

    let post = {
        usrId: user._id,
        dateAdded: Date.now(),
        content: req.body.content,
        upvotes: 0,
        downvotes: 0
    };

    let postAdded;

    try {

        postAdded = await Post.createPost(post);

    }catch(error) {

        console.log(error);
        res.redirect('/');
        
    }

    console.log(postAdded);

    res.redirect('/profile');


});

module.exports = router;
