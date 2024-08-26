<template>
  <HeaderMain @update:search="getProductName" />
  <div class="bg-[#FFFFFF] pt-[45px] w-[85%] mx-auto mb-[117px]">
    <div class="row">
      <div class="flex-[0_0_33%] flex flex-col justify-between">
        <div class="flex items-center gap-[20px]">
          <div class="star-rating-details">
            <img
              :src="Math.round(product?.totalRating/product?.userRating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
              alt="" v-for="star in 5" :key="star">
              {{ product?.userRating ? Math.round(product?.totalRating/product?.userRating) : 0 }}
          </div>
          <div class="count-rating-details">
            {{ product?.userRating ?? 0 }} Reviews
          </div>
        </div>
        <div class="text-[#000000] text-[30px] font-semibold">
          {{ product?.name }}
        </div>
        <div class="text-[#000000] font-normal text-2xl">
          Còn: {{ product?.quantity }}
        </div>
        <div class="flex gap-[12px] items-center pl-[19px] mb-[17px]">
          <div class="border-1 border-[#D651FF] rounded-[50%] w-[30px] h-[30px] cursor-pointer"
            :class="{ 'choosen-color': color == choosenColor }" :style="`background-color: ${color};`"
            v-for="(color, i) in product?.options[0]?.color" :key="i" @click="chooseColor(color)">
          </div>
        </div>
        <div class="flex gap-[12px] items-center pl-[19px] mb-[17px]" v-if="product?.options[0]?.size">
          <select class="form-control form-select w-fit" v-model="choosenSize">
            <option v-for="(size, i) in product?.options[0]?.size" :key="i" :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <div class="relative flex gap-19px">
          <div class="text-[#D651FF] font-semibold text-[45px]">
            ${{ product.price }}
          </div>
          <span class="text-[#636363] font-normal text-sm flex gap-[9px] items-end" v-if="product.discountPrice">
            <div class="line-through">${{ product.discountPrice }}</div>
            <div class="rounded-[8px] pt-[2px] pb-[3px] px-[14px] bg-[#FF7A00] text-[#FFFFFF] text-base font-medium">
              {{ Math.round((product.price - product.discountPrice) / product.price * 100) }}%
            </div>
          </span>
        </div>
        <div class="flex items-center gap-[18px]">
          <div class="">
            <div class="quantity-field flex justify-center items-center w-[183px]">
              <div class="cursor-pointer" @click="updateStock(false)">
                <img crossorigin="anonymous" src="/images/minus_icon.svg" alt="">
              </div>
              <input class="text-center pointer-events-none" type="number" readonly v-model="product.stock">
              <div class="cursor-pointer" @click="updateStock(true)">
                <img crossorigin="anonymous" src="/images/plus_icon.svg" alt="">
              </div>
            </div>
          </div>
          <button class="buy-btn flex items-center gap-[34px]" @click="updateCart(product._id, product.stock)">
            <img crossorigin="anonymous" src="/images/basket_buy_icon.svg" alt="">
            MUA
          </button>
          <button class="p-[20px] border border-[#C4C4C4] rounded-lg" @click="toggleLike(product?._id)">
            <img class="max-w[31px] max-w-fit" crossorigin="anonymous" 
              :src="product.is_like ? '/images/heart_icon_active.svg' : '/images/heart_icon_inactive.svg'" 
              alt=""
            >
          </button>
        </div>
      </div>
      <div class="flex-[0_0_60%] flex-grow-1">
        <div class="row gap-4">
          <!-- Main product images -->
          <div class="flex-[0_0_60%] flex gap-[21px] flex-grow">
            <div class="w-1/2" v-for="(img, i) in product.image" :key="i">
              <img crossorigin="anonymous" :src="img == 'public/uploads/products/default.jpg' 
                                    ? imageList[Math.floor(Math.random() * (1 - 0) + 0)] : urlApi + img"  alt="Product front" class="w-full object-cover">
            </div>
          </div>

          <!-- Thumbnail images -->
          <div class="flex-[0_0_125px] flex flex-col gap-[24px] justify-between">
            <img crossorigin="anonymous" :src="img" alt="Fabric closeup" class="w-[125px] object-cover" v-for="(img, i) in subImage"
              :key="i">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[131px]">
      <div class="row mt-[131px]">
        <div class="flex-[0_0_70%]">
          <div class="text-[#000000] text-2xl font-semibold mb-[73px]">
            Đánh giá của khách hàng
          </div>
          <div class="review-layout rounded-[10px]" v-if="userRating?.length > 0">
            <div class="header flex items-center justify-between">
              <div class="flex flex-col gap-[21px]">
                <div class="flex gap-[14px]">
                  <div class="text-[#4D4D4D] font-semibold text-[45px]">
                    {{ (product?.totalRating/product?.userRating) }}
                    <span class="text-[#4D4D4D] font-medium text-base">out of 5</span>
                  </div>
                </div>
                <div class="flex gap-[10px]">
                  <img
                    class="w-[24px]"
                    :src="Math.round(product?.totalRating/product?.userRating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
                    alt="" v-for="star in 5" :key="star">
                </div>
              </div>
              <div class="w-[30%]">
                {{ userRating?.length > 0 ? userRating[0].comment : '' }}
              </div>
              <div class="rating-bar flex flex-col gap-[10px]">
                <div class="flex items-center gap-[15px]" v-for="(star, index) in ratingDetails" :key="index">
                  <div class="flex items-center gap-[7px]">
                    <img crossorigin="anonymous" src="/images/star_rating_icon.svg" alt="">
                    {{ star.star }}
                  </div>
                  <div class="relative w-[270px] bg-[#DDDDDD] h-[9px] rounded-[15px]">
                    <div class="absolute bg-[#D651FF] h-[9px] rounded-[15px]" :style="{'width': star.totalRating }"></div>
                  </div>
                  <div class="">
                    {{ star.totalRating }}
                  </div>
                </div>
              </div>
            </div>
            <div class="body flex items-center gap-[72px]" v-for="(rate, i) in userRating" :key="i">
              <div class="flex flex-col gap-[21px]">
                <div class="flex gap-[14px]">
                  <div class="text-[#FF7020] font-bold text-[26px]">
                    {{ rate?.rating }}
                  </div>
                </div>
                <div class="flex gap-[10px]">
                  <img
                    class="w-[24px]"
                    :src="Math.round(rate?.rating) >= star ? '/images/star_rating_icon.svg' : '/images/star_details_icon_inactive.svg'"
                    alt="" v-for="star in 5" :key="star">
                </div>
              </div>
              <div class="flex flex-col gap-[31px]">
                <div class="flex gap-[28px]">
                  <div class="w-[57px] h-[57px] rounded-[50%] bg-[#C4C4C4]">
                  </div>
                  <div class="">
                    <div class="text-[#000000] font-semibold text-[18px]">
                      {{ rate?.userId?.name }}
                    </div>
                    <div class="text-[#D651FF] font-normal text-[14px]">
                      {{ formatDate(rate?.commentTime, 'MMM Do, YYYY') }}
                    </div>
                  </div>
                </div>
                <div class="">
                  {{ rate?.comment }}
                </div>
              </div>
            </div>
            <div class="w-full flex gap-[23px] items-center justify-center btn-layout mt-[61px]">
              <button class="bg-[#FFFFFF] border-[1px] border-[#F0E4F4]">
                <img crossorigin="anonymous" src="/images/arrow_down_loadmore.svg" alt="">
                Load More
              </button>
              <button class="bg-[#F0E4F4]">
                <img crossorigin="anonymous" src="/images/arrow_up_close.svg" alt="">
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
            <div class="relative mt-[63px]" v-for="(item, i) in product?.relate" :key="i">
              <div class="relate-product-layout overflow-hidden flex justify-end cursor-pointer" @click="toProduct(item.id)">
                <img crossorigin="anonymous" class="absolute left-0 bottom-0 object-cover max-w-[165px] rounded-[20px]" 
                :src="item?.image && item?.image?.length > 0 ? urlApi + item?.image[0] : '/images/product_details_image1.svg'" alt="">
                <div class="relate-details p-4 flex flex-col justify-end gap-[10px] flex-[0_0_53%]">
                  <div class="star-rate">
                    <img crossorigin="anonymous" src="/images/star_rate_details.svg" alt="">
                    {{ item?.userRating ? Math.round(item?.totalRating/item?.userRating) : 0 }}
                  </div>
                  <div class="main-text">
                    {{ item?.name ?? 0 }}
                  </div>
                  <div class="price">
                    ${{ item?.price ?? 0 }}
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
import { useRoute, useRouter } from 'vue-router'
import HeaderMain from '@/components/HeaderMain.vue'
import { formatDate } from '../constant/commonFunction'
import { useProductStore } from '@/stores/ProductStore'
import { toastError, toastSuccess } from '@/constant/commonUsage'

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const route = useRoute()
const router = useRouter()
const storeProduct = useProductStore()
const productId = ref(route.params.id ? route.params.id : 0)
const product = ref({
  options: [
    {color:[]}
  ],
  stock: 0
})
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
    totalRating: '86%',
    userRating: 0,
  },
  {
    star: 4,
    totalRating: '61%',
    userRating: 0,
  },
  {
    star: 3,
    totalRating: '12%',
    userRating: 0,
  },
  {
    star: 2,
    totalRating: '5%',
    userRating: 0,
  },
  {
    star: 1,
    totalRating: '8%',
    userRating: 0,
  },
])
const userRating = ref([])

onMounted(() => {
  initProductDetails()
})

const initProductDetails = async () => {
  await initProduct()
  await initProductComment()
}

const initProduct = async () => {
  try {
    const data = await storeProduct.getProductDetails(productId.value)
    data.stock = 0
    product.value = data
  } catch (error) {
    return error
  }
}

const initProductComment = async () => {
  try {
    const data = await storeProduct.getProductComment(productId.value)
    userRating.value = data?.results
    ratingDetails.value = calculateRatingDetails(userRating.value)
  } catch (error) {
    return error
  }
}

const calculateRatingDetails = (results) => {
  const totalRatings = results.length;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  // Count ratings
  results.forEach(result => {
    if (ratingCounts.hasOwnProperty(result.rating)) {
      ratingCounts[result.rating]++;
    }
  });

  // Calculate percentages and create ratingDetails
  const ratingDetails = [5, 4, 3, 2, 1].map(star => ({
    star,
    totalRating: `${Math.round((ratingCounts[star] / totalRatings) * 100)}%`,
    userRating: ratingCounts[star]
  }));

  return ratingDetails;
};

const getProductName = (e) => {
  console.log(e);
}
const choosenColor = ref('')
const choosenSize = ref('')
const chooseColor = (color) => {
  choosenColor.value = color
}
const updateStock = async (up) => {
  if (up && product.value?.quantity) {
    product.value.stock++
  } else {
    if (product.value.stock > 0) {
      product.value.stock--
    }
  }
}

const updateCart = async (id, quantity) => {
  if (!quantity) {
    toastError('Vui lòng thêm số lượng')
    return
  }
  if (!choosenColor.value) {
    toastError('Vui lòng chọn màu')
    return
  }
  if (!choosenSize.value) {
    toastError('Vui lòng chọn kích thước')
    return
  }
  try {
    const payload = {
      productId: id,
      quantity: quantity,
      color: choosenColor.value,
      size: choosenSize.value,
    }
    await storeProduct.addCart(payload)
    router.push({ name: 'Checkout' })
  } catch (error) {
    toastError('Đã hết hàng')
    return error
  }
}

const toProduct = async (id) => {
  productId.value = id
  scrollTo(0, 0)
  router.replace({ params: { id: id } })
  await initProductDetails()
}

const likeProduct = async (id) => {
    try {
        const payload = {
            productId: id,
        }
        await storeProduct.updateLikeProduct(payload)
        toastSuccess('Like success')
    } catch (error) {
        toastError(error)
        return error
    }
}

const unLikeProduct = async (id) => {
    try {
        const payload = {
            productId: id,
        }
        await storeProduct.updateUnLikeProduct(payload)
        toastSuccess('Unlike success')
    } catch (error) {
        toastError(error)
        return error
    }
}

const toggleLike = (id) => {
    product.value.is_like = !product.value.is_like
    if (product.value.is_like) {
        likeProduct(id)
    } else {
        unLikeProduct(id)
    }
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