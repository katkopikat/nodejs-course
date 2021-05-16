const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();
const createBoard  = data => boardsRepo.createBoard(data);
const getBoard = id => boardsRepo.getBoard(id);
const updateBoard  = (id, data) => boardsRepo.updateBoard(id, data);

const deleteBoard = async id => {
    const deletedId = await boardsRepo.deleteBoard(id);

    if (deletedId) {
        await tasksRepo.deleteBoardTasks(deletedId);
    }
    
    return deletedId;
};

module.exports = { getAllBoards, createBoard, getBoard, updateBoard, deleteBoard };