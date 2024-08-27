<template>
  <HeaderMain @update:search="getProductName" />
  <div class="bg-[#FFFFFF] pt-[45px] w-[85%] mx-auto mb-[117px]">
    <div class="row">
      <div class="flex-[0_0_33%] flex flex-col justify-between">
        <div class="flex items-center gap-[20px]">
          <div class="star-rating-details">
            <img
              :src="Math.round(product.rating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
              alt="" v-for="star in 5" :key="star">
            {{ product.rating }}
          </div>
          <div class="count-rating-details">
            {{ product.rating_count }} Reviews
          </div>
        </div>
        <div class="text-[#000000] text-[30px] font-semibold">
          {{ product.product_name }}
        </div>
        <div class="text-[#000000] font-normal text-2xl">
          Còn: {{ product.stock }}
        </div>
        <div class="flex gap-[12px] items-center pl-[19px] mb-[17px]">
          <div class="border-1 border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
            :class="{ 'choosen-color': color.active }" :style="`background-color: ${color.color};`"
            v-for="(color, i) in product.color_list" :key="i" @click="chooseColor(i)">
          </div>
        </div>
        <div class="relative flex gap-19px">
          <div class="text-[#D651FF] font-semibold text-[45px]">
            ${{ product.sale_price ? product.sale_price : product.price }}
          </div>
          <span class="text-[#636363] font-normal text-sm flex gap-[9px] items-end" v-if="product.sale_price">
            <div class="line-through">${{ product.price }}</div>
            <div class="rounded-[8px] pt-[2px] pb-[3px] px-[14px] bg-[#FF7A00] text-[#FFFFFF] text-base font-medium">
              {{ Math.round((product.price - product.sale_price) / product.price * 100) }}%
            </div>
          </span>
        </div>
        <div class="flex items-center gap-[18px]">
          <div class="">
            <div class="quantity-field flex justify-center items-center w-[183px]">
              <div class="cursor-pointer">
                <img src="/images/minus_icon.svg" alt="">
              </div>
              <input class="text-center pointer-events-none" type="number" readonly v-model="product.quantity">
              <div class="cursor-pointer">
                <img src="/images/plus_icon.svg" alt="">
              </div>
            </div>
          </div>
          <button class="buy-btn flex items-center gap-[34px]">
            <img src="/images/basket_buy_icon.svg" alt="">
            BUY
          </button>
          <button class="p-[20px] border border-[#C4C4C4] rounded-lg">
            <img src="/images/heart_icon_inactive.svg" alt="">
            <!-- <img src="/images/heart_icon.svg" alt=""> -->
          </button>
        </div>
      </div>
      <div class="flex-[0_0_60%] flex-grow-1">
        <div class="row gap-4">
          <!-- Main product images -->
          <div class="flex-[0_0_60%] flex gap-[21px] flex-grow">
            <div class="w-1/2" v-for="(img, i) in product.product_image" :key="i">
              <img :src="img" alt="Product front" class="w-full object-cover">
            </div>
          </div>

          <!-- Thumbnail images -->
          <div class="flex-[0_0_125px] flex flex-col gap-[24px] justify-between">
            <img :src="img" alt="Fabric closeup" class="w-[125px] object-cover" v-for="(img, i) in product.sub_image"
              :key="i">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[131px]">
      <div class="row mt-[131px]">
        <div class="flex-[0_0_70%]">
          <div class="text-[#000000] text-2xl font-semibold mb-[73px]">
            Customer Reviews
          </div>
          <div class="review-layout rounded-[10px]">
            <div class="header flex items-center justify-between">
              <div class="flex flex-col gap-[21px]">
                <div class="flex gap-[14px]">
                  <div class="text-[#4D4D4D] font-semibold text-[45px]">
                    {{ product.rating }}
                    <span class="text-[#4D4D4D] font-medium text-base">out of 5</span>
                  </div>
                </div>
                <div class="flex gap-[10px]">
                  <img
                    class="w-[24px]"
                    :src="Math.round(product.rating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
                    alt="" v-for="star in 5" :key="star">
                </div>
              </div>
              <div class="w-[30%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dolorem odio doloribus itaque doloremque exercitationem eligendi illum similique odit impedit officiis reprehenderit praesentium aspernatur, sequi quae! Quaerat accusamus optio libero?
              </div>
              <div class="rating-bar flex flex-col gap-[10px]">
                <div class="flex items-center gap-[15px]" v-for="(star, index) in ratingDetails" :key="index">
                  <div class="flex items-center gap-[7px]">
                    <img src="/images/star_rating_icon.svg" alt="">
                    {{ star.star }}
                  </div>
                  <div class="relative w-[270px] bg-[#DDDDDD] h-[9px] rounded-[15px]">
                    <div class="absolute bg-[#D651FF] h-[9px] rounded-[15px]" :style="{'width': star.rating_percent }"></div>
                  </div>
                  <div class="">
                    {{ star.rating_percent }}
                  </div>
                </div>
              </div>
            </div>
            <div class="body flex items-center gap-[72px]" v-for="i in 5" :key="i">
              <div class="flex flex-col gap-[21px]">
                <div class="flex gap-[14px]">
                  <div class="text-[#FF7020] font-bold text-[26px]">
                    {{ product.rating }}
                  </div>
                </div>
                <div class="flex gap-[10px]">
                  <img
                    class="w-[24px]"
                    :src="Math.round(product.rating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
                    alt="" v-for="star in 5" :key="star">
                </div>
              </div>
              <div class="flex flex-col gap-[31px]">
                <div class="flex gap-[28px]">
                  <div class="w-[57px] h-[57px] rounded-[50%] bg-[#C4C4C4]">
                  </div>
                  <div class="">
                    <div class="text-[#000000] font-semibold text-[18px]">Michelle Zudid</div>
                    <div class="text-[#D651FF] font-normal text-[14px]">Jan 4th, 2020</div>
                  </div>
                </div>
                <div class="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="w-full flex gap-[23px] items-center justify-center btn-layout mt-[61px]">
              <button class="bg-[#FFFFFF] border-[1px] border-[#F0E4F4]">
                <img src="/images/arrow_down_loadmore.svg" alt="">
                Load More
              </button>
              <button class="bg-[#F0E4F4]">
                <img src="/images/arrow_up_close.svg" alt="">
                Close
              </button>
            </div>
          </div>
        </div>
        <div class="flex-[0_0_25%]">
          <div class="text-[#000000] text-2xl font-semibold mb-[86px]">
            Liên quan
          </div>
          <div class="flex flex-col gap-[40px]">
            <div class="relative mt-[63px]" v-for="i in 3" :key="i">
              <div class="relate-product-layout overflow-hidden flex justify-end">
                <img class="absolute left-0 bottom-0 object-cover max-w-[165px] rounded-[20px]" src="/images/product_details_image1.svg" alt="">
                <div class="relate-details p-4 flex flex-col justify-end gap-[10px] flex-[0_0_53%]">
                  <div class="star-rate">
                    <img src="/images/star_rate_details.svg" alt="">
                    4.5
                  </div>
                  <div class="main-text">
                    Such a Fun Age
                  </div>
                  <div class="price">
                    $21,4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderMain from '@/components/HeaderMain.vue'
import { generateSingleData } from '../constant/commonFunction'

const route = useRoute()
const productId = ref(route.params.id ? route.params.id : 0)
const product = ref({})
const imageList = ref([
  '/images/product_details_image1.svg',
  '/images/product_details_image1.svg',
])
const subImage = ref([
  '/images/product_details_subimg1.svg',
  '/images/product_details_subimg2.svg',
  '/images/product_details_subimg3.svg',
  '/images/product_details_subimg4.svg',
])
const ratingDetails = ref([
  {
    star: 5,
    rating_percent: '86%',
    rating_count: 0,
  },
  {
    star: 4,
    rating_percent: '61%',
    rating_count: 0,
  },
  {
    star: 3,
    rating_percent: '12%',
    rating_count: 0,
  },
  {
    star: 2,
    rating_percent: '5%',
    rating_count: 0,
  },
  {
    star: 1,
    rating_percent: '8%',
    rating_count: 0,
  },
])

onMounted(() => {
  product.value = generateSingleData(productId.value, imageList.value, subImage.value)
  console.log(product.value);
})

const getProductName = (e) => {
  console.log(e);
}
const chooseColor = (indexColor) => {
  product.value.color_list.forEach((color, i) => {
    color.active = i === indexColor;
  });
}
</script>

<style lang="scss">
.buy-btn {
  @apply rounded-[10px] text-[#FFFFFF] font-semibold text-[22px];
  background-color: #D651FF;
  padding: 14px 48px 14px 31px;
}

.review-layout {
  .header {
    background-color: #FCF8FD;
    padding: 37px 47px 36px 60px;
  }

  .body {
    border: 1px solid #F0E4F4;
    padding: 50px 59px;
    padding-right: 150px;
  }
  .btn-layout {
    button {
      @apply rounded-[45px] text-[#4D4D4D] font-medium text-[16px] flex items-center gap-[15px];
      padding: 17px 33px;
      padding-left: 22px;
    }
  }
}
.relate-product-layout {
  @apply bg-[#FFFFFF] rounded-[10px];
  box-shadow: 0px 7px 20px 0px #8D28AD26;
  // padding: 30px 41px 30px 0;
  .img-relate {
    border-radius: 20px;
    flex: 0 0 165px;
  }
  .relate-details {
    // padding-left: 33px !important;
    .star-rate {
      @apply rounded-[31px] bg-[#FF7A00] text-[#FFFFFF] font-medium text-[16px] flex gap-[15px] items-center w-fit;
      padding: 5px 18px 4px 10px;
    }
    .main-text {
      @apply text-[#000000] font-semibold text-[18px];
      word-break: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .price {
      @apply text-[#D651FF] font-semibold text-[20px];
    }
  }
}
</style>
