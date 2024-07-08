import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
    state: () => ({
        clothes: [],
    }),
    getters: {
        getClothes: (state) => state.clothes
    },
    actions: {}
})
