class TodoUseCases {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async createTodo(todoData) {
    return this.todoRepository.create(todoData);
  }

  async getTodoById(id) {
    return this.todoRepository.findById(id);
  }

  async getAllTodos() {
    return this.todoRepository.findAll();
  }

  async updateTodo(id, todoData) {
    return this.todoRepository.update(id, todoData);
  }

  async deleteTodo(id) {
    return this.todoRepository.delete(id);
  }
}

module.exports = TodoUseCases;