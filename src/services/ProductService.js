import API from './API'

export default {
    async getProducts(query) {
        const params = {
            page: query?.page,
            pageSize: query?.pageSize,
            cursor: query?.cursor,
        }
        return await API.get('/admin/get-products', {params})
    },
    async getAllProduct(query) {
        const params = {
            page: query?.page,
            limit: query?.pageSize,
            trending: query?.trending,
            name: query?.name,
            flashSale: query?.flashSale,
        }
        return await API.get('/products', {params})
    },
    async getProduct(id) {
        return await API.get(`/admin/get-product/${id}`)
    },
    async createProduct(payload) {
        return await API.post(`/admin/create-product`, payload)
    },
    async updateProduct(id, payload) {
        return await API.putForm(`/admin/update-product/${id}`, payload,
            {headers: {
                'Content-Type': 'multipart/form-data'
            }}
        )
    },
    async deleteProduct(id) {
        return await API.delete(`/admin/delete-product/${id}`)
    },
    async addCart(payload) {
        return await API.post(`/users/add-cart/`, payload)
    },
    async removeCart(productId) {
        const payload = {
            productId: productId
        }
        return await API.post(`/users/remove-cart/`, payload)
    },
    async listCart() {
        return await API.get(`/users/list-cart/`)
    },
    async exportProductCsv() {
        const config = {
            responseType: 'blob'
        }
        return await API.get('/admin/csv/products', '', config)
    },
    async getProductTopSale() {
        return await API.get('/products/top-sell')
    },
    async getHotProduct() {
        return await API.get('/products/noi-bat')
    },
    async getProductComment(id) {
        return await API.get(`/comment/${id}`)
    },
}
