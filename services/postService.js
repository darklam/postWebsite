const mongoose = require('mongoose');

const Post = require('../models/postModel');

_this = this;


exports.createPost = async (post) => {

    let newpost = new Post(post);

    try {

        let saved = await newpost.save();
        return saved;

    }catch(error){
        throw Error("Problem saving post: ", error);
    }

}

exports.getPost = async (query) => {

    let result;

    try{

        result = await Post.findOne(query);

        return result;

    }catch(error){

        throw Error('Problem searching for post: ', error);

    }

}

exports.getPosts = async (query) => {

    let results;

    try {

        results = await Post.find(query);

        return results;

    }catch(error) {

        throw Error('Error searching for posts: ', error);

    }

}

exports.deletePost = async (id) => {

    let deleted;

    try{

        deleted = await Post.remove({_id: id});

        if(deleted.result.n === 0) throw Error('Could not delete post');

        return deleted;

    }catch(error){

        throw Error('Problem deleting post: ', error);

    }

}

exports.updatePost = async (post) => {

    let oldPost;

    try{

        oldPost = await Post.findById(post._id);

    }catch(error){

        throw Error('Problem searching for todo: ', error);

    }

    oldPost.content = post.content;
    oldPost.upvotes = post.upvotes;
    oldPost.downvotes = post.downvotes;

    let saved;

    try{

        saved = await oldPost.save();

        return saved;

    }catch(error){

        throw Error('Problem when updating post: ', error);

    }

}