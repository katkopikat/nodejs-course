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
  return board;
}

const deleteBoard = async boardId => {
  if (typeof boardId !== 'string') return -1;
  const boardIdx = DB.Boards.findIndex(board => board.id === boardId);

  if (boardIdx !== -1) {
    _.remove(DB.Boards, DB.Boards[boardIdx]);
  }
  return boardIdx;
}


module.exports = { getAllBoards, createBoard, getBoard, updateBoard, deleteBoard };
