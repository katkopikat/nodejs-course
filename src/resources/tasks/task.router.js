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
    const { taskId, boardId } = req.params;
    const idx = await tasksService.deleteTask(taskId, boardId);

    if (idx !== -1) {
      res.status(204).send('The task has been deleted');
    } else {
      res.status(404).send('Not Found');
    }
    
});


module.exports = router;
