<template>
    <div class="">
        <div class="mt-xl-0 flex justify-center">
            <img src="/images/main_logo.svg" alt="">
        </div>
        <Form @submit="loginAdmin" ref="form" class="mt-5">
            <label for="" class="v-label text-subtitle-1 font-weight-semibold pb-2 text-lightText">
                Email
            </label>
            <Field 
                v-slot="{ field, errors }"
                v-model="admin.email"
                :name="'email'"
                :rules="'required|email'"
            >
                <input
                    class="form-control mb-8"
                    type="email"
                    v-bind="field"
                >
                <div class="text-red-500">
                    {{ errors[0] }}
                </div>
            </Field>
            <label for="" class="v-label text-subtitle-1 font-weight-semibold pb-2 text-lightText">
                Password
            </label>
            <Field 
                v-slot="{ field, errors }"
                v-model="admin.password"
                :name="'password'"
                :rules="'required'"
            >
                <input
                    class="form-control pwdInput"
                    type="password"
                    v-bind="field"
                >
                <div class="text-red-500">
                    {{ errors[0] }}
                </div>
            </Field>
            <button type="submit" class="w-full p-[8px] bg-primary rounded-lg text-white mt-3">
                Sign in
            </button>
        </Form>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useForm } from 'vee-validate';
import router from '@/router';

const storeAuth = useAuthStore()
const admin = ref({
    email: '',
    password: '',
})

const { handleSubmit } = useForm(admin.value);
const onInvalidSubmitError = ({ errors }) => {
    return errors;
};
const loginAdmin = handleSubmit(async () => {
    try {
        const data = await storeAuth.loginAdmin(admin.value)
        console.log(data);
        router.push({ name: 'DashBoardView' })
    } catch (error) {
        return error
    }
}, onInvalidSubmitError);
</script>

<style></style>