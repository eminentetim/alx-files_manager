import redisClient from './utils/redis';

(async () => {
  // Check if Redis is alive
  console.log('Redis alive:', redisClient.isAlive());

  // Set a key in Redis
  await redisClient.set('myKey', 'myValue', 3600);
  console.log('Key set');

  // Get the key from Redis
  const value = await redisClient.get('myKey');
  console.log('Value:', value);

  // Delete the key from Redis
  await redisClient.del('myKey');
  console.log('Key deleted');
})();
