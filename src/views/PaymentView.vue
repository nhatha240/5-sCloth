<template>
  <HeaderMain></HeaderMain>
  <div class="payment-layout bg-[#FFFFFF]">
    <div class="row mx-auto py-[16px] w-[80%]">
      <div class="flex-[0_0_50%]">
        <div class="flex flex-col gap-[15px]">
          <div class="relative input-field-label">
            <label for="name" class=""> Họ và tên </label>
            <input type="text" id="name" placeholder=" " v-model="storeUser.user.name" />
          </div>
          <div class="relative input-field-label">
            <label for="phone" class=""> Số điện thoại </label>
            <input type="number" id="phone" placeholder=" " v-model="storeUser.user.phone" />
          </div>
          <div class="relative input-field">
            <input type="email" id="email" placeholder="Email" v-model="storeUser.user.email" />
          </div>
          <div class="relative input-field">
            <input type="text" id="address" placeholder="Địa chỉ" v-model="storeUser.user.address" />
          </div>
          <!-- <div class="flex gap-[18px] justify-between">
            <div class="relative">
              <select id="city" class="custom-selectbox">
                <option selected disabled>Chọn tỉnh / thành</option>
                <option>Hà Nội</option>
                <option>Hồ Chí Minh</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700"
              >
                <svg
                  width="3"
                  height="24"
                  viewBox="0 0 3 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.5"
                    y1="6.55671e-08"
                    x2="1.5"
                    y2="24"
                    stroke="#7F7F7F"
                    stroke-width="3"
                  />
                </svg>

                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                </svg>
              </div>
              <label for="city" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                Tỉnh/ thành
              </label>
            </div>
            <div class="relative">
              <select id="district" class="custom-selectbox">
                <option selected disabled>Chọn Quận / huyện</option>
                <option>11</option>
                <option>6</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700"
              >
                <svg
                  width="3"
                  height="24"
                  viewBox="0 0 3 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.5"
                    y1="6.55671e-08"
                    x2="1.5"
                    y2="24"
                    stroke="#7F7F7F"
                    stroke-width="3"
                  />
                </svg>

                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                </svg>
              </div>
              <label for="district" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                Quận/ huyện
              </label>
            </div>
            <div class="relative">
              <select id="phuong" class="custom-selectbox">
                <option selected disabled>Chọn Phường / xã</option>
                <option>11</option>
                <option>12</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-[20px] gap-[15px] flex items-center text-gray-700"
              >
                <svg
                  width="3"
                  height="24"
                  viewBox="0 0 3 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.5"
                    y1="6.55671e-08"
                    x2="1.5"
                    y2="24"
                    stroke="#7F7F7F"
                    stroke-width="3"
                  />
                </svg>

                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 7L0.00480879 0.250001L12.9952 0.25L6.5 7Z" fill="#7F7F7F" />
                </svg>
              </div>
              <label for="phuong" class="absolute text-xs text-gray-500 top-1 left-4 z-10">
                Phường/ xã
              </label>
            </div>
          </div> -->
          <div class="">
            <div class=""></div>
            <div class="flex items-center">
              <input
                type="radio"
                id="freeship"
                name="shipping"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              />
              <label
                for="freeship"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Freeship cho đơn hàng từ 299k
              </label>
              <span class="ml-auto text-sm text-gray-500">0đ</span>
            </div>
          </div>
          <div v-if="!paid" id="paypal-button-container"></div>
          <div v-else id="confirmation">Order complete!</div>
        </div>
      </div>
      <div class="flex-[0_0_50%]">
        <div class="cart-payment-layout">
          <div class="flex items-center justify-between" v-for="(product, index) in storeProduct.cartItem" :key="index">
            <div class="flex items-center gap-2">
              <div class="relative object-cover">
                <div class="absolute top-[-10px] right-[-10px] rounded-[50%] w-[30px] h-[30px] bg-gray-500 text-white flex justify-center items-center">
                  {{ product?.quantity }}
                </div>
                <img crossorigin="anonymous" class="max-w-[65px] rounded-[8px]" :src="urlApi + product?.product?.image[0]" alt="">
              </div>
              <div class="flex gap-1">
                <div class="">
                  {{ product?.product?.name }}
                </div>
                <div class="" v-for="(size, i) in product?.product?.options[0]?.size" :key="i">
                  {{ size }}{{ (i < product?.product?.options[0]?.size?.length - 1) ? ', ' : '' }}
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              {{ (product?.product?.discountPrice ? (product?.product?.price * product?.quantity) : (product?.product?.price * product?.quantity)) }}đ
            </div>
          </div>
          <div class="border-t border-[#D7DBEC] mt-4 flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  Tạm tính
                </div>
                <div class="flex justify-end">
                  {{ storeProduct.totalPrice ?? 0 }}đ
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  Phí vận chuyển
                </div>
                <div class="flex justify-end">
                  Miễn phí
                </div>
              </div>
          </div>
          <div class="border-t border-[#D7DBEC] mt-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  Tổng cộng
                </div>
                <div class="flex justify-end text-lg font-bold">
                  VND {{ storeProduct.totalPrice ?? 0 }}đ
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import HeaderMain from '../components/HeaderMain.vue'
import { loadScript } from '@paypal/paypal-js'
import { onBeforeMount, ref, onMounted } from 'vue'
import { useUserStore } from '../stores/UserStore'
import { useProductStore } from '../stores/ProductStore'
import { useOrderStore } from '../stores/OrderStore'
import router from '@/router'
import { toastError, toastSuccess } from '@/constant/commonUsage'

// Change to your CLIENT ID gotten from the developer dashboard
const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeUser = useUserStore()
const storeProduct = useProductStore()
const storeOrder = useOrderStore()
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

const { cartTotal } = defineProps({
  cartTotal: {
    type: Number,
    default: 0.01
  }
})
const paid = ref(false)

const initUser = async () => {
  try {
    await storeUser.getUser()
  } catch (error) {
    return error
  }
}

onMounted(() => {
  initUser()
})

onBeforeMount(function () {
  loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
    paypal
      .Buttons({
        createOrder,
        onApprove: onApprove,
        onCancel: onCancel,
        onError: (err) => {
          console.log(err)
        }
      })
      .render('#paypal-button-container')
  })
})

function createOrder() {
  return confirmOrder()
  // console.log('Creating order...', data, actions)
  // return actions.order.create({
  //   purchase_units: [
  //     {
  //       amount: {
  //         value: cartTotal
  //       }
  //     }
  //   ]
  // })
}

const confirmOrder = () => {
  try {
    const productItem = {
      products: storeProduct.cartItem.map(item => ({
        product: item.product.id,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
      }))
    }
    console.log(productItem);
    // router.push({ name: 'home' })
    const data = storeOrder.addOrder(productItem)
    console.log(data)
    if (data?.id) {
      // storeProduct.listCart()
    }
    // toastSuccess('Thanh toán thành công')
    return data

  } catch (error) {
    return error
  }
}

async function onApprove(data, actions) {
  console.log('Order approved...')
  try {
    const orderData = await storeOrder.captureOrder(data?.id)
    console.log(orderData)
    const errorDetail = orderData?.details?.[0];

    if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
      // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
      return actions.restart();
    } else if (errorDetail) {
      // (2) Other non-recoverable errors -> Show a failure message
      throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
    } else if (!orderData.purchase_units) {
      throw new Error(JSON.stringify(orderData));
    } else {
      // (3) Successful transaction -> Show confirmation or thank you message
      // Or go to another URL:  actions.redirect('thank_you.html');
      const transaction =
        orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
        orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
      toastError(
        `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
      );
      console.log(
        "Capture result",
        orderData,
        JSON.stringify(orderData, null, 2),
      );
    }
  } catch (e) {
    return e
  }
  return actions.order.capture().then(() => {
    paid.value = true
    console.log('Order complete!')
    confirmOrder()
  })
}
function onCancel(data, actions) {
    console.log('Order cancer...', actions, data)
  return actions.order.capture().then(() => {
    paid.value = false
    console.log('Order cancel!')
  })
}
</script>

<style lang="scss">
.payment-layout {
  .input-field-label {
    input {
      @apply text-[22px] block w-full px-3 pt-6 pb-2 text-[#827C7C] border border-[#000000] rounded-[9px] appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500;
    }

    label {
      @apply absolute text-[17px] text-[#A9A9A9] duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3;
    }
  }

  .input-field {
    input {
      @apply text-[22px] block w-full px-3 py-[16px] text-[#827C7C] border border-[#000000] rounded-[9px] appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500;
    }
  }

  .custom-selectbox {
    @apply block appearance-none w-full bg-white border border-[#000000] text-gray-900 pt-[24px] pb-[12px] pl-4 pr-[53px] rounded-[9px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
  }
  .cart-payment-layout {
    border-radius: 4px;
    background-color: #F3F3F3;
    padding: 8px 16px;
  }
}
</style>
