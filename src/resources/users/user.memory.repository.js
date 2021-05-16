const _ = require('lodash');
const DB = require('../../common/db');
const User = require('./user.model');

const getAllUsers = async () => DB.Users;

const createUser = async data => {
  const user = new User(data);
  DB.Users.push(user);
  return User.toResponse(user)
}

const getUser = async id => {
  const user =  DB.Users.find(el => el.id === id);
  return  User.toResponse(user)
}


const updateUser = async (id, data) => {
  const user = DB.Users.find(el => el.id === id);
  _.assign(user, data);
  return User.toResponse(user)
}

const deleteUser = async id => {
  const user = DB.Users.find(el => el.id === id);
  _.remove(DB.Users, user);
}


module.exports = { getAllUsers, createUser, getUser, updateUser, deleteUser };
