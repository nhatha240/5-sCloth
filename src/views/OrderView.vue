<template>
    <HeaderMain></HeaderMain>
    <VueFinalModal v-model="modalOrder" class="details-modal" content-class="details-modal-content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <div class="title-modal">{{ ratingModal ? 'Đánh giá sản phẩm' : 'ĐƠN HÀNG CHI TIẾT' }}</div>
        <div class="row w-full justify-between gap-[35px]" v-if="!ratingModal">
            <div class="flex-[0_0_65%] flex flex-col gap-[26px]">
                <div class="details-field relative bg-[#EEEBEB]">
                    <div class="text-modal">
                        Đơn hàng: {{ orderDetails?._id }}
                    </div>
                    <div class="text-modal">
                        {{ formatDate(orderDetails?.createdAt, 'DD/MM/YYYY - HH:mm') }}
                    </div>
                    <div class="order-status absolute right-[68px]">
                        {{ orderDetails?.status }}
                    </div>
                </div>
                <div class="row gap-[17px]">
                    <div class="flex-[0_0_30%]">
                        <div class="details-field no-p">
                            <div class="header-order text-modal">
                                KHÁCH HÀNG
                            </div>
                            <div class="body-order">
                                <div>{{ orderDetails?.user?.name }}</div>
                                <div>{{ orderDetails?.user?.phone }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="details-field no-p">
                            <div class="header-order text-modal">
                                NGƯỜI NHẬN
                            </div>
                            <div class="body-order">
                                <div>{{ orderDetails?.user?.name }}</div>
                                <div>
                                    {{ orderDetails?.user?.address }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="details-field no-p">
                        <div class="header-order text-modal flex gap-1">
                            <div class="w-[22%]">Tên sản phẩm</div>
                            <div class="w-[20%]">Ảnh sản phẩm</div>
                            <div class="w-[14%]">Số lượng</div>
                            <div class="w-[14%]">Đơn giá</div>
                            <div class="w-[15%]">Tổng tiền</div>
                            <div class="">Đánh Giá</div>
                        </div>
                        <div class="body-order border-b-[1px] border-[#000000] last:border-none flex items-center gap-1"
                            v-for="(product, i) in orderDetails?.products" :key="i">
                            <div class="w-[22%]">
                                <div class="">{{ product?.product?.name }}</div>
                                <div class="break-all">Mã sản phẩm: {{ product?._id }}</div>
                            </div>
                            <div class="w-[20%]">
                                <img crossorigin="anonymous" class="max-h-[78px]"
                                :src="product?.product?.image && product?.product?.image?.length > 0 ? urlApi + product?.product?.image[0] : '/images/order_image_product1.svg'" alt="">
                            </div>
                            <div class="w-[14%] text-center">
                                {{ product?.quantity }}
                            </div>
                            <div class="w-[14%]">
                                {{ product?.price }} đ
                            </div>
                            <div class="w-[15%]">
                                {{ product?.priceTotal }} đ
                            </div>
                            <div class="cursor-pointer text-[#0495FF]" @click="toRating(product)">
                                Đánh Giá
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_32%] flex flex-col gap-[26px]">
                <div class="details-field no-p">
                    <div class="header-order text-modal">
                        phương thức thanh toán
                    </div>
                    <div class="body-order">
                        <div class="flex justify-between">
                            <div>Tiền mặt</div>
                            <div>{{ orderDetails?.totalAmount ?? 0 }} đ</div>
                        </div>
                        <div>Paypal</div>
                    </div>
                </div>
                <div class="details-field no-p">
                    <div class="body-order">
                        <!-- <div class="flex justify-between">
                            <div>Khuyến mãi</div>
                            <div>10.000 đ</div>
                        </div>
                        <div class="flex justify-between">
                            <div>Mã giảm giá</div>
                            <div>10.000 đ</div>
                        </div> -->
                        <div class="flex justify-between">
                            <div>phí vận chuyển</div>
                            <div class="text-[#30CD60]">Miễn phí</div>
                        </div>
                        <div class="flex justify-between pb-[37px]">
                            <div>Thành tiền</div>
                            <div>{{ orderDetails?.totalAmount ?? 0 }} đ</div>
                        </div>
                    </div>
                </div>
                <button class="btn-orange w-[80%] mx-auto" @click="modalOrder = false">
                    ĐÓNG
                </button>
            </div>
        </div>
        <div class="row w-full justify-between gap-[35px]" v-else>
            <div class="flex-[0_0_65%] flex flex-col gap-[26px]">
                <div class="details-field relative bg-[#EEEBEB]">
                    <div class="text-modal">
                        Đơn hàng: {{ orderDetails?._id }}
                    </div>
                    <div class="text-modal">
                        {{ formatDate(orderDetails?.createdAt, 'DD/MM/YYYY - HH:mm') }}
                    </div>
                    <div class="order-status absolute right-[68px]">
                        {{ orderDetails?.status }}
                    </div>
                </div>
                <div class="">
                    <textarea 
                        class="border border-[#000000] text-[#000000]
                        font-light text-[19px] rounded-[21px] w-full h-[396px] px-[22px] py-[15px]"
                        name="" id="" placeholder="Đánh giá không quá 200 từ ...." maxlength="200" v-model="ratingDetails.comment"></textarea>
                </div>
                <div class="flex justify-end gap-[47px]">
                    <div class="flex gap-[19px] items-center">
                        <div class="" v-for="i in 5" :key="i">
                            <img crossorigin="anonymous" :src="ratingDetails?.rating < i ? 
                                '/images/big_star_inactive.svg' : '/images/big_star_active.svg'" 
                                alt=""
                                class="cursor-pointer"
                                @click="chooseStar(i)"
                            >
                        </div>
                    </div>
                    <button class="btn-orange w-[318px]" @click="rateOrder()">
                        ĐÁNH GIÁ
                    </button>
                </div>
            </div>
            <div class="flex-[0_0_30%] flex flex-col">
                <div class="rounded-[20px] max-w-[357px] max-h-[473px] pb-[31px]">
                    <img crossorigin="anonymous" 
                        :src="ratingDetails?.productId?.image && ratingDetails?.productId?.image?.length >0
                            ? urlApi + ratingDetails?.productId?.image[0] : '/images/rating_product_image1.svg'" alt="">
                </div>
                <div class="pb-[21px] product-text">
                    {{ ratingDetails?.productId?.name ?? '' }}
                </div>
                <div class="pb-[14px] text-[27px] product-text">
                    Giá: {{ ratingDetails?.productId?.price ?? 0 }} đ
                </div>
                <div class="text-[27px] product-text flex gap-[17px] items-center" v-if="ratingDetails?.productId?.options && ratingDetails?.productId?.options?.length > 0">
                    Màu:
                    <div class="border border-[#D651FF] rounded-[50%] w-[43px] h-[43px] cursor-pointer"
                        :class="{ 'choosen-color': color == productColor }"
                        :style="`background-color: ${color};`"
                        v-for="(color, i) in ratingDetails?.productId?.options[0].color" :key="color" @click="chooseColor(i)">
                    </div>
                </div>
            </div>
        </div>
    </VueFinalModal>
    <div class="order-layout">
        <div class="mx-auto my-[50px] w-[80%]">
            <div class="header-cart bg-[#D651FF] rounded-[10px] flex py-[25px] px-[11px]">
                <div class="w-[20%]">Mã đơn hàng</div>
                <div class="w-[16%]">Ngày đặt</div>
                <div class="w-[16%]">Số lượng</div>
                <div class="w-[16%]">Tiền</div>
                <div class="w-[20%]">Tổng tiền thanh toán</div>
                <div class="">Xem</div>
            </div>
            <div class="flex flex-col gap-[39px]" v-if="items?.length > 0">
                <div class="body-order flex item-layout items-center text-[19px]" v-for="(item, index) in items"
                    :key="index">
                    <div class="w-[20%] text-wrap overflow-hidden break-all">
                        {{ item?._id }}
                    </div>
                    <div class="w-[16%]">{{ formatDate(item?.createdAt, 'DD/MM/YYYY') }}</div>
                    <div class="w-[16%]">{{ totalQuantity(item?.products) }}</div>
                    <div class="w-[16%]">${{ item?.totalAmount }}</div>
                    <div class="w-[20%]">${{ item?.totalAmount }}</div>
                    <div class="" @click="openOrder(item?._id)">
                        <div href="cursor-pointer" class="text-[#0477FF] font-light cursor-pointer">Chi tiết</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-[39px]" v-else>
                <div class="body-order flex text-[19px] items-center justify-center">
                    <h2>Chưa có đơn hàng nào</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useOrderStore } from '@/stores/OrderStore'
import { useUserStore } from '@/stores/UserStore'
import { formatDate } from "@/constant/commonFunction";
import { toastSuccess } from "@/constant/commonUsage";

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeOrder = useOrderStore()
const storeUser = useUserStore()
const modalOrder = ref(false)
const orderDetails = ref({})
const ratingDetails = ref({
    productId: {
        id: ''
    },
    comment: '',
    rating: 0,
})
const items = ref([
    {
        order_id: 1,
        order_code: "#6526472363",
        order_date: "24/5/2024",
        quantity: 3,
        price: 460,
        total: 460,
    },
    {
        order_id: 1,
        order_code: "#6526ced823",
        order_date: "29/4/2024",
        quantity: 3,
        price: 460,
        total: 460,
    },
    {
        order_id: 1,
        order_code: "#6526cedc8f1",
        order_date: "19/4/2024",
        quantity: 3,
        price: 460,
        total: 460,
    },
])
const ratingModal = ref(false)
const colors = ref([
    {
        color: '#FFFFFF',
        active: true,
    },
    {
        color: '#D9D9D9',
        active: false,
    },
    {
        color: '#05470C',
        active: false,
    },
])

const chooseColor = (index) => {
    // colors.value.forEach((color, i) => {
    //     color.active = i === index;
    // });
}

const initOrderItem = async () => {
    try {
        const data = await storeOrder.getUserOrder()
        items.value = data
    } catch (error) {
        return error
    }
}

onMounted(() => {
    initOrderItem()
})

watch(
    () => modalOrder.value,
    (value) => {
        if (!value) {
            ratingModal.value = false
        }
    }
)

const totalQuantity = (arr) => {
    return arr?.reduce((sum, item) => sum + item.quantity, 0)
}

const orderId = ref(0)
const openOrder = async (id) => {
    modalOrder.value = true
    orderId.value = id
    try {
        const data = await storeOrder.getUserOrderDetails(id)
        console.log(data);
        orderDetails.value = data
    } catch (error) {
        return error
    }
}

const chooseStar = (star) => {
    ratingDetails.value.rating = star
}

const isEditRating = ref(false)
const productColor = ref('')
const toRating = async (product) => {
    console.log(product?.product?.rating, 'product')
    if (product?.product?.rating?.length > 0) {
        try {
            const data = await storeUser.ratingById(product?.product?.rating?.at(-1))
            if (data) {
                ratingDetails.value = data
            }
            isEditRating.value = true
        } catch (error) {
            return error
        }
    } else {
        productColor.value = product?.color ?? ''
        ratingDetails.value.productId = product?.product ?? ''
        ratingDetails.value.productId.id = product?.product?._id ?? ''
        isEditRating.value = false
    }
    console.log(ratingDetails.value)
    ratingModal.value = true
}

const rateOrder = async () => {
    if (!isEditRating.value) {
        try {
            const payload = {
                productId: ratingDetails.value.productId.id,
                comment: ratingDetails.value.comment,
                rating: ratingDetails.value.rating,
                order: orderId.value,
            }
            await storeUser.ratingProduct(payload)
            toastSuccess('Rating success')
            const data = await storeOrder.getUserOrderDetails(orderId.value)
            orderDetails.value = data
            ratingModal.value = false
        } catch (error) {
            return error
        }
    } else {
        try {
            const payload = {
                commentId: ratingDetails.value.id,
                comment: ratingDetails.value.comment,
                rating: ratingDetails.value.rating,
            }
            await storeUser.updateRatingProduct(payload)
            toastSuccess('Rating success')
            const data = await storeOrder.getUserOrderDetails(orderId.value)
            orderDetails.value = data
            ratingModal.value = false
        } catch (error) {
            return error
        }
    }
}
</script>

<style lang="scss">
.order-layout {
    .header-cart {
        div {
            text-align: left;
            font-family: Inter, Open Sans, sans-serif;
            font-size: 19px;
            font-weight: 600;
            line-height: 22.99px;
            color: #000000;
        }
    }

    .body-order {
        padding: 0px 11px;
        border-bottom: 0.5px solid #D651FF;

        >div {
            padding: 40px 0px;
        }
    }
}

.details-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;

    .details-modal-content {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 48px;
        width: 80%;
        padding: 27px 35px 27px 17px;
        background-color: #ffffff;
        border: 1px solid #000000;
        height: 85%;
        overflow-y: auto;
    }

    .title-modal {
        font-size: 31px;
        font-weight: 600;
        line-height: 46px;
        text-align: center;
        color: #000000;
    }

    .text-modal {
        font-size: 22px;
        font-weight: 300;
        line-height: 32px;
        text-align: left;
        color: #000000;
    }

    .text-details {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        text-align: left;
        color: #222324;
    }

    .details-field {
        border: 1px solid #000000;
        border-radius: 10px;
        padding: 12px;

        &.no-p {
            padding: 0;
            border-radius: 10px;
        }

        .header-order {
            border-radius: 10px 10px 0px 0px;
            background-color: #EEEBEB;
            border-bottom: 1px solid #000000;
            padding: 6px 21px;
        }

        .body-order {
            padding: 6px 21px;
            font-size: 18px;
            font-weight: 400;
            line-height: 32px;
            text-align: left;
            color: #222324;
        }
    }

    .order-status {
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        color: #FFFFFF;
        padding: 7px 15px 5px;
        background-color: #30CD60;
        top: 25px;
        border-radius: 5px;
    }
    .product-text {
        font-family: Roboto;
        font-size: 31px;
        font-weight: 600;
        line-height: 32px;
        text-align: left;
        color: #000000;
    }
}
</style>