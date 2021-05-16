const router = require('express').Router();
const boardsService = require('./board.service');


router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards);
});


router.route('/:boardId').get(async (req, res) => {
    const board = await boardsService.getBoard(req.params.boardId);
    res.status(200).json(board);
 }
);


router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(board);
});


router.route('/:boardId').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.params.boardId, req.body);
  res.status(200).json(board);
});


router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const boardID = await boardsService.deleteBoard(boardId);
  if (boardID !== -1) {
    res.status(204).send('The board has been deleted');
  } else {
    res.status(404).send('Not Found');
  }
});


module.exports = router;