
const express = require('express');
const Posts = require('./db.js');
const router = express.Router();

//got mvp for deployment

router.get('/', async (req, res) => {

    try {
        const posts = await Posts.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: 'The posts information could not be retrieved.'
        });
    }


});


router.post('/', async (req, res) => {
    try {
        const { title, contents } = req.body;
        const posts = await Posts.insert({ title, contents });
        if (!title || !contents) {
            res.status(400).json({ message: 'Please provide title and contents for the post' })
        } else {
            res.status(201).json({ message: 'posts created' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error saving posts.'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'post not found' });
        }
    } catch (error) {

        res.status(500).json({
            message: 'Error retrieving the post',
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const old = await Posts.findById(req.params.id);
        console.log(old);
        const number = await Posts.remove(req.params.id);
        if (number) {
            res.status(200).json({ number, deletedPost: old });
        } else {
            res.status(404).json({ message: 'Post with the specified ID does not exist' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Post could not be moved'
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { title, contents } = req.body
        const post = await Posts.update(req.params.id, { title, contents });
        const newPost = await Posts.findById(req.params.id);
        if (!title || !contents) {
            res.status(400).json({ message: 'Please provide title and contents for the post.' })
        } if (post) {
            res.status(200).json({ post, newPost: newPost });
        } else {
            res.status(404).json({ message: "The post with specified ID does not exist" })
        }

    } catch (error) {
        res.status(500).json({
            message: 'Post could not be modified'
        });
    }
});


module.exports = router;