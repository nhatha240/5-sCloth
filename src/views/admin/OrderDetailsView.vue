<template>
    <div class="orders-details-layout">
        <div class="flex items-center justify-between mb-[24px]">
            <div class="title-text">Order Details </div>
            <div class="flex items-center">
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1">
                    Lưu Order
                </button>
            </div>
        </div>
        <div class="row justify-between">
            <div class="flex-[0_0_32%] order-details-box">
                <div class="flex gap-3 items-center pb-[20px]">
                    <div class="title-text">Order #{{ orderId }}</div>
                    <div :class="{
                        'order-status': true,
                        'process': true
                    }">
                        Processing
                    </div>
                </div>
                <div class="flex flex-col gap-[14px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/calendar_add_icon.svg" alt="">
                            Added
                        </div>
                        <div class="">
                            12 Dec 2022
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/payment_icon.svg" alt="">
                            Payment Method
                        </div>
                        <div class="">
                            Visa
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/ship_method_icon.svg" alt="">
                            Shipping Method
                        </div>
                        <div class="">
                            Flat Shipping
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_32%] order-details-box">
                <div class="flex gap-3 items-center pb-[20px]">
                    <div class="title-text">Customer</div>
                </div>
                <div class="flex flex-col gap-[14px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/customer_icon.svg" alt="">
                            Customer
                        </div>
                        <div class="">
                            Josh Adam
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/email_icon.svg" alt="">
                            Email
                        </div>
                        <div class="">
                            josh_adam@mail.com
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/phone_icon.svg" alt="">
                            Phone
                        </div>
                        <div class="">
                            909 427 2910
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_32%] order-details-box">
                <div class="flex gap-3 items-center pb-[20px]">
                    <div class="title-text">Document</div>
                </div>
                <div class="flex flex-col gap-[14px]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/invoice_icon.svg" alt="">
                            Invoice
                        </div>
                        <div class="">
                            INV-32011
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/ship_method_icon.svg" alt="">
                            Shipping
                        </div>
                        <div class="">
                            SHP-2011REG
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <img src="/images/rewards_icon.svg" alt="">
                            Rewards
                        </div>
                        <div class="">
                            480 point
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-between !mt-6">
            <div class="flex-[0_0_63%] !p-0 order-details-box h-fit">
                <div class="py-[18px] px-6 flex gap-3 items-center">
                    <div class="title-text">Order List</div>
                    <div :class="{
                        'order-status': true,
                        'success': true
                    }">
                        2 Products
                    </div>
                </div>
                <table class="order-table">
                    <thead class="bg-[#F9F9FC] border-b border-[#F0F1F3]">
                        <tr class="">
                            <th>Product</th>
                            <th>SKU</th>
                            <th>QTY</th>
                            <th>Price</th>
                            <th class="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex items-center gap-2">
                                    <div class="rounded-[8px] bg-[#E0E2E7] w-[44px] h-[44px]">
                                        <img class="object-cover" src="" alt="">
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <div class="text-[#333843] font-medium text-sm">Smartwatch E2</div>
                                        <div class="text-[#667085] font-normal text-xs">Black</div>
                                    </div>
                                </div>
                            </td>
                            <td class="text-[#5C59E8] font-semibold text-sm">302011</td>
                            <td class="text-[#667085] font-medium text-sm">1 pcs</td>
                            <td class="text-[#667085] font-medium text-sm">
                                ${{ '400.00' }}
                            </td>
                            <td class="text-[#667085] font-medium text-sm">
                                ${{ '400.00' }}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="total-grand-text">Subtotal</td>
                            <td class="text-[#333843] font-medium text-sm">${{ '585.00' }}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="total-grand-text">VAT (0%)</td>
                            <td class="text-[#333843] font-medium text-sm">${{ '0' }}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="total-grand-text">Shipping Rate</td>
                            <td class="text-[#333843] font-medium text-sm">${{ '5.00' }}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="total-grand-text">Grand Total</td>
                            <td class="total-price-text">${{ '590.00' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex-[0_0_34%] flex flex-col gap-6">
                <div class="order-details-box">
                    <div class="title-text pb-[18px]">Address</div>
                    <div class="flex items-center gap-2 pb-[14px]">
                        <img src="/images/icon_location.svg" alt="">
                        <div class="">
                            <div class="text-[#4D5464] font-medium text-sm">Billing</div>
                            <div class="text-[#1A1C21] font-medium text-sm">1833 Bel Meadow Drive, Fontana, California
                                92335, USA</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="/images/icon_location.svg" alt="">
                        <div class="">
                            <div class="text-[#4D5464] font-medium text-sm">Billing</div>
                            <div class="text-[#1A1C21] font-medium text-sm">1833 Bel Meadow Drive, Fontana, California
                                92335, USA</div>
                        </div>
                    </div>
                </div>
                <div class="order-details-box">
                    <div class="title-text pb-[18px]">Order Status</div>
                    <div class="relative flex flex-col gap-2 progress-wrapper">
                        <div class="flex items-center gap-2 progress-field">
                            <img class="" src="/images/icon_order_place.svg" alt="">
                            <div class="">
                                <div class="text-[#333843] font-medium text-sm">Order Placed</div>
                                <div class="text-[#4D5464] font-medium text-sm">An order has been placed.</div>
                                <div class="text-[#858D9D] font-medium text-[12px]">12/12/2022, 03:00</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 progress-field">
                            <img src="/images/icon_processing.svg" alt="">
                            <div class="">
                                <div class="text-[#333843] font-medium text-sm">Processing</div>
                                <div class="text-[#4D5464] font-medium text-sm">Seller has proccessed your order.</div>
                                <div class="text-[#858D9D] font-medium text-[12px]">12/12/2022, 03:15</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 progress-field">
                            <img src="/images/packed_icon.svg" alt="">
                            <div class="">
                                <div class="text-[#333843] font-medium text-sm">Packed</div>
                                <div class="text-[#858D9D] font-medium text-[12px]">DD/MM/YY, 00:00</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 progress-field">
                            <img src="/images/ship_method_icon.svg" alt="">
                            <div class="">
                                <div class="text-[#333843] font-medium text-sm">Shipping</div>
                                <div class="text-[#858D9D] font-medium text-[12px]">DD/MM/YY, 00:00</div>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 progress-field">
                            <img src="/images/deliver_complete_icon.svg" alt="">
                            <div class="">
                                <div class="text-[#333843] font-medium text-sm">Delivered</div>
                                <div class="text-[#858D9D] font-medium text-[12px]">DD/MM/YY, 00:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const orderId = ref(route?.params?.id)
</script>

<style lang="scss">
.order-details-box {
    @apply rounded-[8px] p-[24px] bg-[#FFFFFF];
    border: 1px solid #E0E2E7;
    box-shadow: 0px 1.5px 2px 0px #1018281A;

    .title-text {
        color: #1A1C21;
        font-family: Inter, Open Sans, sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.005em;
        text-align: left;
    }
    .label-text {
        color: #131523;
        font-family: Inter, Open Sans, sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
    }

    .order-status {
        padding: 4px 12px;
        font-family: Inter, Open Sans, sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.005em;
        text-align: center;
        border-radius: 100px;

        &.process {
            color: #E46A11;
            background-color: #FDF1E8;
        }

        &.success {
            color: #0D894F;
            background-color: #E7F4EE;
        }
    }
}

.order-table {
    width: 100%;

    thead {
        tr>th {
            padding: 18px 22px;
            font-family: Inter, Open Sans, sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #333843;
        }
    }

    tbody {
        tr {
            border-bottom: 1px solid #F0F1F3;
            &:last-child {
                border-bottom: unset;
            }
        }
        tr>td {
            padding: 18px 22px;
        }
    }
}

.total-price-text {
    font-family: Inter, Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
    color: #333843;
}

.total-grand-text {
    font-family: Inter, Open Sans, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
    color: #333843;
}
.progress-wrapper {
  margin-left: 1.5rem;
  border-left: 1px solid #E0E2E7;
  border-style: dashed;
  .progress-field {
    &:last-child {
        padding-bottom: 0;
    }
  }
}
.progress-field {
  padding-left: 28px;
  padding-bottom: 18px;
  position: relative;
}
.progress-field>img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    left: -20px;
}
</style>