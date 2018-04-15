const express = require('express');
const requiresLogin = require('../requiresLogin');
const router = express.Router();

const User = require('../services/userService');
const Post = require('../services/postService');

router.get('/', requiresLogin, async (req, res) => {

    let id = req.session.userId;

    let user;

    try{

        user = await User.findUser({ _id: id });

    }catch(error){

        console.log(error);

    }

    let posts;

    try {

        posts = await Post.getPosts({usrId: id});

    }catch(error){

        console.log(error);
        res.redirect('/');

    }

    console.log(posts);

    res.render('profile', {user: user, posts: posts});

});

module.exports = router;