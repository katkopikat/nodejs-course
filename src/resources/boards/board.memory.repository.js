const _ = require('lodash');
const DB = require('../../common/db');
const Board = require('./board.model');

const getAllBoards = async () => DB.Boards;

const createBoard = async data => {
  const board = new Board(data);
  DB.Boards.push(board);
  return board
}

const getBoard = async id => {
  const board =  DB.Boards.find(el => el.id === id);
  return board;
}


const updateBoard = async (id, data) => {
  const board = DB.Boards.find(el => el.id === id);
  _.assign(board, data);
  return board
}

const deleteBoard = async id => {
  const board = DB.Boards.find(el => el.id === id);
  console.log(board)
  const [deletedBoard] = _.remove(DB.Boards, board);
  console.log(deletedBoard)
  return deletedBoard ? deletedBoard.id : null;
}


module.exports = { getAllBoards, createBoard, getBoard, updateBoard, deleteBoard };
