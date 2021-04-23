const {expect} = require('chai')
const { syncAndSeed } = require('../db')

const app = require('supertest')(require('../app'))

describe('Routes', () => {
  breforeEach(()=> syncAndSeed())
  describe('GET /', () => {
    it('GET /', async()=> {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme Movie API')
    })
  })
})
