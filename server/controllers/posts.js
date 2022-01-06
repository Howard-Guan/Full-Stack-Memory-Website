import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

//all the routes function goes here
//each of the function will need try and catch block to prevent loading from database
//failure
export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const createPost = async (req, res) =>{
    //set the post contain equals to the request body which sent by user in front end
    const post = req.body;
    //create a new post object to the database through argument(post)
    const newPost = new PostMessage(post);
    try{
        await newPost.save();

        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id!');
    }
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, {new: true});

    res.json(updatePost);
}

export const deletePost = async (req, res) => {
    const {id: _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id!');
    }
    
    await PostMessage.findByIdAndRemove(_id);
    res.json({message: 'Post deleted successfully'});
    
}

export const likePost = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id!');
    }
    
    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}