'use strict';

const { server } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 200 on request to /', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
  });

});