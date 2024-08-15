<template>
    <HeaderMain></HeaderMain>
    <div class="signup-box mx-auto my-[50px] w-[80%]">
        <div class="bg-[#D651FF] rounded-[10px] h-[88px]"></div>
        <div class="row m-0">
            <Form ref="form" @submit="confirmRegister" class="signup-input-layout flex-[0_0_50%]" v-if="isRegister">
                <div class="">
                    <div class="label-text">Tên *</div>
                    <input type="text" v-model="userInfo.name">
                </div>
                <div class="">
                    <div class="label-text">Số điện thoại*</div>
                    <input type="number" v-model="userInfo.phone">
                </div>
                <div class="">
                    <div class="label-text">Email*</div>
                    <input type="email" v-model="userInfo.email">
                </div>
                <div class="">
                    <div class="label-text">Địa chỉ*</div>
                    <input type="text" v-model="userInfo.address">
                </div>
                <div class="">
                    <div class="label-text">Mật khẩu*</div>
                    <div class="relative">
                        <Field v-slot="{ field, errors }"
                            v-model="userInfo.password"
                            :name="'password'"
                            :rules="'required'"
                            ref="password"
                        >
                            <input v-bind="field" type="password">
                            <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                            <div class="text-red-500">{{ errors[0] }}</div>
                        </Field>
                    </div>
                </div>
                <div class="">
                    <div class="label-text">Nhập lại mật khẩu*</div>
                    <div class="relative">
                        <Field v-slot="{ field, errors }"
                            v-model="userInfo.passwordConfirm"
                            :name="'passwordConfirm'"
                            :rules="{
                                'required': true,
                                'confirmed': '@password',
                            }"
                        >
                            <input v-bind="field" type="password">
                            <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                            <div class="text-red-500">{{ errors[0] }}</div>
                        </Field>
                    </div>
                </div>
                <button type="submit" class="py-[19px] text-[20px] font-medium subscribe-purple-button w-[80%] mx-auto">
                    Đăng Kí
                </button>
            </Form>
            <form @submit.prevent="login" class="signup-input-layout flex-[0_0_50%]" v-else>
                <div class="">
                    <div class="label-text">Email *</div>
                    <input type="email" v-model="user.email" required>
                </div>
                <div class="">
                    <div class="label-text">Mật Khẩu*</div>
                    <div class="relative">
                        <input type="password" v-model="user.password" required>
                        <img class="absolute right-0 top-0 cursor-pointer" src="/images/hidden_eye_icon.svg" alt="">
                    </div>
                </div>
                <button class="py-[19px] text-[20px] font-medium subscribe-purple-button w-[80%] mx-auto">
                    Đăng Nhập
                </button>
            </form>
            <div class="flex-[0_0_50%] bg-[#F0E4F4] rounded-[12px]">
                <div class="flex flex-col items-center px-[24px] py-[44px]">
                    <img class="" src="/images/main_logo_no_bg.svg" alt="">
                    <div class="text-center font-medium text-xl ">
                        Đăng ký ngay bây giờ để có quyền truy cập độc quyền vào<br />
                        sản phẩm, sự kiện và ưu đãi.<br />
                        Chỉ cần cung cấp một vài chi tiết. Của nó<br />
                        tự do tham gia và mở cửa cho tất cả mọi người..
                    </div>
                    <button class="google-btn mt-[58px] mb-[21px]">
                        <img src="/images/google_btn_icon.svg" alt="">
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
const isRegister = ref(false)
const isLogin = ref(true)
const toLogin = () => {
    isRegister.value = false
    isLogin.value = true
    user.value = {
        email: '',
        password: ''
    }
}
const toRegister = () => {
    isRegister.value = true
    isLogin.value = false
    user.value = {
        email: '',
        password: ''
    }
}

const login = async () => {
    try {
        await storeAuth.loginUser(user.value)
        router.push(({ name: 'home' }))
    } catch (error) {
        return error
    }
}

const { handleSubmit } = useForm(userInfo.value);
const onInvalidSubmitError = ({ errors }) => {
    return errors;
};
const confirmRegister = handleSubmit(async () => {
    try {
        userInfo.value.phone = userInfo.value.phone.toString();
        const data = await storeAuth.userRegister(userInfo.value)
        if (data?.tokens) {
            scrollTo(0, 0)
            router.push({ name: 'home' })
        }
    } catch (error) {
        return error
    }
}, onInvalidSubmitError);
</script>

<style></style>