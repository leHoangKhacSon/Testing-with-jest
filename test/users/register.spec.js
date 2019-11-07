const axios = require('axios')

describe('POST /api/register', () => {
  // de trong tat ca cac truong 
  it('test case 1', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username least 6 characters',
        'password least 6 characters',
        'rePassword least 6 characters'
      ])
    }
  })
  // de trong truong username
  it('test case 2', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          password: '123456',
          rePassword: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username least 6 characters'
      ])
    }
  })
  // de trong truong password
  it('test case 3', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son123',
          rePassword: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'password least 6 characters'
      ])
    }
  })
  // de trong truong rePassword
  it('test case 4', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son123',
          password: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'rePassword least 6 characters'
      ])
    }
  })
  // username duoi 6 ky tu
  it('test case 5', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son12',
          password: '123456',
          rePassword: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'username least 6 characters'
      ])
    }
  })
  // password duoi 6 ky tu
  it('test case 6', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son123',
          password: '12345',
          rePassword: '12345'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'password least 6 characters'
      ])
    }
  })
  // nhap lai mat khau sai
  it('test case 7', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son123',
          password: '123456',
          rePassword: '1234567'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual([
        'password not match'
      ])
    }
  })
  // username da ton tai
  it('test case 8', async () => {
    try {
      const res = await axios.post(
        'http://localhost:7000/api/user/register',
        {
          username: 'son123456',
          password: '123456',
          rePassword: '123456'
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(400)
      expect(error.response.data).toEqual('username existed');
    }
  })
  // pass het
  it('test case 9', async () => {
    const res = await axios.post(
      'http://localhost:7000/api/user/register',
      {
        username: 'sonlee123',
        password: '123456',
        rePassword: '123456'
      }
    );
    expect(res.status).toEqual(200)
    expect(res.data).toHaveProperty('token')
    expect(res.data).toHaveProperty('userId')
  })
});
