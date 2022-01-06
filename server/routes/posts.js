import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

//update the exsiting post, therefore we need id as the dynamic identifier
router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

router.patch('/:id/likePost', likePost);

export default router;