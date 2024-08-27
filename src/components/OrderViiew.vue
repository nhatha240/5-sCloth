<template>
    <VueFinalModal v-model="orderDetails" class="details-modal" content-class="details-modal-content"
        overlay-transition="vfm-fade" content-transition="vfm-fade">
        <div class="title-modal">{{ ratingModal ? 'Đánh giá sản phẩm' : 'ĐƠN HÀNG CHI TIẾT' }}</div>
        <div class="row w-full justify-between gap-[35px]" v-if="!ratingModal">
            <div class="flex-[0_0_65%] flex flex-col gap-[26px]">
                <div class="details-field relative bg-[#EEEBEB]">
                    <div class="text-modal">
                        Đơn hàng: 232718273929
                    </div>
                    <div class="text-modal">
                        11/4/2023 - 23:51
                    </div>
                    <div class="order-status absolute right-[68px]">
                        ĐÃ GIAO HÀNG
                    </div>
                </div>
                <div class="row gap-[17px]">
                    <div class="flex-[0_0_30%]">
                        <div class="details-field no-p">
                            <div class="header-order text-modal">
                                KHÁCH HÀNG
                            </div>
                            <div class="body-order">
                                <div>Nguyễn Long Vũ</div>
                                <div>0378132001</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="details-field no-p">
                            <div class="header-order text-modal">
                                NGƯỜI NHẬN
                            </div>
                            <div class="body-order">
                                <div>Nguyễn Long Vũ</div>
                                <div>Thôn Hội An 1, Xã phổ an, thị xã đức phổ, tỉnh Quảng Ngãi</div>
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
                            v-for="i in 3" :key="i">
                            <div class="w-[22%]">
                                <div class="">Áo sơ mi ngắn tay size: M</div>
                                <div class="">Mã sản phẩm: 1232232</div>
                            </div>
                            <div class="w-[20%]">
                                <img src="/images/order_image_product1.svg" alt="">
                            </div>
                            <div class="w-[14%] text-center">
                                1
                            </div>
                            <div class="w-[14%]">
                                100.000 đ
                            </div>
                            <div class="w-[15%]">
                                400.000 đ
                            </div>
                            <div class="cursor-pointer text-[#0495FF]" @click="rateOrder">
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
                            <div>400.000 đ</div>
                        </div>
                        <div>VnpayQR</div>
                    </div>
                </div>
                <div class="details-field no-p">
                    <div class="body-order">
                        <div class="flex justify-between">
                            <div>Khuyến mãi</div>
                            <div>10.000 đ</div>
                        </div>
                        <div class="flex justify-between">
                            <div>Mã giảm giá</div>
                            <div>10.000 đ</div>
                        </div>
                        <div class="flex justify-between">
                            <div>phí vận chuyển</div>
                            <div class="text-[#30CD60]">Miễn phí</div>
                        </div>
                        <div class="flex justify-between pb-[37px]">
                            <div>Thành tiền</div>
                            <div>380.000 đ</div>
                        </div>
                    </div>
                </div>
                <button class="btn-orange w-[80%] mx-auto" @click="orderDetails = false">
                    ĐÓNG
                </button>
            </div>
        </div>
        <div class="row w-full justify-between gap-[35px]" v-else>
            <div class="flex-[0_0_65%] flex flex-col gap-[26px]">
                <div class="details-field relative bg-[#EEEBEB]">
                    <div class="text-modal">
                        Đơn hàng: 232718273929
                    </div>
                    <div class="text-modal">
                        11/4/2023 - 23:51
                    </div>
                    <div class="order-status absolute right-[68px]">
                        ĐÃ GIAO HÀNG
                    </div>
                </div>
                <div class="">
                    <textarea 
                        class="border border-[#000000] text-[#000000]
                        font-light text-[19px] rounded-[21px] w-full h-[396px] px-[22px] py-[15px]"
                        name="" id="" placeholder="Đánh giá không quá 200 từ ...." maxlength="200"></textarea>
                </div>
                <div class="flex justify-end gap-[47px]">
                    <div class="flex gap-[19px] items-center">
                        <div class="" v-for="i in 5" :key="i">
                            <img src="/images/big_star_active.svg" alt="">
                        </div>
                    </div>
                    <button class="btn-orange w-[318px]">
                        ĐÁNH GIÁ
                    </button>
                </div>
            </div>
            <div class="flex-[0_0_30%] flex flex-col">
                <div class="rounded-[20px] max-w-[357px] max-h-[473px] pb-[31px]">
                    <img src="/images/rating_product_image1.svg" alt="">
                </div>
                <div class="pb-[21px] product-text">
                    Quần đùi thun vải nỉ
                </div>
                <div class="pb-[14px] text-[27px] product-text">
                    Giá: 300.000 đ
                </div>
                <div class="text-[27px] product-text flex gap-[17px] items-center">
                    Màu:
                    <div class="border border-[#D651FF] rounded-[50%] w-[43px] h-[43px] cursor-pointer"
                        :class="{ 'choosen-color': color.active }"
                        :style="`background-color: ${color.color};`"
                        v-for="(color, i) in colors" :key="color" @click="chooseColor(i)">
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
            <div class="flex flex-col gap-[39px]">
                <div class="body-order flex item-layout items-center text-[19px]" v-for="(item, index) in items"
                    :key="index">
                    <div class="w-[20%]">{{ item.order_code }}</div>
                    <div class="w-[16%]">{{ item.order_date }}</div>
                    <div class="w-[16%]">{{ item.quantity }}</div>
                    <div class="w-[16%]">${{ item.price }}</div>
                    <div class="w-[20%]">${{ item.total }}</div>
                    <div class="" @click="openOrder(item.id)">
                        <div href="cursor-pointer" class="text-[#0477FF] font-light">Chi tiết</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const orderDetails = ref()
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
    colors.value.forEach((color, i) => {
        color.active = i === index;
    });
}

watch(
    () => orderDetails.value,
    (value) => {
        if (!value) {
            ratingModal.value = false
        }
    }
)

const openOrder = (id) => {
    orderDetails.value = true
}

const rateOrder = () => {
    ratingModal.value = true
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
