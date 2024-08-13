import API from './API'

export default {
  async loginUser(payload) {
    return await API.post('/auth/login', payload)
  },
  async loginAdmin(payload) {
    return await API.post('/admin/login', payload)
  },
  async userRegister(payload) {
    return await API.post('/auth/register', payload)
  },
  async updateUser(id, payload) {
    return await API.put(`/admin/customer/${id}`, payload)
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
  async userInfo() {
    return await API.get(`/users/info`)
  },
  async refreshUserToken(token) {
    return await API.post(`/auth/refresh-tokens`, token)
  },
  async refreshAdminToken(token) {
    return await API.post(`/admin/refresh-tokens`, token)
  }
}
