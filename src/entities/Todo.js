class Todo {
  constructor(id, title, description, completed = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

module.exports = Todo;