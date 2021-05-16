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

const updateDeletedUserTasks = async userID => {
  DB.Tasks.forEach(task => {
    const curTask = task;
    if (curTask.userId === userID) {
      curTask.userId = null;
    }
  });
}

const deleteTask = async (boardId, taskId) => {
  if (typeof taskId !== 'string' || typeof boardId !== 'string') return -1;

  const deletedTask = DB.Tasks.findIndex(task => task.id === taskId && task.boardId === boardId);
  if (deletedTask === -1) return -1;
 
  _.remove(DB.Tasks, DB.Tasks[deletedTask]);
  return deletedTask;
}


const deleteBoardTasks = async boardID => {
  if (typeof boardID !== 'string') return -1;

  const boardIdx = DB.Boards.findIndex(board => board.id === boardID);
  if (boardIdx !== -1) return -1;
  
  const deletedTasks = DB.Tasks.filter(task => task.boardId === boardID);
  _.remove(DB.Tasks, deletedTasks);
  return deletedTasks;
}



module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, deleteBoardTasks, updateDeletedUserTasks};
