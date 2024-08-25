import { defineStore } from 'pinia'
import ShopService from '@/services/ShopService'
import { useRoute } from 'vue-router'
const route = useRoute()

export const useShopStore = defineStore('shop', {
    state: () => ({
        product: route?.query?.category ? route?.query?.category : '',
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
