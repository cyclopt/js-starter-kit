import request from 'supertest';
import app from './app';

// A demo test
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

// Testing the API using supertest
describe('Test the users path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/users').expect(200);
    });
})
