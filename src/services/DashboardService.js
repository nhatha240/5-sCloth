import API from './API'

export default {
    async getDashBoardTotal() {
        return await API.get('/thongke/total')
    },
    async getDashBoardSevenDay() {
        return await API.get('/thongke/seven-day')
    },
    async getDashBoardChart() {
        return await API.get('/thongke/bieu-do')
    },
    async getDashBoardTopProduct() {
        return await API.get('/thongke/top-product')
    },
}