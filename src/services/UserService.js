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
    async listRating(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
            cursor: query?.cursor,
        }
        return await API.get(`/admin/list-rating`, {params})
    },
    async getRatings(query) {
        const params = {
            limit: query.limit
        }
        return await API.get(`/users/rating`, {params})
    },
    async ratingById(id) {
        return await API.get(`/users/rating/${id}`)
    },
    async ratingProduct(payload) {
        return await API.post(`/users/rating`, payload)
    },
    async updateRatingProduct(payload) {
        return await API.put(`/users/rating`, payload)
    },
    async exportRatingCsv() {
        const config = {
            responseType: 'blob'
        }
        return await API.get('/admin/csv/rating', '', config)
    },
    async getUser() {
        return await API.get('/users')
    },
    async getCommenRating(query) {
        const params = {
            limit: query?.limit
        }
        return await API.get('/comments', {params})
    },
}
