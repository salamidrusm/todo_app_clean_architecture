const Redis = require('redis');

const connectRedis = async () => {
  const client = Redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });

  client.on('error', (err) => console.log('Redis Client Error', err));
  
  await client.connect();
  
  console.log('Redis connected successfully');
  return client;
};

module.exports = connectRedis;