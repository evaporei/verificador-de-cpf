const request = require('supertest')
const app = require('../../app')

const {
  describe,
  expect,
  test
} = global

describe('CPF', () => {
  test('Blacklist', async (done) => {
    const testCpf = '268.905.480-94'
    const testCpfNumbers = '26890548094'

    const postResponse = await request(app)
      .post('/v1/cpf')
      .send({ cpf: testCpf })
      .expect('Content-Type', /json/)
      .expect(200)

    const { body: postBody } = postResponse
    expect(postBody.cpf).toBe(testCpfNumbers)
    expect(postBody.blacklisted).toBe(true)

    const firstGetResponse = await request(app)
      .get(`/v1/cpf?cpf=${testCpf}`)
      .expect('Content-Type', /json/)
      .expect(200)

    const { body: firstGetBody } = firstGetResponse
    expect(firstGetBody.cpf).toBe(testCpfNumbers)
    expect(firstGetBody.blacklisted).toBe(true)

    const deleteResponse = await request(app)
      .delete(`/v1/cpf?cpf=${testCpf}`)
      .expect('Content-Type', /json/)
      .expect(200)

    const { body: deleteBody } = deleteResponse
    expect(deleteBody.cpf).toBe(testCpfNumbers)
    expect(deleteBody.blacklisted).toBe(false)

    const secondGetResponse = await request(app)
      .get(`/v1/cpf?cpf=${testCpf}`)
      .expect('Content-Type', /json/)
      .expect(200)

    const { body: secondGetBody } = secondGetResponse
    expect(secondGetBody.cpf).toBe(testCpfNumbers)
    expect(secondGetBody.blacklisted).toBe(false)

    done()
  })

  test('Invalid CPF', async (done) => {
    const invalidCpf = '000.000.000-99'

    const response = await request(app)
      .get(`/v1/cpf?cpf=${invalidCpf}`)
      .expect('Content-Type', /json/)
      .expect(400)

    const { body } = response
    const { message } = body
    expect(message).toBe('Invalid CPF number')

    done()
  })
})
