import API from './API'

export default {
    async listUser(query) {
        const params = {
            page: query?.page,
            pageSize: query?.pageSize
        }
        return await API.get('/users/', {params})
    },
    async editUser(payload, id) {
        return await API.post(`/users/${id}/edit`, payload)
    },
    async deleteUser(id) {
        return await API.post(`/users/${id}/delete`)
    },
}
