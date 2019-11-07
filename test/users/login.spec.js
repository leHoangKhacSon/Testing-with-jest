const axios = require('axios')

describe('POST /api/login', () => {
  // de trong tat ca cac truong
  it('test case 10', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login'
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username cannot be blank',
        'password cannot be blank'
      ])
    }
  })
  // de trong username
  it('test case 11', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
          password: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username cannot be blank'
      ])
    }
  })
  // de trong password
  it('test case 12', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
          username: 'son123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'password cannot be blank'
      ])
    }
  })
  // username duoi 6 ky tu
  it('test case 13', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
          username: 'son12',
          password: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username must be at least 6 characters'
      ])
    }
  })
  // password duoi 6 ky tu
  it('test case 14', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
          username: 'son123456',
          password: '12345'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'password must be at least 6 characters'
      ])
    }
  })
  // username khong ton ta
  it('test case 15', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
          username: 'khacson123',
          password: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual(
        'username does not exists'
      )
    }
  })
  // username ton tai mat khau sai
  it('test case 16', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/login',
        {
            username: 'son123456',
            password: '123456789'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual(
        'password wrong'
      )
    }
  })
  // pass het
  it('test case 17', async () => {
    const res = await axios.post(
      'http://localhost:7000/api/user/login',
      {
        username: 'son123456',
        password: '123456'
      }
    );
    expect(res.status).toEqual(200)
    expect(res.data).toHaveProperty('token')
    expect(res.data).toHaveProperty('userId')
  })
});


