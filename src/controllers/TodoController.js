class TodoController {
  constructor(todoUseCases) {
    this.todoUseCases = todoUseCases;
  }

  async getAllTodos(req, res, next) {
    try {
      const todos = await this.todoUseCases.getAllTodos();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(req, res, next) {
    try {
      const todo = await this.todoUseCases.getTodoById(req.params.id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  async createTodo(req, res, next) {
    try {
      const todo = await this.todoUseCases.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async updateTodo(req, res, next) {
    try {
      const todo = await this.todoUseCases.updateTodo(req.params.id, req.body);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req, res, next) {
    try {
      const success = await this.todoUseCases.deleteTodo(req.params.id);
      if (!success) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TodoController;