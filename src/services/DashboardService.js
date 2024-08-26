import API from './API'

export default {
    async getDashBoardTotal() {
        return await API.get('/admin/thongke/total')
    },
    async getDashBoardSevenDay() {
        return await API.get('/admin/thongke/seven-day')
    },
    async getDashBoardChart() {
        return await API.get('/admin/thongke/bieu-do')
    },
    async getDashBoardTopProduct() {
        return await API.get('/admin/thongke/top-product')
    },
}