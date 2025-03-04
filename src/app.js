const express = require('express');
const mongoose = require('mongoose');
const appConfig = require('./config/app.config');
const connectDB = require('./infrastructure/database/mongodb/mongoClient');
const connectRedis = require('./infrastructure/database/redis/redisClient');
const errorHandler = require('./middleware/errorHandler');
const TodoUseCases = require('./useCases/TodoUseCases');
const TodoController = require('./controllers/TodoController');
const todoRoutes = require('./routes/todoRoutes');
const { 
    TodoMongoRepository, 
    TodoRedisRepository, 
    TodoCacheDecorator 
  } = require('./repositories/todo');

const app = express();

// Middleware
app.use(express.json());

const initializeApp = async () => {
  // Database connections
  await connectDB();
  const redisClient = await connectRedis();

  // Dependencies
  const mongoRepository = new TodoMongoRepository(mongoose);
  const redisRepository = new TodoRedisRepository(redisClient);
  const todoRepository = new TodoCacheDecorator(mongoRepository, redisRepository);
  const todoUseCases = new TodoUseCases(todoRepository);
  const todoController = new TodoController(todoUseCases);

  // Routes
  app.use(`${appConfig.api.prefix}/todos`, todoRoutes(todoController));

  // Error Handler
  app.use(errorHandler);

  app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
  });
};

initializeApp().catch(console.error);