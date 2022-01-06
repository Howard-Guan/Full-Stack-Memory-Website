import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


//'PostMessage' is the name that you gave the model, it can be anything you like
//then we use mongoose.model() to link the Schema with the model we create
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;