import { defineStore } from 'pinia'
import DashboardService from '@/services/DashboardService'

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        dashboard: '',
    }),
    getters: {
        dashboardData: (state) => state.dashboard,
    },
    actions: {
        async getDashBoardTotal() {
            return new Promise((resolve, reject) => {
                DashboardService.getDashBoardTotal()
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getDashBoardTopProduct() {
            return new Promise((resolve, reject) => {
                DashboardService.getDashBoardTopProduct()
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getDashBoardChart() {
            return new Promise((resolve, reject) => {
                DashboardService.getDashBoardChart()
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
        async getDashBoardSevenDay() {
            return new Promise((resolve, reject) => {
                DashboardService.getDashBoardSevenDay()
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(({ response }) => reject(response))
            })
        },
    }
})
