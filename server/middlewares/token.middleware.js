const jwt = require('jsonwebtoken');

module.exports.checkToken = (req, res, next) => {
  // fetch token in request
  // const token = req.headers.authorization.split(' ')[1];
  const token = req.headers.authorization;
  if(!token) {
    // if header don't has token
    res.status(401).send('No token provided');
  }
  // verify token
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if(payload) {
      req.user = payload;
      next();
    } else {
      // if token exists but not valid
      res.status(401).send('Unauthorized');
    }
  })
}

module.exports.protectedRoute = (req, res, next) => {
  // if req.token exists is token exists
  if(req.user) {
    return next();
  }
  // else token not exists
  res.status(401).send('anauthorized');
}