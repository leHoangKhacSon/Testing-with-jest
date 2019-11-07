const axios = require('axios')

describe('GET /api/books', () => {
  // khong gui token
  it('test case 18', async () => {
    try {
      const res = await axios.get(
        'http://localhost:7000/api/books'
      );
    } catch (error) {
      expect(error.response.status).toEqual(401)
      expect(error.response.data).toEqual(
        'No token provided'
      )
    }
  })
  // gui token nhung sai
  it('test case 19', async () => {
    try {
      const res = await axios.get(
        'http://localhost:7000/api/books', 
        {
          headers: {
            authorization: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGMyZDdmMWNkZmQ2YjE4ZDcwM2EyZDEiLCJpYXQiOjE1NzMwNTIxNTJ9.KB4nZ_wZKLHN6mBWfjW69peLvvPgqluLgui-1CWOFKo'
          }
        }
      );
    } catch (error) {
      expect(error.response.status).toEqual(401)
      expect(error.response.data).toEqual(
        'Unauthorized'
      )
    }
  })
  // gui token dung
  it('test case 20', async () => {
    const res = await axios.get(
      'http://localhost:7000/api/books',
      {
        headers: {
          authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGMyZDdmMWNkZmQ2YjE4ZDcwM2EyZDEiLCJpYXQiOjE1NzMwNTIxNTJ9.KB4nZ_wZKLHN6mBWfjW69peLvvPgqluLgui-1CWOFKo'
        }
      }
    );
    expect(res.status).toEqual(200)
    expect(res.data.length).toEqual(4)
  })
});