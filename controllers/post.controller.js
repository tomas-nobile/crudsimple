const Post = require('../model/Post');
const urlExists = require('url-exists');

module.exports={

    addPost:async (req, res) => {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            image:urlExists(req.body.image)?req.body.image:req.body.image,
            category:req.body.category
        }).then(post => {
            res.json(post);
        })
    },

    getPost:async (req, res) => {
        Post.findByPk(req.params.id).then(post => {
            res.json(post);
        })
    },

    getAllPosts:async  (req, res) => {
        Post.findAll().then(posts => {
            res.json(posts);
        })
    },

    modifyPost:async (req, res) => {
        Post.update({
            title: req.body.title,
            content: req.body.content,
            image:urlExists(req.body.image)?req.body.image:req.body.image,
            category:req.body.category
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });
    },

    deletePost: async (req, res) => {
        Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }

}