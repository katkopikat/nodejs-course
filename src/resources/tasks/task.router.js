const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');


router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  res.json(tasks);
});


router.route('/:id').get(async (req, res) => {
    const task = await tasksService.getTask(req.params.id);
    res.status(200).json(task);
 }
);


router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask({...req.body, ...req.params});
  res.status(201).json(task);
});


router.route('/:id').put(async (req, res) => {
  const task = await tasksService.updateTask(req.params.id, {...req.body, ...req.params});
  res.status(200).json(task);
});


router.route('/:id').delete(async (req, res) => {
  const task  = await tasksService.deleteTask(req.params.id);
  if (task) {
    res.status(204).json(req.params.id);
  } else {
    res.sendStatus(404);
  }
});


module.exports = router;
