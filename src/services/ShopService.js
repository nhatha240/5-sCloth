// import API from './API'

let url = `${import.meta.env.VITE_BASE_URL}/v1`
export default {
    async listProduct(query) {
            const params = {
                page: query?.page,
                pageSize: query?.pageSize
            }
            const response = await fetch(`${url}/products`, {params});
            return response
        // return await API.get('/products')
    },
}
