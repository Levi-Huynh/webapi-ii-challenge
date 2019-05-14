
  const express = require('express');
  const cors = require('cors');

  const postsRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', (req, res) => {

    res.send(`<h2>Intro to Node.js Night 2</h2>`);
});

server.use('/api/posts', postsRouter);

module.exports = server;