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

const deleteBoardTasks = async boardID => {
  // const tasks = DB.Tasks.filter(task => task.boardId === boardID);
  _.remove(DB.Tasks, task => task.boardId === boardID);
}

const updateDeletedUserTasks = async userID => {
  DB.Tasks.forEach(el => {
    // eslint-disable-next-line no-param-reassign
    el.userId = el.userId === userID ? null : el.userId;
  });

}
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, deleteBoardTasks, updateDeletedUserTasks};
