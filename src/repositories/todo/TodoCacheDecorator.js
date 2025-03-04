class TodoCacheDecorator {
    constructor(mongoRepository, redisRepository) {
      this.mongoRepository = mongoRepository;
      this.redisRepository = redisRepository;
    }
  
    async create(todo) {
      const result = await this.mongoRepository.create(todo);
      await this.redisRepository.delete('todos:all');
      return result;
    }
  
    async findById(id) {
      const cacheKey = `todos:${id}`;
      const cached = await this.redisRepository.get(cacheKey);
      
      if (cached) return cached;
  
      const todo = await this.mongoRepository.findById(id);
      if (todo) {
        await this.redisRepository.set(cacheKey, todo);
      }
      return todo;
    }
  
    async findAll() {
      const cacheKey = 'todos:all';
      const cached = await this.redisRepository.get(cacheKey);
  
      if (cached) return cached;
  
      const todos = await this.mongoRepository.findAll();
      await this.redisRepository.set(cacheKey, todos);
      return todos;
    }
  
    async update(id, todo) {
      const result = await this.mongoRepository.update(id, todo);
      await this.redisRepository.delete(`todos:${id}`);
      await this.redisRepository.delete('todos:all');
      return result;
    }
  
    async delete(id) {
      const result = await this.mongoRepository.delete(id);
      await this.redisRepository.delete(`todos:${id}`);
      await this.redisRepository.delete('todos:all');
      return result;
    }
  }
  
  module.exports = TodoCacheDecorator;