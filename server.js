
  const express = require('express');
  const cors = require('cors');

  const postsRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', async (req, res) => {
  try {
      const shoutouts = await postsRouter('shoutouts');
    res.status(200).json({messageOfTheDay: process.env.MOTD, shoutouts
  });
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

server.use('/api/posts', postsRouter);

module.exports = server;