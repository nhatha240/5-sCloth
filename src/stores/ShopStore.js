import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
    state: () => ({
        product: '',
        clothes: [],
    }),
    getters: {
        productName: (state) => state.product,
        getClothes: (state) => state.clothes,
    },
    actions: {}
})
