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
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center">
                    Save
                </button>
            </div>
        </div>
        <div class="order-details-box">
            <BTabs v-model="currentTab" content-class="mt-4">
                <BTab :active="isActiveTab(0)" title="Profile">
                    <div class="pb-6">
                        <div class="label-text">Profile Details</div>
                        <div class="details-text">Enter your profile information</div>
                    </div>
                    <div class="pb-6">
                        <div class="details-text">Profile Image</div>
                        <div class="border-b border-[#D7DBEC] drag-file-field">
                            <div class="w-full !border-dashed border-[1px] border-[#A1A7C4] text-center">
                                <input id="file" type="file" accept="image/png, image/jpeg" class="inputfile" multiple
                                    @change="handleUpload($event)" />
                                <label :for="'file'" class="file-upload-layout" @drop.prevent="dropFile($event)"
                                    @dragleave.prevent="setInactive"
                                    @dragover.prevent="setActive"
                                    @dragenter.prevent="setActive"
                                    @click.prevent="() => {}"
                                >
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
                                <div class="mb-1 details-text pb-1">First Name</div>
                                <input class="form-control w-full" type="text">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Last Name</div>
                                <input class="form-control w-full" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="pb-[40px] border-b border-[#E6E9F4]">
                        <div class="flex gap-[28px]">
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Email Address</div>
                                <input class="form-control w-full" type="text">
                            </div>
                            <div class="w-50">
                                <div class="mb-1 details-text pb-1">Phone Number</div>
                                <input class="form-control w-full" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="pb-6 pt-[28px]">
                        <div class="label-text">Regional Settings</div>
                        <div class="details-text">Set your language and timezone</div>
                    </div>
                    <div class="flex gap-[28px]">
                        <div class="w-50">
                            <div class="mb-1 details-text pb-1">Language</div>
                            <select class="form-select" required>
                                <option selected disabled>Choose a Language</option>
                                <option value="">English</option>
                            </select>
                        </div>
                        <div class="w-50">
                            <div class="mb-1 details-text pb-1">Timezone</div>
                            <select class="form-select" required>
                                <option selected disabled>Choose timezone</option>
                                <option value="">GMT +02:00</option>
                            </select>
                        </div>
                    </div>
                </BTab>
                <!-- <BTab :active="isActiveTab(1)" title="Notifications">
                    <div class="notify-tab">
                        <div class="layout" v-for="(notify, index) in notifyTabValue" :key="index">
                            <div class="flex flex-col gap-1">
                                <div class="label-text">
                                    {{ notify.name }}
                                </div>
                                <div class="details-text">
                                    {{ notify.details }}
                                </div>
                            </div>
                            <div class="">
                                <label class="switch">
                                    <input type="checkbox" v-model="notify.checked">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </BTab> -->
            </BTabs>
        </div>
        <div class="flex items-center justify-end border-t border-[#D7DBEC] mt-[30px]">
            <div class="flex items-center gap-3 pt-[28px]">
                <button
                    class="font-common text-[#1E5EFF] text-base bg-[#FFFFFF] border border-[#D7DBEC] py-2 px-[25px] rounded-[4px]">
                    Cancel
                </button>
                <button
                    class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';

const storeAuth = useAuthStore()
const currentTab = ref(0)
const notifyTabValue = ref([
    {
        id: 1,
        name: 'Personalized Offers',
        details: 'Receive offers made special for you',
        checked: true,
    },
    {
        id: 2,
        name: 'Online Webinars',
        details: 'Get notified about upcoming webinars',
        checked: true,
    },
    {
        id: 3,
        name: 'New Features',
        details: 'Updates about new features and product releases',
        checked: true,
    },
    {
        id: 4,
        name: 'Security and Billing',
        details: 'Account security and notifications about billing',
        checked: false,
    },
    {
        id: 5,
        name: 'Marketing',
        details: 'Receive marketing newsletters about our new products.',
        checked: false,
    },
])

const isActiveTab = (index) => {
    return currentTab.value === index;
}
const dropFile = (event) => {
    handleUpload(event);
}
const handleUpload = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log(files);

    // if (files.length) {
    //     let max = Number(setting.value.max) - Number(setting.value.value.length);

    //     if (max > files.length) {
    //         max = files.length;
    //     }
    //     for (let index = 0; index < max; index++) {
    //         setting.value.value?.push({
    //             file: files[index],
    //             type: EventFormContentSettingTypes.FileInput,
    //             image: helperFunctions?.isImage(files[index].type) ? URL.createObjectURL(files[index]) : '',
    //             name: files[index].name,
    //             file_size: files[index].size,
    //             file_mime_type: files[index].type,
    //             step: currentStep.value,
    //         });
    //     }
    // }
    event.target.value = '';
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