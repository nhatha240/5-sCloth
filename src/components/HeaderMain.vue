<template>
  <div class="container mx-auto w-[1280px] py-10">
    <nav class="p-4 flex items-center justify-between">
      <div class="flex items-center">
        <img src="@/assets/logs.jpeg" alt="Clevr Logo" class="h-8 mr-4" />
      </div>
      <ul class="text-[#755A7D] flex space-x-6">
        <li>
          <a href="#" class="hover:text-black hover:subpixel-antialiase">Trang chủ</a>
        </li>
        <li><a href="#" class="hover:text-black">Quần áo phong cách</a></li>
        <li><a href="#" class="hover:text-black">thời trang thường ngày</a></li>
        <li><a href="#" class="hover:text-black">Bán Chạy</a></li>
        <li><a href="#" class="hover:text-black">Top bán chạy!</a></li>
        <li><a href="#" class="hover:text-black">Nổi Bật</a></li>
        <li><a href="#" class="hover:text-black">Siêu Sale</a></li>
      </ul>
      <div class="flex items-center">
        <button class="rounded-full p-2 mr-4">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
        <button class="bg-white text-purple-800 font-semibold py-2 px-4 rounded-full">
          Roberto
        </button>
      </div>
    </nav>
  </div>
</template>
<script setup>
// import { useRouter } from 'vue-router'
// import { useAuthStore } from '../stores/AuthStore'

// const storeAuth = useAuthStore()
// const router = useRouter()

// const logout = async () => {
//   try {
//     await storeAuth.logout()
//     router.push({ name: 'Login' })
//   } catch (error) {}
// }
</script>
<style scoped></style>
