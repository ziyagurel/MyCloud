import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

// eş zamansız çalışması için async kullanılır.
// aynı zamanda ağırlığı dengelemek için await kullanımıda yapılır. Örnek olarak update metodu...

//get motod
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//create metod
export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

//update metod
export const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true}); 

    res.json(updatePost);
}