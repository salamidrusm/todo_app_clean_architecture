const express = require('express');
const router = express.Router();

const todoRoutes = (todoController) => {
  router.get('/', todoController.getAllTodos.bind(todoController));
  router.get('/:id', todoController.getTodoById.bind(todoController));
  router.post('/', todoController.createTodo.bind(todoController));
  router.put('/:id', todoController.updateTodo.bind(todoController));
  router.delete('/:id', todoController.deleteTodo.bind(todoController));

  return router;
};

module.exports = todoRoutes;