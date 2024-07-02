<template>
  <div class="container">
    <div class="relative bg-[#D651FF] w-full mx-auto text-center py-[193px] text-white">
      <div class="w-[775px] mx-auto font-bold text-[65px]">Chào mừng đến với 5 Clothes</div>
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
              <MenuButton class="w-[161px] bg-[#F3F3F3] text-[#636363] font-normal py-5 pl-[30px] pr-[21px] rounded-lg">
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
              <MenuButton class="w-[197px] bg-[#F3F3F3] text-[#636363] font-normal py-5 pl-[30px] pr-[21px] rounded-lg">
                <div class="flex items-center w-full justify-between gap-[60px]">
                  Giới tính
                  <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0961914H7.09619H14.1924L7.09619 7.19238L0 0.0961914Z" fill="#D651FF" />
                  </svg>
                </div>
              </MenuButton>
              <MenuItems
                class="z-[1] absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-for="(gender, index) in genders" :key="index" as="a" :class="[
                  'group flex w-full items-center text-[#636363] menu-item-text pt-[14px] pb-[9px] px-[35px] cursor-pointer',
                ]">
                {{ gender.label }}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <div class="flex-grow">
            <input placeholder="Nhập tên sản phẩm vào đây"
              class="search-input flex items-center justify-between w-full bg-[#F3F3F3] text-[#636363] font-normal py-5 pl-[30px] pr-[54px] rounded-lg"
              type="text">
          </div>
          <button
            class="bg-[#D651FF] text-xl rounded-lg text-white flex items-center gap-[19px] py-[19px] pr-[14px] pl-[29px] font-semibold">
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
          <img src="/images/hot_trend_img.svg" alt="">
        </div>
        <div class="col-span-3  flex gap-[31px] justify-center">
          <div class="sub-hot-image relative group hover:bg-[#000000CF]">
            <img src="/images/sub_hot_trend1.svg" alt="">
            <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
              <div
                class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                <img src="/images/search_details_icon.svg" alt="">
              </div>
            </div>
          </div>
          <div class="sub-hot-image relative group hover:bg-[#000000CF]">
            <img src="/images/sub_hot_trend2.svg" alt="">
            <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
              <div
                class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                <img src="/images/search_details_icon.svg" alt="">
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img src="/images/sub_hot_trend3.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3  flex gap-[31px] justify-center">
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img src="/images/sub_hot_trend4.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img src="/images/sub_hot_trend5.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img src="/images/search_details_icon.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="sub-hot-image relative group hover:bg-[#000000CF]">
              <img src="/images/sub_hot_trend5.svg" alt="">
              <div class="hidden group-hover:block absolute top-0 w-full h-full bg-[#000000CF] rounded-[20px]">
                <div
                  class="search-details-btn w-[79px] h-[79px] bg-[#D651FF] shadow-[0_14px_26px_0_rgba(39,13,48,0.25)] rounded-[50%]">
                  <img src="/images/search_details_icon.svg" alt="">
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
        <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]">
          Xem Thêm
          <img src="/images/arrow_find_icon.svg" alt="">
        </div>
      </div>
      <div class="pb-[150px]">
        <swiper :slides-per-view="1.5" :space-between="30" :centeredSlides="true" @swiper="onSwiper"
          @slideChange="onSlideChange" :navigation="true">
          <swiper-slide v-for="(product, index) in newProducts" :key="index">
            <div class="grid grid-cols-2 p-[50px] bg-[#FAFAFA] rounded-[10px] gap-[80px]">
              <div class="col-span-1 w-[270px]">
                <img :src="product.product_image" alt="">
              </div>
              <div class="col-span-1 flex flex-col justify-between">
                <div class="flex items-center gap-8">
                  <div class="pr-[34px] new-product-tag">
                    {{ product.tag }}
                  </div>
                  <div class="rating pr-[16px] flex items-center">
                    <img class="cursor-pointer"
                      :src="star.rate ? '/images/star_active.svg' : '/images/star_inactive.svg'" alt=""
                      v-for="(star, i) in product.rating" :key="i">
                    <div class="review-count pl-4">{{ product.reviews_count }} Reviews</div>
                  </div>
                </div>
                <div class="flex flex-col items-center pt-[26px] prod-name-text">
                  {{ product.product_name }}
                  <span class="prod-details-text">{{ product.product_details }}</span>
                </div>
                <div class="flex items-center pt-[19px] gap-6">
                  <div class="main-price">{{ product.product_sale_price }}</div>
                  <span class="sub-price">{{ product.product_price }}</span>
                </div>
                <div class="flex items-center gap-[30px] pt-[68px]">
                  <button class="add-cart-purple-button">
                    <img src="/images/basket_white.svg" alt="">
                    Thêm vào giỏ
                  </button>
                  <button class="p-[20px] border border-[#C4C4C4] rounded-lg">
                    <img src="/images/heart_icon.svg" alt="">
                  </button>
                  <div class="purple-text-500">Xem chi tiết</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="bg-[#FCF8FD] w-full px-auto flex justify-around mb-[150px] pt-[84px] pb-[114px]">
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img class="w-[60px]" src="/images/fast_clock_icon.svg" alt="">
          <div class="black-text-500">Chuyển phát nhanh</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img class="w-[60px]" src="/images/credit_card_icon.svg" alt="">
          <div class="black-text-500">Thanh toán an toàn</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img class="w-[60px]" src="/images/best_quality_icon.svg" alt="">
          <div class="black-text-500">Chất lượng tốt nhất</div>
        </div>
        <div class="flex flex-col justify-center items-center gap-[42px]">
          <img class="w-[60px]" src="/images/safe_icon.svg" alt="">
          <div class="black-text-500">Đảm bảo hoàn trả</div>
        </div>
      </div>
      <div class="px-[50px] mb-[150px]">
        <div class="flex justify-between pb-[80px]">
          <div class="font-bold text-4xl">Sản phẩm nổi bật</div>
          <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]">
            Xem Thêm
            <img src="/images/arrow_find_icon.svg" alt="">
          </div>
        </div>
        <swiper :slides-per-view="3" :space-between="50" :navigation="true">
          <swiper-slide v-for="(product, index) in saleWellProducts" :key="index">
            <div class="grid grid-cols-2 bg-[#FFFFFF] rounded-[10px]">
              <div class="col-span-1 w-[200px]">
                <img :src="product.product_image" alt="">
              </div>
              <div class="col-span-1 flex flex-col gap-[30px] flex-grow">
                <div class="flex items-center gap-8">
                  <div class="pr-[34px] new-product-tag text-[16px]">
                    {{ product.tag }}
                  </div>
                  <div class="star-rating flex items-center justify-center gap-[5px] px-[20px] py-[11px]">
                    <img src="/images/star_rating_icon.svg" alt="">
                    <div>{{ product.rating }}</div>
                  </div>
                </div>
                <div class="flex flex-col prod-name-text">
                  {{ product.product_name }}
                  <span class="prod-quantity-text pt-[14px]">{{ 'Số lượng còn :' + product.quantity }}</span>
                </div>
                <div class="flex items-center pt-[40px] gap-6" v-if="product.product_sale_price">
                  <div class="main-price">{{ product.product_sale_price }}</div>
                  <span class="sub-price">{{ product.product_price }}</span>
                </div>
                <div class="flex items-center pt-[40px] gap-6" v-else>
                  <div class="main-price">{{ product.product_price }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="px-[50px] mb-[150px]">
        <div class="flex justify-between pb-[80px]">
          <div class="font-bold text-4xl">Top 10 sản phẩm xếp hạng hàng đầu </div>
          <div class="flex items-center gap-[18px] cursor-pointer text-[#D651FF]">
            Xem Thêm
            <img src="/images/arrow_find_icon.svg" alt="">
          </div>
        </div>
        <div class="px-[50px] top-product-layout">
          <swiper :slides-per-view="'6'" :space-between="100" :navigation="true" :loop="true">
            <swiper-slide v-for="(product, index) in topProducts" :key="index">
              <div class="flex flex-col justify-between min-h-[491px]">
                <img :src="product.product_image" alt="">
                <div class="pt-[21px] flex gap-[5px]">
                  <img src="/images/star_active.svg" alt="" v-for="star in product.rating" :key="star">
                </div>
                <div class="pt-[14px]">
                  {{ product.product_name }}
                </div>
                <div class="pt-[10px]">
                  {{ product.color }}
                </div>
                <button class="btn-price-cart min-h-[73px] relative mt-[33px] text-left">
                  <div class="main-price">{{ product.product_sale_price ? product.product_sale_price :
                  product.product_price }}</div>
                  <div class="sub-price">{{ product.product_sale_price ? product.product_price : '' }}</div>
                  <div class="cart-btn-icon w-[57px] h-[57px] bg-[#D651FF] rounded-[50%]">
                    <img src="/images/basket_white.svg" alt="">
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
                  <img :src="product.image" alt="Áo thun cổ trơn dài tay">
                </div>
                <div class="col mt-[28px]">
                  <!-- Rating -->
                  <div class="flex items-center gap-[38px] mb-6">
                    <div class="top-sale-text">SALE</div>
                    <div class="flex gap-[7px]">
                      <img class="cursor-pointer"
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
                      <img class="min-w-[24px]" src="/images/basket_white.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="text-center mx-[50px] news-layout">
        <div class="title-new-text pb-[30px]">Tin mới nhất</div>
        <div class="sub-new-text pb-[80px]">
          Tham khảo các tin tức để cập nhật gu thời trang, và cách phối đồ theo xu<br />
          hướng mới nhất nhé.
        </div>
        <div class="row flex gap-[44px]">
          <div class="flex-[0_0_auto] flex flex-col w-[25%]" v-for="index in 5" :key="index">
            <div class="cursor-pointer"><img src="/images/image_new1.svg" alt=""></div>
            <div class="text-[#000000] text-[18px] font-semibold text-left pt-[25px] pb-[14px]">Xu hướng thời trang nam mùa hè năm nay có gì đặc biệt?</div>
            <div class="text-[#00000080] text-sm font-normal text-left">
              Áo thun nam đơn giản và quần short cho mùa hè thanh lịch nhẹ nhàng, những họa tiết toptrend đẹp dành...
              <span class="text-[#D651FF] text-sm font-medium cursor-pointer">Continue reading</span>
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

const sizes = ref([
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
])
const genders = ref([
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
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
  timer.value = setInterval(countdown, 1000);
});
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
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
</style>
