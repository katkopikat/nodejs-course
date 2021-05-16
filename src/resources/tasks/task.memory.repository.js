const _ = require('lodash');
const DB = require('../../common/db');
const Task = require('./task.model');

const getAllTasks = async () => DB.Tasks;

const createTask = async data => {
  const task = new Task(data);
  DB.Tasks.push(task);
  return task;
}

const getTask = async id => {
  const task =  DB.Tasks.find(el => el.id === id);
  return task;
}


const updateTask = async (id, data) => {
  const task = DB.Tasks.find(el => el.id === id);
  _.assign(task, data);
  return task;
}

const deleteTask = async id => {
  const task = DB.Tasks.find(el => el.id === id);
  const [ deleted ] = _.remove(DB.Tasks, task);
  return deleted ? deleted.id : null;
}


module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
