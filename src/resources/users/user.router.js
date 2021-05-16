const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
    const user = await usersService.getUser(req.params.userId);
    res.status(200).json(User.toResponse(user));
 }
);

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json(User.toResponse(user));
});


router.route('/:userId').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.userId, req.body);
  res.status(200).json(User.toResponse(user));
});


router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  await usersService.deleteUser(userId);
  res.status(204).json(userId);
});


module.exports = router;
