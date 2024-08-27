import { defineStore } from 'pinia'
import ShopService from '@/services/ShopService'

export const useShopStore = defineStore('shop', {
    state: () => ({
        product: '',
        products: [],
        clothes: [],
    }),
    getters: {
        productName: (state) => state.product,
        getClothes: (state) => state.clothes,
    },
    actions: {
        async listProduct(request) {
            return new Promise((resolve, reject) => {
                ShopService.listProduct(request)
                .then(async (response) => {
                  const data = await response.json();
                  resolve(data)
                })
                .catch(({ response }) => reject(response))
            })
          },
    }
})
