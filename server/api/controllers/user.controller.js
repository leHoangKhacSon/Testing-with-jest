const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const brcypt = require('bcrypt');

module.exports.register = async (req, res, next) => {
  const { username, password, rePassword } = req.body;
  let err = [];
  if(!username) {
    err.push('username cannot be blank');
  }
  if(!password) {
    err.push('password cannot be blank');
  }
  if(!rePassword) {
    err.push('rePassword cannot be blank');
  }
  if(err.length > 0) {
    res.status(400).send(err);
    return;
  }
  err = [];
  if(password !== rePassword) {
    err.push('password does not match');
  }
  if(password.length < 6) {
    err.push('password must be at least 6 characters');
  }
  if(username.trim().length < 6) {
    err.push('username must be at least 6 characters');
  }
  if(err.length > 0) {
    res.status(400).send(err);
    return;
  }
  const findusername = await User.findOne({username});
  if(findusername) {
    res.status(400).send('username exists');
    return;
  }
  // username not exists in database
  // hash password
  const salt = await brcypt.genSalt(10);
  const hashPassword = await brcypt.hash(password, salt);
  // create object new User
  const newUser = new User ({
    username,
    password: hashPassword
  });

  try {
    // save user to database
    const saveNewUser = await newUser.save();
    // create token
    const token = jwt.sign({ userId: saveNewUser }, process.env.SECRET_KEY);
    // send response to client
    res.status(200).send({
      userId: saveNewUser.id,
      token
    });
  } catch (error) {
    res.status(401).send('register fail');
  }
}

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let err = [];
    if(username == null) {
      err.push('username cannot be blank');
    }
    if(!password) {
      err.push('password cannot be blank');
    }
    if(err.length > 0) {
      res.status(400).send(err);
      return;
    }
    err = [];
    if(password.length < 6) {
      err.push('password must be at least 6 characters');
    }
    if(username.trim().length < 6) {
      err.push('username must be at least 6 characters');
    }
    if(err.length > 0) {
      res.status(400).send(err);
      return;
    }
    const findUser = await User.findOne({username});
    // if username not exists database
    if(!findUser) {
      res.status(400).send('username does not exists');
      return;
    }
    // else username existed in database
    //checkpassword
    const validPassword = await brcypt.compare(password, findUser.password);
    if(!validPassword) {
      res.status(400).send('password wrong');
      return;
    }
    // pass all
    // create token
    const token = jwt.sign({ userId: findUser.id }, process.env.SECRET_KEY);
    // send response to client
    res.status(200).send({
      userId: findUser.id,
      token
    });
  } catch (error) {
    res.status(401).send('login fail');
  }
} 