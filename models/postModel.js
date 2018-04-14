const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let postSchema = new Schema({
    usrId: Schema.Types.ObjectId,
    dateAdded: Date,
    content: String,
    upvotes: Number,
    downvotes: Number
});

const postModel = mongoose.model('postModel', postSchema);

module.exports = postModel;