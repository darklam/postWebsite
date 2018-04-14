const mongoose = require('mongoose');

const User = require('../models/userModel');

_this = this;

exports.createUser = async (user) => {

    let newUser = new User(user);

    try{

        let saved = await newUser.save();
        return saved;

    }catch(error){

        throw Error("Error when creating user: ", error);

    }

}

exports.findUser = async (query) => {

    let result;

    try{

        result = await User.findOne(query);

        return result;

    }catch(error){

        throw Error('Problem searching for user: ', error);

    }

}