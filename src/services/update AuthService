import API from './API'

export default {
  async loginUser(payload) {
    return await API.post('/users/login', payload)
  },
  async resetPassword(payload) {
    return await API.post('/users/reset-password', payload)
  },
  async updatePassword(payload) {
    return await API.post('/users/update-password', payload)
  },
  async logout() {
    return await API.post('/users/logout')
  },
  async userRegister(payload) {
    return await API.post('/users/register', payload)
  },
  async userInfo() {
    return await API.get(`/users/info`)
  }
}
