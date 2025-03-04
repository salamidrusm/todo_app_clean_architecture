const Todo = require('../../infrastructure/database/mongodb/models/Todo');

class TodoMongoRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
  }

  async findAll() {
    return Todo.find();
  }

  async findById(id) {
    return Todo.findById(id);
  }

  async create(todoData) {
    const todo = new Todo(todoData);
    return todo.save();
  }

  async update(id, todoData) {
    return Todo.findByIdAndUpdate(id, todoData, { new: true });
  }

  async delete(id) {
    return Todo.findByIdAndDelete(id);
  }
}

module.exports = TodoMongoRepository;