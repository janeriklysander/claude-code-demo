const request = require('supertest');
const app = require('../app');

describe('Express App', () => {
  test('GET / should return 200 status', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.text).toContain('Express');
  });

  test('GET /users should return 200 status', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);
    
    expect(response.text).toContain('respond with a resource');
  });

  test('GET /nonexistent should return 404 status', async () => {
    await request(app)
      .get('/nonexistent')
      .expect(404);
  });
});