const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();
const createBoard  = data => boardsRepo.createBoard(data);
const getBoard = id => boardsRepo.getBoard(id);
const updateBoard  = (id, data) => boardsRepo.updateBoard(id, data);

const deleteBoard = id => {
    boardsRepo.deleteBoard(id);
    tasksRepo.deleteBoardTasks(id);
};

module.exports = { getAllBoards, createBoard, getBoard, updateBoard, deleteBoard };