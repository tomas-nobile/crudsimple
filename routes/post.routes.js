const express = require('express');
const router = express.Router();
const {addPost, getAllPosts, getPost, deletePost, modifyPost}= require("../controllers/post.controller")

router.get('/',getAllPosts)

router.post('/', addPost);

router.get('/:id',getPost );

router.patch('/:id',modifyPost );

router.delete('/:id',deletePost );

module.exports = router;