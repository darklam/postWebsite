const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;


let userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next){

    let currentUser = this;

    console.log('Pass: ', currentUser.password);

    bcrypt.hash(currentUser.password, 10).then((hash) => {

        currentUser.password = hash;
        next();

    }).catch((error) => {

        console.log('Error hashing password: ', error);

    });

});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;