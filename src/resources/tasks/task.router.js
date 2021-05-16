const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');


router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  res.json(tasks);
});


router.route('/:taskId').get(async (req, res) => {
    const task = await tasksService.getTask(req.params.taskId);
    res.status(200).json(task);
 }
);


router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask({...req.body, ...req.params});
  res.status(201).json(task);
});


router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.updateTask(req.params.taskId, {...req.body, ...req.params});
  res.status(200).json(task);
});


router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const task = await tasksService.deleteTask(taskId);

  if (task) {
    res.status(204).json(taskId);
  } else {
    res.sendStatus(404);
  }
});


module.exports = router;
