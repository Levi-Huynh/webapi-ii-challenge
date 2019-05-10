
const express = require('express');
const Posts = require('./db.js');
const router = express.Router();


router.get('/', async (req, res) => {
 
    try{
        const posts = await Posts.find();
   
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: 'The posts information could not be retrieved.'
        });
    }


});

router.post('/', async (req, res) => {
    try{
         const {title, contents} = req.body;
        const posts = await Posts.insert({title, contents});
        if (!title || !contents) {
            res.status(400).json({message: 'Please provide title and contents for the post'})
        } else {
            res.status(201).json({message: 'posts created'});
    }
    }catch (error) {
        res.status(500).json({
            message: 'Error saving posts.'
        });
    }
});





module.exports= router;