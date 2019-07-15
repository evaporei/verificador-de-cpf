const request = require('supertest')
const app = require('../../app')

const {
  describe,
  expect,
  test
} = global

describe('Status', () => {
  test('GET /v1/status', (done) => {
    return request(app)
      .get('/v1/status')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) throw error

        const { uptime, amount } = response.body
        expect(uptime).toBeGreaterThanOrEqual(0)
        expect(amount).toHaveProperty('blacklist')
        expect(amount).toHaveProperty('searches')

        const { blacklist, searches } = amount
        expect(searches).toBeGreaterThanOrEqual(0)
        expect(blacklist).toBeGreaterThanOrEqual(0)
        done()
      })
  })
})
