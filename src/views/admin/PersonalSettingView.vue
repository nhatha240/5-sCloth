<template>
    <div class="personal-setting-layout">
        <div class="flex items-center justify-between mb-[30px]">
            <div class="title-text">Settings</div>
            <div class="flex items-center gap-3">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center"
                    @click="saveAccount"  
                >
                    Save
                </button>
            </div>
        </div>
        <div class="order-details-box">
            <BTabs v-model="currentTab" content-class="mt-4">
                <BTab :active="isActiveTab(0)" title="Account">
                    <div class="pb-6">
                        <div class="label-text">Profile Details</div>
                        <div class="details-text">Enter your profile information</div>
                    </div>
                    <div class="pb-6">
                        <div class="details-text">Profile Image</div>
                        <div class="border-b border-[#D7DBEC] drag-file-field">
                            <div class="w-full !border-dashed border-[1px] border-[#A1A7C4] text-center">
                                <input id="file" type="file" accept="image/png, image/jpeg" class="inputfile"
                                    @change="handleUpload($event)" />
                                <label :for="'file'" class="file-upload-layout" @drop.prevent="dropFile($event)"
                                    @dragleave.prevent="setInactive"
                                    @dragover.prevent="setActive"
                                    @dragenter.prevent="setActive"
                                >
                                    <div class="image-viewer-layout">
                                        <div class="file-image-review" v-if="imageAccount?.url">
                                            <img crossorigin="anonymous"  class="image-view" :src="imageAccount?.url" alt="" v-if="imageAccount?.url">
                                            <img crossorigin="anonymous" class="check-mark" src="/images/check_mark_image_icon.svg" alt="">
                                        </div>
                                        <div class="file-image-review" v-if="storeAuth.admin.image">
                                            <img crossorigin="anonymous"  class="image-view" :src="urlApi + storeAuth.admin.image" alt="" v-if="storeAuth.admin.image">
                                            <img crossorigin="anonymous" class="check-mark" src="/images/check_mark_image_icon.svg" alt="">
                                        </div>
                                    </div>
                                    <label :for="'file'" class="upload-btn" @click="handleUpload($event)">Add
                                        File</label>
                                    <div class="details-text">Or drag and drop files</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="pb-6">
                        <div class="flex gap-[28px]">
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Full Name</div>
                                <input class="form-control w-full" type="text" v-model="storeAuth.admin.name">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Password</div>
                                <input class="form-control w-full" type="password">
                            </div>
                        </div>
                    </div>
                    <div class="pb-[40px] border-[#E6E9F4]">
                        <div class="flex gap-[28px]">
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Email Address</div>
                                <input class="form-control w-full" type="email" v-model="storeAuth.admin.email">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Role</div>
                                <input class="form-control w-full" type="text" v-model="storeAuth.admin.role" readonly>
                            </div>
                        </div>
                    </div>
                </BTab>
                <BTab :active="isActiveTab(1)" title="Register Account">
                    <div class="pb-6">
                        <div class="label-text">Register Information</div>
                        <div class="details-text">Enter new account information</div>
                    </div>
                    <div class="pb-6">
                        <div class="details-text">Profile Image</div>
                        <div class="border-b border-[#D7DBEC] drag-file-field">
                            <div class="w-full !border-dashed border-[1px] border-[#A1A7C4] text-center">
                                <input id="file2" type="file" accept="image/png, image/jpeg" class="inputfile" multiple
                                    @change="handleUploadRegister($event)" />
                                <label :for="'file2'" class="file-upload-layout" @drop.prevent="dropFileRegister($event)"
                                    @dragleave.prevent="setInactive"
                                    @dragover.prevent="setActive"
                                    @dragenter.prevent="setActive"
                                >
                                    <div class="image-viewer-layout">
                                        <div class="file-image-review">
                                            <img crossorigin="anonymous"  class="image-view" :src="accountRegister.image?.url" alt="" v-if="accountRegister.image?.url">
                                            <!-- <img crossorigin="anonymous"  class="image-view" :src="urlApi + categoryData.image" alt="" v-else> -->
                                            <img crossorigin="anonymous" class="check-mark" src="/images/check_mark_image_icon.svg" alt="">
                                        </div>
                                    </div>
                                    <label :for="'file2'" class="upload-btn" @click="handleUploadRegister($event)">Add
                                        File</label>
                                    <div class="details-text">Or drag and drop files</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="pb-6">
                        <div class="flex gap-[28px]">
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Full Name</div>
                                <input class="form-control w-full" type="text" v-model="accountRegister.name">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Password</div>
                                <input class="form-control w-full" type="password" v-model="accountRegister.password">
                            </div>
                        </div>
                    </div>
                    <div class="pb-[40px] border-[#E6E9F4]">
                        <div class="flex gap-[28px]">
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Email Address</div>
                                <input class="form-control w-full" type="email" v-model="accountRegister.email">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Role</div>
                                <input class="form-control w-full" type="text" value="admin" readonly v-model="accountRegister.role">
                            </div>
                        </div>
                    </div>
                </BTab>
            </BTabs>
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] mt-[30px]">
            <div class="flex items-center gap-3 pt-[28px]">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1"
                    @click="saveAccount" 
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { toastSuccess } from '@/constant/commonUsage';

const storeAuth = useAuthStore()
const imageAccount = ref()
const imageRegister = ref()
const currentTab = ref(0)
const accountRegister = ref({
    email: '',
    password: '',
    name: '',
    role: 'admin',
    image: {},
})

const isActiveTab = (index) => {
    return currentTab.value === index;
}
const dropFile = (event) => {
    handleUpload(event);
}
const handleUpload = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log(files);

    if (files && files.length > 0) {
        processFiles(files[0])
    }
    event.target.value = '';
}

const dropFileRegister = (event) => {
    handleUploadRegister(event);
}
const handleUploadRegister = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log(files, 'files');

    if (files && files.length > 0) {
        processFiles2(files[0])
    }
    event.target.value = '';
}

const processFiles = (file) => {
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageAccount.value = {
                name: file.name,
                url: e.target.result,
                file: file,
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload only images.');
    }
};

const processFiles2 = (file) => {
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            accountRegister.value.image = {
                name: file.name,
                url: e.target.result,
                file: file,
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload only images.');
    }
};

const convertFormData = (data) => {
    const formData = new FormData();

    if (currentTab.value == 0) {
        if (imageAccount.value && imageAccount.value?.file) {
            formData.append('image', imageAccount.value.file);
        }
    } else {
        if (accountRegister.value.image && accountRegister.value.image?.file) {
            formData.append('image', accountRegister.value.image?.file);
        }
    }
    Object.entries(data).forEach(([key, value]) => {
        if (key === 'image' || key === 'images') {
            return;
        }
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    Object.entries(item).forEach(([subKey, subValue]) => {
                        formData.append(`${key}[${index}][${subKey}]`, subValue);
                    });
                } else {
                    formData.append(`${key}[]`, item);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([subKey, subValue]) => {
                formData.append(`${key}[${subKey}]`, subValue);
            });
        } else {
            formData.append(key, value);
        }
    });
    return formData;
}

const saveAccount = async () => {
    if (currentTab.value == 0) {
        try {
            delete storeAuth.admin.isEmailVerified
            delete storeAuth.admin.id
            const formData = convertFormData(storeAuth.admin)
            await storeAuth.updateAdminAccount(formData)
            toastSuccess('Update success')
        } catch (error) {
            return error
        }
    } else {
        try {
            const formData = convertFormData(accountRegister.value)
            await storeAuth.registerAdminAccount(formData)
            toastSuccess('Register success')
            accountRegister.value = {
                email: '',
                password: '',
                name: '',
                role: 'admin',
                image: {},
            }
            currentTab.value = 0
        } catch (error) {
            return error
        }
    }
    
}

onMounted(() => {

})
</script>

<style lang="scss">
.notify-tab {
    .layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 28px 0 24px 0;
        border-bottom: 1px solid #E6E9F4;
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            border-bottom: unset;
            padding-bottom: 0;
        }
    }
}
.drag-file-field {
    input {
        display: none;
    }

    .upload-btn {
        font-family: Inter, Open Sans, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        color: #1E5EFF;
        padding: 8px;
        width: 102px;
        border: 1px solid #D7DBEC;
        border-radius: 4px;
        cursor: pointer;
    }

    .file-upload-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 48px 0
    }
    .image-viewer-layout {
        display: inline-flex;
        gap: 16px;
    }
    .file-image-review {
        position: relative;
        border-radius: 8px;
        background-color: #E0E2E7;
        .check-mark {
            position: absolute;
            top: 4px;
            right: 4px;
        }
        .image-view {
            width: 100px;
            height: 100px;
            object-fit: fill;
            border-radius: 8px;
        }
    }
}
</style>