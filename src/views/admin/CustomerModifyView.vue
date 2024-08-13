<template>
    <Form class="cutomer-modify-layout" @submit="saveCustomer" ref="form">
        <div class="flex items-center gap-1 cursor-pointer" @click="backToCustomer">
            <img src="/images/icon_back_screen.svg" alt="">
            Back
        </div>
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">
                {{ customerId ? 'Edit Customer' : 'Add Customer' }}
            </div>
            <div class="flex items-center gap-3">
                <button
                    type="button"
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToCustomer">
                    Cancel
                </button>
                <button
                    type="submit"
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center"
                >
                    Save
                </button>
            </div>
        </div>
        <div class="order-details-box !border-none">
            <div class="label-text pb-1">
                Customer Information
            </div>
            <div class="details-text pb-6">
                Most important information about the customer
            </div>
            <div class="flex gap-[28px] pb-6">
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Full Name</div>
                    <Field 
                        v-slot="{ field, errors }"
                        v-model="customerInfo.name"
                        :name="'customerName'"
                        :rules="'required'"
                    >
                        <input class="form-control w-full"  :class="{ '!border-red-500': errors[0] }" type="text" v-bind="field">
                        <div class="text-red-500">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Password</div>
                    <input class="form-control w-full" type="password" v-model="customerInfo.password" placeholder="********">
                </div>
            </div>
            <div class="flex gap-[28px] pb-10 border-b border-[#E6E9F4]">
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Email Address</div>
                    <Field 
                        v-slot="{ field, errors }"
                        v-model="customerInfo.email"
                        :name="'customerEmail'"
                        :rules="'required|email'"
                    >
                        <input class="form-control w-full" :class="{ '!border-red-500': errors[0] }" type="email" v-bind="field">
                        <div class="text-red-500">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Phone Number</div>
                    <Field 
                        v-slot="{ field, errors }"
                        v-model="customerInfo.phone"
                        :name="'customerPhone'"
                        :rules="'required'"
                    >
                        <input class="form-control w-full" :class="{ '!border-red-500': errors[0] }" type="text" v-bind="field">
                        <div class="text-red-500">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>
            </div>
            <div class="label-text pb-1">
                Customer Address
            </div>
            <div class="details-text pb-6">
                Shipping address information
            </div>
            <div class="flex gap-[28px] pb-6">
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Address</div>
                    <Field 
                        v-slot="{ field, errors }"
                        v-model="customerInfo.address"
                        :name="'customerAddress'"
                        :rules="'required'"
                    >
                        <input class="form-control w-full" :class="{ '!border-red-500': errors[0] }" type="text" v-bind="field">
                        <div class="text-red-500">
                            {{ errors[0] }}
                        </div>
                    </Field>
                </div>
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Apartment</div>
                    <input class="form-control w-full" type="text" v-model="customerInfo.apartment">
                </div>
            </div>
            <div class="flex gap-[28px] pb-6">
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">City</div>
                    <input class="form-control w-full"  type="text" v-model="customerInfo.city">
                </div>
                <div class="w-50">
                    <div class="mb-1 details-text pb-1">Country</div>
                    <input class="form-control w-full"  type="text" v-model="customerInfo.country">
                </div>
            </div>
            <!-- <div class="label-text pb-1">
                Customer Notes
            </div>
            <div class="details-text pb-6">
                Add notes about customer
            </div>
            <div class="flex gap-[28px]">
                <div class="w-100">
                    <div class="mb-1 details-text pb-1">Notes</div>
                    <textarea class="form-control w-full" type="text" placeholder="Add notes about customer"></textarea>
                </div>
            </div> -->
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] pt-[28px] mt-[30px]">
            <div class="flex items-center gap-3">
                <button
                    type="button"
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]"
                    @click="backToCustomer">
                    Cancel
                </button>
                <button
                    type="submit"
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center"
                >
                    Save
                </button>
            </div>
        </div>
    </Form>
</template>

<script lang="js" setup>
import router from '@/router';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';
import { useCustomerStore } from '@/stores/CustomerStore';
import { useForm } from 'vee-validate';
import { toastSuccess } from '@/constant/commonUsage'

const route = useRoute();
const storeAuth = useAuthStore()
const storeCustomer = useCustomerStore()
const customerId = ref(route?.params?.id)
const customerInfo = ref({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
})

const backToCustomer = () => {
    router.go(-1)
}

onMounted(() => {
    initCustomer()
})

const initCustomer = async () => {
    if (customerId.value) {
        try {
            const data = await storeCustomer.getCustomer(customerId.value)
            if (data) {
                const addressInfo = ['address', 'apartment', 'city', 'country']
                customerInfo.value = data
                customerInfo.value?.address?.split(',').forEach((info, index) => {
                    customerInfo.value[addressInfo[index]] = info;
                });
            }
        } catch (error) {
            return error
        }
    }
}

const { handleSubmit } = useForm(customerInfo.value);
const onInvalidSubmitError = ({ errors }) => {
    return errors;
};

const saveCustomer = handleSubmit(async () => {
    customerInfo.value.address = customerInfo.value.address + 
        (customerInfo.value.apartment ? ',' + customerInfo.value.apartment : '') + 
        (customerInfo.value.city ? ',' + customerInfo.value.city : '') + 
        (customerInfo.value.country ? ',' + customerInfo.value.country : '')
    const payload = {
        name: customerInfo.value.name,
        email: customerInfo.value.email,
        password: customerInfo.value.password,
        phone: customerInfo.value.phone,
        address: customerInfo.value.address,
    }
    if (customerId.value) {
        try {
            await storeAuth.updateUser(customerId.value, payload)
            router.push({ name: 'CustomerListView' }).then(() => toastSuccess('Updated Success'))
        } catch (error) {
            return error
        }
    } else {
        try {
            await storeAuth.userRegister(payload)
            router.push({ name: 'CustomerListView' }).then(() => toastSuccess('Register Success'))
        } catch (error) {
            return error
        }
    }
}, onInvalidSubmitError)
</script>

<style lang="scss"></style>