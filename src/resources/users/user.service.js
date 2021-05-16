const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();
const createUser = data => usersRepo.createUser(data);
const getUser = id => usersRepo.getUser(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);

const deleteUser = id =>  {
    usersRepo.deleteUser(id);
    tasksRepo.updateDeletedUserTasks(id);
}

module.exports = { getAllUsers, createUser, getUser, updateUser, deleteUser };