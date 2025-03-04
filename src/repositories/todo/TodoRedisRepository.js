class TodoRedisRepository {
    constructor(redisClient) {
      this.redis = redisClient;
      this.CACHE_EXPIRATION = 3600;
    }
  
    async get(key) {
      const cached = await this.redis.get(key);
      return cached ? JSON.parse(cached) : null;
    }
  
    async set(key, value) {
      await this.redis.setEx(key, this.CACHE_EXPIRATION, JSON.stringify(value));
    }
  
    async delete(key) {
      await this.redis.del(key);
    }
  }
  
  module.exports = TodoRedisRepository;