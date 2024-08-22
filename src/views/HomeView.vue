<template>
  <HeaderMain />
  <div class="">
    <div class="relative bg-[#D651FF] w-full mx-auto text-center py-[193px] text-white">
      <div class="w-[50%] mx-auto font-bold text-[65px]">Chào mừng đến với <br/> 5 Clothes</div>
      <div class="w-[584px] mx-auto text-[16px] font-normal">
        Tại 5 Clothes, chúng tôi tin rằng màu sắc và họa tiết không chỉ là cách để thể hiện phong cách cá nhân mà còn là
        nguồn cảm hứng vô tận cho cuộc sống.  Dưới lăng kính của thời trang, mỗi mùa hè đều mang đến những xu hướng mới
        mẻ, tươi mới, và năm 2024 không phải là ngoại lệ.
      </div>
      <div class="search-bar absolute bottom-[-52px] w-full">
        <div
          class="flex gap-5 p-[30px] bg-white mx-[287px] items-center rounded-[10px] shadow-[0_16px_28px_0_rgba(141,40,173,0.15)]">
          <div>
            <Menu as="div" class="relative">
              <MenuButton class="w-[161px] bg-[#F3F3F3] text-[#636363] font-normal py-[20px] pl-[30px] pr-[21px] rounded-lg">
                <div class="flex items-center gap-[60px]">
                  Size
                  <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0961914H7.09619H14.1924L7.09619 7.19238L0 0.0961914Z" fill="#D651FF" />
                  </svg>
                </div>
              </MenuButton>
              <MenuItems
                class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-for="(size, index) in sizes" :key="index" as="a" :class="[
                  'group flex w-full items-center text-[#636363] menu-item-text pt-[14px] pb-[9px] px-[35px] cursor-pointer',
                ]">
                {{ size.label }}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div>
            <Menu as="div" class="relative">
              <MenuButton class="w-[197px] bg-[#F3F3F3] text-[#636363] font-normal py-[20px] pl-[30px] pr-[21px] rounded-lg">
                <div class="flex items-center w-full justify-between gap-[60px]">
                  Màu sắc
                  <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0961914H7.09619H14.1924L7.09619 7.19238L0 0.0961914Z" fill="#D651FF" />
                  </svg>
                </div>
              </MenuButton>
              <MenuItems
                class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-for="(color, index) in colors" :key="index" as="a" :class="[
                  'group flex w-full items-center text-[#636363] menu-item-text pt-[14px] pb-[9px] px-[35px] cursor-pointer',
                ]">
                {{ color.label }}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div class="flex-grow">
            <input placeholder="Nhập tên sản phẩm vào đây"
              class="search-input flex items-center justify-between w-full bg-[#F3F3F3] text-[#636363] font-normal py-[20px] pl-[30px] pr-[54px] rounded-lg"
              type="text">
          </div>
          <button
            class="bg-[#D651FF] text-xl rounded-lg text-white flex items-center gap-[19px] py-[19px] pr-[14px] pl-[29px] font-semibold"
            @click="searchProduct"
          >
            Tìm kiếm
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="content pt-[202px] pb-[152px] w-[1418px] mx-auto text-center">
      <div class="text-black font-bold text-4xl">
        Xu hướng tuần này
      </div>
      <div class="text-black font-normal text-base pt-[30px] pb-[80px]">
        Cung cấp thông tin về kinh nghiệm mua sắm, gợi ý cách phối đồ nữ,
        <br /> cách phối đồ nam bắt kịp xu hướng thời trang
      </div>
      <div class="grid grid-rows-2 grid-flow-col gap-4">
        <div class="row-span-2">
          <img crossorigin="anonymous" src="/images/hot_trend_img.svg" alt="">
        </div>
        <div class="col-span-3  flex gap-[31px] justify-center">
          <div class="sub-hot-image relative group hover:bg-[#000000CF]">
            <img crossorigin="anonymous" src="/images/sub_hot_trend1.svg" alt="">
            <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
              <div
                class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
              </div>
            </div>
          </div>
          <div class="sub-hot-image relative group hover:bg-[#000000CF]">
            <img crossorigin="anonymous" src="/images/sub_hot_trend2.svg" alt="">
            <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
              <div
                class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img crossorigin="anonymous" src="/images/sub_hot_trend3.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3  flex gap-[31px] justify-center">
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img crossorigin="anonymous" src="/images/sub_hot_trend4.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img crossorigin="anonymous" src="/images/sub_hot_trend5.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img crossorigin="anonymous" src="/images/sub_hot_trend5.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img crossorigin="anonymous" src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex justify-between mx-[150px] pb-[80px]">
        <div class="font-bold text-4xl">Sản phẩm nổi bật</div>
        <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]" @click="toProductList">
          Xem Thêm
          <img crossorigin="anonymous" src="/images/arrow_find_icon.svg" alt="">
        </div>
      </div>
      <div class="pb-[150px]">
        <swiper :slides-per-view="1.5" :space-between="30" :centeredSlides="true" @swiper="onSwiper"
          @slideChange="onSlideChange" :navigation="true">
          <swiper-slide v-for="(product, index) in newProducts" :key="index">
            <div class="grid grid-cols-2 p-[50px] bg-[#FAFAFA] rounded-[10px] gap-[80px]">
              <div class="col-span-1 w-[270px] object-fit rounded-[20px]" 
                :class="{ 'bg-gray-600': product?.image && product?.image[0] == 'public/uploads/products/default.jpg'  }"
              >
                <img crossorigin="anonymous" class="min-w-[270px] min-h-[386px] rounded-[20px]"
                  :src="product?.image && product?.image[0] !== 'public/uploads/products/default.jpg' 
                    ? urlApi + product.image[0] : ``"
                  alt=""
                >
              </div>
              <div class="col-span-1 flex flex-col justify-between">
                <div class="flex items-center gap-8">
                  <div class="flex items-center">
                    <div class="pr-[34px] new-product-tag" v-for="(tag, index) in product.tags" :key="index">
                      {{ tag }}{{ (index < tags?.length - 1 && index % 2 === 0) ? ', ' : '' }}
                    </div>
                  </div>
                  <div class="rating pr-[16px] flex items-center">
                    <img crossorigin="anonymous" class="cursor-pointer"
                      :src="Math.round(product?.totalRating/product?.userRating) >= star ? '/images/star_active.svg' : '/images/star_inactive.svg'" alt=""
                      v-for="star in 5" :key="star">
                    <div class="review-count pl-4">{{ product.userRating ? Math.round(product?.totalRating/product?.userRating) : 0 }} Reviews</div>
                  </div>
                </div>
                <div class="flex flex-col items-start pt-[26px] prod-name-text">
                  {{ product.name }}
                  <span class="prod-details-text">{{ product.description }}</span>
                </div>
                <div class="flex items-center pt-[19px] gap-6">
                  <div class="main-price">${{ product.price }}</div>
                  <span class="sub-price">${{ product.discountPrice }}</span>
                </div>
                <div class="flex items-center gap-[30px] pt-[68px]">
                  <button class="add-cart-purple-button" 
                    :class="{ 'pointer-events-none bg-gray-500': product?.quantity <= 0 }"  
                    @click="updateCart(product?._id, 1)"
                  >
                    <img crossorigin="anonymous" src="/images/basket_white.svg" alt="">
                    Thêm vào giỏ
                  </button>
                  <button class="p-[20px] border border-[#C4C4C4] rounded-lg" @click="likeByUser(product?._id)">
                    <img crossorigin="anonymous" src="/images/heart_icon.svg" alt="">
                  </button>
                  <div class="cursor-pointer purple-text-500" @click="toProduct(product?._id)">Xem chi tiết</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-[#FCF8FD] w-full px-auto flex justify-around mb-[150px] pt-[84px] pb-[114px]">
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img crossorigin="anonymous" class="w-[60px]" src="/images/fast_clock_icon.svg" alt="">
          <div class="black-text-500">Chuyển phát nhanh</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img crossorigin="anonymous" class="w-[60px]" src="/images/credit_card_icon.svg" alt="">
          <div class="black-text-500">Thanh toán an toàn</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img crossorigin="anonymous" class="w-[60px]" src="/images/best_quality_icon.svg" alt="">
          <div class="black-text-500">Chất lượng tốt nhất</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img crossorigin="anonymous" class="w-[60px]" src="/images/safe_icon.svg" alt="">
          <div class="black-text-500">Đảm bảo hoàn trả</div>
        </div>
      </div>
      <HotProductSlide :saleWellProducts="saleWellProducts" v-if="saleWellProducts && saleWellProducts?.length > 0"></HotProductSlide>
      <div class="px-[50px] mb-[150px]">
        <div class="flex justify-between pb-[80px]">
          <div class="font-bold text-4xl">Top 10 sản phẩm xếp hạng hàng đầu </div>
          <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]" @click="toLikeProducts">
            Xem Thêm
            <img crossorigin="anonymous" src="/images/arrow_find_icon.svg" alt="">
          </div>
        </div>
        <div class="px-[50px] top-product-layout">
          <swiper :slides-per-view="'6'" :space-between="100" :navigation="true">
            <swiper-slide v-for="(product, index) in topProducts" :key="index">
              <div class="flex flex-col justify-between min-h-[491px]">
                <div class="min-h-[197px] min-w-[138px] object-fit rounded-[16px]" :class="{ 'bg-gray-500': product?.image && product?.image[0] == 'public/uploads/products/default.jpg' }">
                  <img class="min-h-[197px] min-w-[138px] rounded-[16px]" crossorigin="anonymous" :src="urlApi + product?.image[0]" alt="" v-if="product?.image && product?.image[0]">
                </div>
                <div class="pt-[21px] flex gap-[5px]">
                  <img crossorigin="anonymous" :src="Math.round(product?.totalRating/product?.userRating) >= star ? '/images/star_active.svg' : '/images/star_inactive.svg'" alt="" v-for="star in 5" :key="star">
                </div>
                <div class="pt-[14px]">
                  {{ product.name }}
                </div>
                <div class="flex gap-1 pt-[10px]" v-if="product?.options?.length > 0">
                  <div class="" v-for="color in product?.options[0]?.color" :key="color">
                    {{ color }}{{ (i < product?.options[0]?.color?.length - 1 && i % 2 === 0) ? ', ' : '' }}
                  </div>
                </div>
                <button class="btn-price-cart min-h-[73px] relative mt-[33px] text-left">
                  <div class="main-price">{{ product.price }}</div>
                  <div class="sub-price">{{ product.discountPrice ? product.discountPrice : '' }}</div>
                  <div class="cart-btn-icon w-[57px] h-[57px] bg-[#D651FF] rounded-[50%]"
                    :class="{ 'pointer-events-none bg-gray-500': product?.quantity <= 0 }"  
                    @click="updateCart(product?.id, 1)">
                    <img crossorigin="anonymous" src="/images/basket_white.svg" alt="">
                  </div>
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="flex bg-[#D651FF] p-[50px] bg-gradient-to-r from-[#D651FF] to-[#310043] mb-[150px]">
        <!-- Left side: Text content -->
        <div class="w-1/3 flex flex-col justify-center text-white pr-8">
          <h1 class="text-4xl font-bold mb-4">Flash Sale</h1>
          <p class="mb-8">
            Nhân dịp mùa hè tưng bừng giảm giá các sản phẩm nổi bật và thoáng mát, các tín đồ thời trang hãy nhanh tay
            chốt ngay đồ ưng ý.</p>
          <div class="w-fit flex space-x-8 px-[41px] py-[17px] rounded-[10px] border border-[#FFFFFF2E]">
            <div>
              <span class="text-3xl font-bold">{{ flashSaleTimer.hours.toString().padStart(2, '0') }}</span>
              <p>Giờ</p>
            </div>
            <div>
              <span class="text-3xl font-bold">{{ flashSaleTimer.minutes.toString().padStart(2, '0') }}</span>
              <p>Phút</p>
            </div>
            <div>
              <span class="text-3xl font-bold">{{ flashSaleTimer.seconds.toString().padStart(2, '0') }}</span>
              <p>Giây</p>
            </div>
          </div>
        </div>
        <!-- Right side: Swiper -->
        <div class="w-2/3 flash-sale-layout">
          <swiper :slides-per-view="1.5" :space-between="20" :navigation="true">
            <swiper-slide v-for="(product, index) in flashSaleProducts" :key="index">
              <div class="bg-[#310043] rounded-[20px] p-[30px] text-white row gap-[38px]">
                <!-- Product image -->
                <div class="flex-[0_0_200px] object-cover rounded-xl mb-3 w-[200px]">
                  <img crossorigin="anonymous" :src="product.image" alt="Áo thun cổ trơn dài tay">
                </div>
                <div class="col mt-[28px]">
                  <!-- Rating -->
                  <div class="flex items-center gap-[38px] mb-6">
                    <div class="top-sale-text">SALE</div>
                    <div class="flex gap-[7px]">
                      <img crossorigin="anonymous" class="cursor-pointer"
                        :src="star.rate ? '/images/star_active.svg' : '/images/star_inactive.svg'" alt=""
                        v-for="(star, i) in product.rating" :key="i">
                      <span class="ml-1 text-sm">({{ product.rating_count }})</span>
                    </div>
                  </div>

                  <!-- Product name -->
                  <h2 class="text-lg font-semibold mb-1">{{ product.name }}</h2>
                  <p class="text-sm text-purple-300 mb-2">{{ product.color }}</p>

                  <!-- Price -->
                  <div class="flex items-center gap-5 mb-2 price-layout pt-[48px]">
                    <span class="main-price">{{ product.sale_price ? '$' + product.sale_price : '$' + product.price
                      }}</span>
                    <span class="sub-main-price" v-if="product.sale_price">{{ '$' + product.price }}</span>
                  </div>

                  <!-- Stock -->
                  <div class="flex items-center justify-between gap-[20px]">
                    <div class="flex flex-col w-full">
                      <div class="relative stock-count-field">
                        <div class="absolute bg-[#FF7A00] h-[6px] rounded-[39px]"
                          :style="{ width: `${(product.stock / product.max_stock) * 100}%` }"></div>
                      </div>
                      <div class="text-sm">Còn: {{ product.stock }}</div>
                    </div>
                    <!-- Cart button -->
                    <button class="bg-purple-500 rounded-full p-[17px]">
                      <img crossorigin="anonymous" class="min-w-[24px]" src="/images/basket_white.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="text-center mx-[50px] mb-[150px] news-layout">
        <div class="title-new-text pb-[30px]">Tin mới nhất</div>
        <div class="sub-new-text pb-[80px]">
          Tham khảo các tin tức để cập nhật gu thời trang, và cách phối đồ theo xu<br />
          hướng mới nhất nhé.
        </div>
        <div class="row flex gap-[44px] justify-between">
          <div class="flex-[0_0_auto] flex flex-col !w-[372px]" v-for="index in 3" :key="index">
            <div class="cursor-pointer"><img crossorigin="anonymous" src="/images/image_new1.svg" alt=""></div>
            <div class="text-[#000000] text-[18px] font-semibold text-left pt-[25px] pb-[14px]">Xu hướng thời trang nam
              mùa hè năm nay có gì đặc biệt?</div>
            <div class="text-[#00000080] text-sm font-normal text-left">
              Áo thun nam đơn giản và quần short cho mùa hè thanh lịch nhẹ nhàng, những họa tiết toptrend đẹp dành...
              <span class="text-[#D651FF] text-sm font-medium cursor-pointer">Continue reading</span>
            </div>
          </div>
        </div>
        <div class="pt-[148px] flex justify-center mb-[50px]">
          <button class="view-more-btn" @click="toProductList">
            Xem thêm
            <img crossorigin="anonymous" src="/images/arrow_right_white.svg" alt="">
          </button>
        </div>
      </div>
      <div class="rating-layout text-center mb-[150px]">
        <div class="title-new-text pb-[30px] mx-[50px]">Đánh Giá</div>
        <div class="sub-new-text pb-[80px] mx-[50px]">
          Đánh giá từ người dùng là sự quan tâm đến sản phẩm, là uy tín và chất<br />
          lượng của cửa hàng. Những góp ý của khách hàng luôn được chúng tôi<br />
          tiếp nhận và khắc phục
        </div>
        <div>
          <swiper :slides-per-view="3.8" :space-between="20" :navigation="true" :centeredSlides="true" class="rating-list">
            <swiper-slide v-for="(rate, index) in ratingList" :key="index">
              <div class="p-[30px] rating-details">
                <div class="flex items-center gap-3">
                  <img crossorigin="anonymous" class="cursor-pointer" :src="rate?.rating >= star ? '/images/star_rating_active.svg' : '/images/star_rating_inactive.svg'"
                    alt="" v-for="star in 5" :key="star">
                </div>
                <div class="my-[30px] text-left">
                  {{ rate?.comment }}
                </div>
                <div class="row justify-between">
                  <div class="col flex-col text-left">
                    <div class="font-semibold text-[18px]">{{ rate?.userId?.name }}</div>
                    <div class="text-[#3D3D3D] font-normal text-sm">{{ formatDate(rate?.commentTime, 'DD-MM-YYYY') }}</div>
                  </div>
                  <div class="">
                    <!-- <img crossorigin="anonymous" :src="rate.avatar" alt="" v-if="rate.avatar"> -->
                    <div class="avatar-empty"></div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="bg-[#6E1F86] brand-info-layout">
        <div class="flex justify-center pt-[117px] pb-[101px] gap-[131px]">
          <div class="flex flex-col items-center" v-for="(brand, index) in brandInfo" :key="index">
            <div class="flex gap-[34px] items-center">
              <img crossorigin="anonymous" class="w-full" :src="brand.logo" alt="">
              <span class="text-[#FFFFFF] text-[50px] font-semibold">{{ brand.count }}</span>
            </div>
            <div class="text-[#FFFFFF99] text-[20px] font-normal pt-[29px]">
              {{ brand.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import HeaderMain from '@/components/HeaderMain.vue'
import HotProductSlide from '@/components/HotProductSlide.vue'
import { useProductStore } from '../stores/ProductStore'
import { useUserStore } from '../stores/UserStore'
import router from '@/router';
import { toastSuccess } from '@/constant/commonUsage';
import { formatDate } from '@/constant/commonFunction';

const urlApi = import.meta.env.VITE_BASE_URL + '/'
const storeProduct = useProductStore()
const storeUser = useUserStore()
const sizes = ref([
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
])
const colors = ref([
  { label: 'Xanh', value: 'xanh' },
  { label: 'Đỏ', value: 'đỏ' },
  { label: 'Vàng', value: 'vàng' },
])
const newProducts = ref([
  {
    tag: 'Mới',
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    reviews_count: 459,
    product_name: 'Áo Thun Cò Tròn Vảiotton',
    product_details: ' Với chất liệu vải cotton thoáng mát 2 chiều, giúp người mặc thỏa sức phô diễn cá tính vào mùa hè sôi động ',
    product_price: '$20,99',
    product_sale_price: '$19,23',
    product_image: '/images/slide_main_image1.svg',
  },
  {
    tag: 'Mới',
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    reviews_count: 459,
    product_name: 'Áo khoác cổ cao thoáng khí',
    product_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio',
    product_price: '$20,99',
    product_sale_price: '$19,23',
    product_image: '/images/slide_main_image2.svg',
  },
  {
    tag: 'Mới',
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    reviews_count: 459,
    product_name: 'Áo khoác cổ cao thoáng khí',
    product_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio',
    product_price: '$20,99',
    product_sale_price: '$19,23',
    product_image: '/images/slide_main_image2.svg',
  },
])

const saleWellProducts = ref([
  {
    tag: 'Sản phẩm hót',
    rating: 4.5,
    product_name: 'Quần tây âu',
    quantity: 335,
    product_price: '$16,99',
    product_sale_price: '$15,63',
    product_image: '/images/hot_sale_product1.svg',
  },
  {
    tag: 'Sản phẩm hót',
    rating: 4.5,
    product_name: 'Áo len có cổ',
    quantity: 335,
    product_price: '$24,99',
    product_sale_price: '',
    product_image: '/images/hot_sale_product2.svg',
  },
  {
    tag: 'Sản phẩm hót',
    rating: 4.7,
    product_name: 'Quần đùi cotton co giản',
    quantity: 335,
    product_price: '$25',
    product_sale_price: '$21,99',
    product_image: '/images/hot_sale_product3.svg',
  },
])
const topProducts = ref([
  {
    product_image: '/images/top_product1.svg',
    product_name: 'Áo thun cổ tròn Jolerance',
    rating: 4,
    color: 'Đen',
    product_price: '$16,99',
    product_sale_price: '$15,63',
  },
  {
    product_image: '/images/top_product2.svg',
    product_name: 'Áo thun cổ tròn Jolerance',
    rating: 4,
    color: 'Trắng',
    product_price: '$18,13',
    product_sale_price: '',
  },
  {
    product_image: '/images/top_product3.svg',
    product_name: 'Áo thun cổ tròn @Reatest Beroes',
    rating: 3,
    color: 'John Doe',
    product_price: '$19,23',
    product_sale_price: '$20,99',
  },
  {
    product_image: '/images/top_product4.svg',
    product_name: 'Áo thun cổ tròn Jolerance',
    rating: 4,
    color: 'Đen',
    product_price: '$16,99',
    product_sale_price: '$15,63',
  },
  {
    product_image: '/images/top_product5.svg',
    product_name: 'Áo thun cổ tròn AURA',
    rating: 4,
    color: 'Nâu',
    product_price: '$19,51',
    product_sale_price: '$13,77',
  },
  {
    product_image: '/images/top_product6.svg',
    product_name: 'Áo thun cổ tròn AURA',
    rating: 4,
    color: 'Xám',
    product_price: '$16,00',
    product_sale_price: '$15,63',
  },
  {
    product_image: '/images/top_product6.svg',
    product_name: 'Áo thun cổ tròn AURA',
    rating: 4,
    color: 'Xám',
    product_price: '$16,00',
    product_sale_price: '$15,63',
  },
])
const flashSaleProducts = ref([
  {
    name: 'Áo thun có trơn dài tay',
    color: 'trắng',
    image: '/images/flash_sale_product1.svg',
    sale_price: 15.63,
    price: 18.53,
    reviews: 459,
    stock: 32,
    max_stock: 40,
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    rating_count: 459,
  },
  {
    name: 'Com bo áo hoodie quần Đen',
    color: 'xám',
    image: '/images/flash_sale_product2.svg',
    sale_price: 0,
    price: 18.53,
    reviews: 459,
    stock: 32,
    max_stock: 50,
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    rating_count: 459,
  },
]);
const ratingList = ref([
  {
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    comment: 'Sản phẩm rất đẹp, chất liệu vải chất lượng tôi khá ưng ý với cửa hàng này. Mong cửa hàng có thể mở chi nhánh gần khu vực tôi sống!',
    name: 'Long Vũ',
    comment_date: '11-5-2024',
    avatar: '',
  },
  {
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: false, value: 4 },
      { rate: false, value: 5 },
    ],
    comment: 'Sản phẩm chất lượng, tôi khá ấn tượng về cửa hàng. Nhưng đơn vị giao hàng của cửa hàng chọn quá tệ, giao hàng trì trệ hộp đựng sản phẩm của tôi bị móp méo khi nhận. !',
    name: 'Vũ khó tính',
    comment_date: '11-5-2024',
    avatar: '',
  },
  {
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: true, value: 5 },
    ],
    comment: 'Sản phẩm chất lượng, tôi khá ấn tượng về cửa hàng. Đơn vị giao hàng của cửa hàng chọn quá tốt, giao hàng nhanh bảo quản sản phẩm rất tốt, tôi rất thích điều này !',
    name: 'Vũ vui vẻ',
    comment_date: '11-5-2024',
    avatar: '',
  },
  {
    rating: [
      { rate: true, value: 1 },
      { rate: true, value: 2 },
      { rate: true, value: 3 },
      { rate: true, value: 4 },
      { rate: false, value: 5 },
    ],
    comment: 'Tôi không vui vì cửa hàng giao hàng sớm làm tôi không kịp vay tiền để nhận hàng. Mặc dù đó là điều tốt.!!!',
    name: 'Vũ vay nợ',
    comment_date: '11-5-2024',
    avatar: '',
  },
])
const brandInfo = ref([
  {
    logo: '/images/store_icon.svg',
    count: '268',
    text: 'Cửa hàng của chúng tôi',
  },
  {
    logo: '/images/group_client_icon.svg',
    count: '25,634',
    text: 'Số lượng khách hàng đã mua sản phẩm',
  },
  {
    logo: '/images/shirt_icon.svg',
    count: '25+',
    text: 'Bộ sưu tập thời trang',
  },
])

const flashSaleTimer = ref({
  hours: 5,
  minutes: 42,
  seconds: 19,
})
const timer = ref()

const hoveredRating = ref(-1);
const shouldRatingShow = (index) => hoveredRating.value >= index;

const countdown = () => {
  if (flashSaleTimer.value.hours === 0 && flashSaleTimer.value.minutes === 0 && flashSaleTimer.value.seconds === 0) {
    clearInterval(timer.value);
    // Timer has ended, you can emit an event or perform some action here
    return;
  }

  if (flashSaleTimer.value.seconds > 0) {
    flashSaleTimer.value.seconds--;
  } else if (flashSaleTimer.value.minutes > 0) {
    flashSaleTimer.value.minutes--;
    flashSaleTimer.value.seconds = 59;
  } else if (flashSaleTimer.value.hours > 0) {
    flashSaleTimer.value.hours--;
    flashSaleTimer.value.minutes = 59;
    flashSaleTimer.value.seconds = 59;
  }
};

onMounted(() => {
  initCategory()
  initTopSale()
  initHotProduct()
  initTopProducts()
  initFlashSaleProducts()
  initRatings()
  timer.value = setInterval(countdown, 1000);
});
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const searchProduct = async () => {
  try {
    // await storeProduct.getProduct()
    router.push({ name: 'ProductListView' })
  } catch (error) {
    return error;
  }
}

const initRatings = async () => {
  try {
    const params = {
      limit: 10,
    }
    const data = await storeUser.getCommenRating(params)
    if (data?.results && data?.results?.length > 0) {
      ratingList.value = data?.results;
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

const initTopProducts = async () => {
  try {
    const params = {
      trending: true,
    }
    const data = await storeProduct.getAllProduct(params)
    if (data?.results?.results && data?.results?.results?.length > 0) {
      topProducts.value = data?.results?.results;
    }
  } catch (error) {
    return error
  }
}

const initFlashSaleProducts = async () => {
  try {
    const params = {
      flashSale: true,
    }
    const data = await storeProduct.getAllProduct(params)
    console.log(data)
  } catch (error) {
    return error
  }
}

const initTopSale = async () => {
  try {
    const data = await storeProduct.getProductTopSale()
    if (data && data?.length > 0) {
      saleWellProducts.value = data;
    }
  } catch (error) {
    return error
  }
}

const initHotProduct = async () => {
  try {
    const data = await storeProduct.getHotProduct()
    console.log(data)
    if (data && data?.length > 0) {
      newProducts.value = data;
    }
  } catch (error) {
    return error
  }
}

const initCategory = async () => {
  try {
    const params = {
      page: 1,
      limit: 6
    }
    const data = await storeProduct.getAllCategory(params)
    console.log(data)
  } catch (error) {
    return error
  }
}

const toProductList = () => {
    router.push({ name: 'ProductListView' })
    scrollTo(0 ,0)
}

const toLikeProducts = () => {
    router.push({ name: 'ProductListView' })
    scrollTo(0 ,0)
}

const toProduct = (id) => {
    router.push({ name: 'ProductView', params: { id: id } })
    scrollTo(0 ,0)
}

const likeByUser = (id) => {
  try {
        // toastSuccess('Add to cart success')
    } catch (error) {
        return error
    }
}

const updateCart = async (id, quantity) => {
    try {
        const payload = {
            productId: id,
            quantity: quantity,
        }
        await storeProduct.addCart(payload)
        toastSuccess('Add to cart success')
        await storeProduct.listCart()
    } catch (error) {
        return error
    }
}
</script>
<style>
.search-details-btn {
  cursor: pointer;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 50%;
  right: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}

.cart-btn-icon {
  cursor: pointer;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: -57px;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  box-shadow: 0px 14px 26px 0px #270D3040;
}

.cart-btn-icon img {
  position: absolute;
  left: 0;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
}

.search-details-btn img {
  position: absolute;
  left: 0;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
}

.sub-hot-image {
  width: 250px;
  height: 360px;
  border-radius: 20px;
  background: #C4C4C4;
}

.rating {
  display: flex;
  align-items: center;
  gap: 7px;
}

.review-count {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #755A7D;
}

.main-price {
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #D651FF;
}

.sub-price {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #755A7D;
  text-decoration: line-through;
}

.new-product-tag {
  padding: 11px;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  background: #8D28AD26;
  color: #D651FF;
  width: 131px;
  border-radius: 10px;
  flex-grow: 1;
}

.prod-name-text {
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: #000000;
}

.prod-details-text {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  color: #00000080;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}

.prod-quantity-text {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #00000080;
}

.star-rating {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #FF7A00;
  background: #FFD782;
  border-radius: 10px;
}

.btn-price-cart {
  padding: 10px 18px;
  background: #EEDFF3;
  border-radius: 10px;
}

.btn-price-cart .main-price {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #000000;
}

.btn-price-cart .sub-price {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #636363;
}

.top-product-layout .swiper-button-prev {
  top: 113px;
}

.top-product-layout .swiper-button-next {
  top: 113px;
}

.stock-count-field {
  width: 100%;
  background: #C4C4C4;
  height: 6px;
  border-radius: 39px;
}

.price-layout .main-price {
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #D651FF;
}

.price-layout .sub-main-price {
  font-family: Poppins;
  text-decoration: line-through;
  color: #FFFFFF99;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.avatar-empty {
  background: #C4C4C4;
  border-radius: 50%;
  width: 54px;
  height: 54px;
}

.rating-list {
  padding-bottom: 57px !important;
}
.rating-list .swiper-button-next{
  bottom: 0px !important;
  right: 150px !important;
  top: unset !important;
  background-color: #D651FF;
  background-image: url('/public/images/arrow_find_icon_white.svg') !important;
  box-shadow: unset !important;
}
.rating-list .swiper-button-prev{
  margin-left: auto;
  bottom: 0px !important;
  top: unset !important;
  right: 229px !important;
  background-color: #D651FF;
  background-image: url('/public/images/arrow_find_icon_white.svg') !important;
  box-shadow: unset !important;
}
.rating-list .swiper-button-next.swiper-button-disabled{
  background-color: #FFFFFF !important;
  background-image: url('/public/images/arrow_find_icon.svg') !important;
}
.rating-list .swiper-button-prev.swiper-button-disabled{
  background-color: #FFFFFF !important;
  background-image: url('/public/images/arrow_find_icon.svg') !important;
}
</style>
