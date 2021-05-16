const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');


router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards);
});


router.route('/:id').get(async (req, res) => {
    const board = await boardsService.getBoard(req.params.id);
    res.status(200).json(board);
 }
);


router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(board);
});


router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.params.id, req.body);
  res.status(200).json(board);
});


router.route('/:id').delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  res.status(204).json(req.params.id);
});


module.exports = router;
