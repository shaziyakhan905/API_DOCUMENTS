// controllers/userController.js
const UserModel = require('../models/userModel');

exports.getUsers = (req, res) => {
  const users = UserModel.getAllUsers();
  res.json(users);
};

exports.addUser = (req, res) => {
  const newUser = UserModel.createUser(req.body);
  res.status(201).json(newUser);
};

exports.viewUser = (req, res) => {
  const newUser = UserModel.createUser(req.body);
  res.status(201).json(newUser);
};