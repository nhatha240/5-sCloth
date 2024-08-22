<template>
    <HeaderMain></HeaderMain>
    <div class="signup-box mx-auto my-[50px] w-[80%]">
        <div class="bg-[#D651FF] rounded-[10px] h-[88px]"></div>
        <div class="row m-0">
            <Form ref="form" @submit="login" class="signup-input-layout flex-[0_0_50%]">
                <div class="">
                    <Field v-slot="{ field, errors, meta }"
                        v-model="user.email"
                        :name="'email'"
                        :rules="'required|email'"
                        ref="email"
                    >
                        <div class="label-text">Email *</div>
                        <input type="email" v-bind="field">
                        <div class="text-red-500" v-if="meta.touched && errors[0]">{{ errors[0] }}</div>
                    </Field>
                </div>
                <div class="">
                    <div class="label-text">Mật Khẩu*</div>
                    <div class="relative">
                        <Field v-slot="{ field, errors, meta }"
                            v-model="user.password"
                            :name="'password'"
                            :rules="'required'"
                            ref="password"
                        >
                            <input :type="showPassword ? 'text' : 'password'" v-bind="field">
                            <img crossorigin="anonymous" class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="" @click="toggleShowPassword">
                            <div class="text-red-500" v-if="meta.touched && errors[0]">{{ errors[0] }}</div>
                        </Field>
                    </div>
                </div>
                <button type="submit" class="py-[19px] text-[20px] font-medium subscribe-purple-button w-[80%] mx-auto">
                    Đăng Nhập
                </button>
            </Form>
            <div class="flex-[0_0_50%] bg-[#F0E4F4] rounded-[12px]">
                <div class="flex flex-col items-center px-[24px] py-[44px]">
                    <img crossorigin="anonymous" class="" src="/images/main_logo_no_bg.svg" alt="">
                    <div class="text-center font-medium text-xl ">
                        Đăng ký ngay bây giờ để có quyền truy cập độc quyền vào<br />
                        sản phẩm, sự kiện và ưu đãi.<br />
                        Chỉ cần cung cấp một vài chi tiết. Của nó<br />
                        tự do tham gia và mở cửa cho tất cả mọi người..
                    </div>
                    <button class="google-btn mt-[58px] mb-[21px]">
                        <img crossorigin="anonymous" src="/images/google_btn_icon.svg" alt="">
                        Tiếp tục với Google
                    </button>
                    <div class="text-center font-medium text-xl">Hoặc</div>
                    <div class="text-center font-medium text-xl" v-if="isLogin">
                        Tôi chưa có tài khoản
                        <span class="text-[#005491] cursor-pointer" @click="toRegister">ĐĂNG KÍ ngay!!</span>
                    </div>
                    <div class="text-center font-medium text-xl" v-else>
                        Tôi đã có tài khoản
                        <span class="text-[#005491] cursor-pointer" @click="toLogin">ĐĂNG Nhập ngay!!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import router from '@/router';
import { useForm } from "vee-validate";

const storeAuth = useAuthStore()
const user = ref({
    email: '',
    password: ''
})
const userInfo = ref({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    address: '',
})
const isLogin = ref(true)
const showPassword = ref(false)
const toLogin = () => {
    isRegister.value = false
    isLogin.value = true
    user.value = {
        email: '',
        password: ''
    }
}
const toRegister = () => {
    router.push({ name: 'RegisterView' })
}

const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
}

const { handleSubmit } = useForm(userInfo.value);
const onInvalidSubmitError = ({ errors }) => {
    return errors;
};
const login = handleSubmit(async () => {
    try {
        await storeAuth.loginUser(user.value)
        router.push(({ name: 'home' }))
    } catch (error) {
        return error
    }
}, onInvalidSubmitError);
</script>

<style></style>