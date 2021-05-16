const usersRepo = require('./task.memory.repository');

const getAllTasks = () => usersRepo.getAllTasks();
const createTask = data => usersRepo.createTask(data);
const getTask = id => usersRepo.getTask(id);
const updateTask = (id, data) => usersRepo.updateTask(id, data);
const deleteTask = id =>  usersRepo.deleteTask(id);

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };