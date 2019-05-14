
  const express = require('express');
  const cors = require('cors');

  const postsRouter = require('./posts/posts-router.js');



const server = express();

server.use(express.json());

server.use(cors());

server.get('/', async (req, res) => {
  try {
    res.send(`<h2>Intro to Node.js Night 2</h2>`);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

// server.post('/', async (req, res) => {
//   try {
//     const [id] = await db('shoutouts').insert(req.body);
//     const shoutouts = await db('shoutouts');

//     res.status(201).json(shoutouts);
//   } catch (error) {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot add the shoutout' });
//   }
// });

server.use('/api/posts', postsRouter);

module.exports = server;