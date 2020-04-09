const express = require('express');
const helmet = require('helmet');

const server = express();
// Posts & User Router

const userRouter = require('./users/userRouter.js');



// Middleware - Global
server.use(express.json()); // built-in Middleware
server.use(helmet());

// routes - endpoints
server.get('/',  (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
server.use('/api/users', logger, userRouter);


//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} Request to ${req.originalUrl}`
  );
  next();
}


module.exports = server;