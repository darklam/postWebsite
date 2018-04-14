const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    if(req.session && req.session.userId){

        req.session.destroy((err) => {

            if(err) console.log(err);

            res.redirect('/');

        })

    }

});

module.exports = router;