const request = require('supertest');
const app = require('../app');

describe('Hello World Endpoint', () => {
  test('GET /hello should return hello world message', async () => {
    const response = await request(app)
      .get('/hello')
      .expect(200);
    
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });
});