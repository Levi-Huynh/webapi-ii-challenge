exports.seed = function(knex, Promise) {
  return knex('posts')
    .truncate()
    .then(function() {
      return knex('posts').insert([
        {
          title:
            'DJANGO',
          contents: 'A free, open source, web application framework written in Python which follows the model-view-controller (MVC) framework.',
        },
        {
          title: 'DEPLOYMENT',
          contents: 'Software deployment is all of the activities that make a software system available for use.',
        },
        {
          title:
            "EXPRESS.JS",
          contents: 'Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications.',
        },
        {
          title:
            " FRAMEWORK",
          contents: 'A framework is often a layered structure indicating what kind of programs can or should be built and how they would interrelate.',
        },
        {
          title:
            'GIT/GITHUB',
          contents: 'A micro web application framework written in Python and based on the Werkzeug toolkit and Jinja2 template engine.',
        },
        {
          title:
            'HTTP REQUEST',
          contents: 'HyperText Transfer Protocol is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web.',
        },
        {
          title:
            'JQUERY',
          contents: 'jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.',
        },
        {
          title:
            ' LINUX',
          contents: 'Linux is a unix-like computer operating system assembled under the model of free and open-source software development and distribution.',
        },
        {
          title:
            'LOCAL STORAGE',
          contents: 'The data placed in local storage is per origin (the combination of protocol, hostname, and port number as defined in the same-origin policy).',
        },
      ]);
    });
};
