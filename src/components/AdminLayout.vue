<template>
    <div class="w-[30%] pt-[24px] m-auto" v-if="route.name === 'LoginPage'">
        <router-view></router-view>
    </div>
    <div class="MuiStack-root css-10ioqvk-MuiStack-root" v-else>
        <div class="MuiBox-root css-6su6fj">
            <div class="MuiDrawer-root MuiDrawer-docked css-1h1dy0v-MuiDrawer-docked">
                <div
                    class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-k1bkb-MuiPaper-root-MuiDrawer-paper">
                    <div class="MuiBox-root css-10klw3m">
                        <div class="MuiBox-root css-10596f4">
                            <a herf="/admin"
                                class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-uehu5v-MuiTypography-root-MuiLink-root">
                                <img class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-70z4a9-MuiSvgIcon-root"
                                    src="/images/main_logo.svg" />
                            </a>
                        </div>
                        <div class="simplebar-scrollable-y" style="height: calc(100% - 68px)">
                            <div class="simplebar-wrapper">
                                <div class="simplebar-height-auto-observer-wrapper">
                                    <div class="simplebar-height-auto-observer"></div>
                                </div>
                                <div class="simplebar-mask">
                                    <div class="simplebar-offset">
                                        <div class="simplebar-content-wrapper">
                                            <div class="simplebar-content">
                                                <div class="MuiBox-root css-hpbu28">
                                                    <div class="MuiBox-root css-19midj6">
                                                        <ul
                                                            class="MuiList-root MuiList-padding css-dlgobp-MuiList-root">
                                                            <li class="MuiList-root css-110zuwj-MuiList-root"
                                                                v-for="(item, index) in routeList" :key="index">
                                                                <router-link :to="{ path: item.path }"
                                                                    :class="{ 'Mui-selected': item.name?.includes(route.name) }"
                                                                    class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-2s14r3-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root">
                                                                    <div
                                                                        class="MuiListItemIcon-root css-v696f9-MuiListItemIcon-root">
                                                                        <img :src="item.icon" alt="">
                                                                    </div>
                                                                    <div
                                                                        class="MuiListItemText-root css-l5c327-MuiListItemText-root">
                                                                        <span
                                                                            class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1aod1hd-MuiTypography-root">
                                                                            {{ item.label }}
                                                                        </span>
                                                                    </div>
                                                                    <!-- <div class="MuiChip-root MuiChip-outlined MuiChip-sizeSmall MuiChip-colorSecondary MuiChip-outlinedSecondary css-119rat0-MuiChip-root"
                                                                        v-if="index == 1">
                                                                        <span
                                                                            class="MuiChip-label MuiChip-labelSmall css-1985qjx-MuiChip-label">
                                                                            16
                                                                        </span>
                                                                    </div> -->
                                                                </router-link>
                                                            </li>
                                                            <li class="MuiList-root css-110zuwj-MuiList-root"
                                                                v-for="(item, index) in otherInfoRouteList"
                                                                :key="index">
                                                                <router-link :to="{ path: item.path }" :class="{ 'Mui-selected': route.name === item.name }"
                                                                    class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-2s14r3-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root">
                                                                    <div
                                                                        class="MuiListItemIcon-root css-v696f9-MuiListItemIcon-root">
                                                                        <img :src="item.icon" alt="">
                                                                    </div>
                                                                    <div
                                                                        class="MuiListItemText-root css-l5c327-MuiListItemText-root">
                                                                        <span
                                                                            class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1aod1hd-MuiTypography-root">
                                                                            {{ item.label }}
                                                                        </span>
                                                                    </div>
                                                                </router-link>
                                                            </li>
                                                            <li
                                                                class="MuiListSubheader-root MuiListSubheader-gutters MuiListSubheader-sticky css-466cav-MuiListSubheader-root">
                                                                Settings
                                                            </li>
                                                            <li class="MuiList-root css-110zuwj-MuiList-root"
                                                                v-for="(item, index) in settingRouteList" :key="index">
                                                                <router-link :to="{ path: item.path }" :class="{ 'Mui-selected': route.name === item.name }"
                                                                    class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-2s14r3-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root">
                                                                    <div
                                                                        class="MuiListItemIcon-root css-v696f9-MuiListItemIcon-root">
                                                                        <img :src="item.icon" alt="">
                                                                    </div>
                                                                    <div
                                                                        class="MuiListItemText-root css-l5c327-MuiListItemText-root">
                                                                        <span
                                                                            class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1aod1hd-MuiTypography-root">
                                                                            {{ item.label }}
                                                                        </span>
                                                                    </div>
                                                                </router-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="MuiStack-root css-1pclki3-MuiStack-root">
            <header class="css-1uedzac-MuiPaper-root-MuiAppBar-root">
                <div class="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-lym4we-MuiToolbar-root">
                    <div class="MuiStack-root css-1dpk9xp-MuiStack-root">
                        <div class="MuiInputBase-root css-307j87-MuiInputBase-root-MuiInput-root">
                            <div class="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-standard MuiInputAdornment-sizeMedium css-19bvrkn-MuiInputAdornment-root">
                                <img class="w-[24px]" src="/images/icon_admin_search.svg" alt="">
                            </div>
                            <input aria-invalid="false" id=":r3:" placeholder="Search..." type="text"
                            class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart css-lg0vho-MuiInputBase-input-MuiInput-input"
                            value="">
                        </div>
                    </div>
                    <div class="MuiStack-root css-95rbei-MuiStack-root">
                        <!-- <button class="MuiIconButton-sizeMedium css-a7o5bl-MuiButtonBase-root-MuiIconButton-root">
                            <img class="" src="/images/icon_chat_log.svg" alt="">
                        </button>
                        <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-1igjtp5-MuiButtonBase-root-MuiIconButton-root">
                            <span class="MuiBadge-root css-1c32n2y-MuiBadge-root">
                                <img class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-17ceore-MuiSvgIcon-root" src="/images/bell_icon.svg" alt="">
                                <span class="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-165qbg4-MuiBadge-badge">
                                    5
                                </span>
                            </span>
                        </button> -->
                        <div class="MuiBox-root css-129hs4l">
                            <div class="absolute profile-menu-layout" :class="{ 'hidden': profileMenu }">
                                <ul class="menu-ul">
                                    <li @click="toSettingAccount">
                                        <img src="/images/profile_admin_icon.svg" alt="">
                                        <div class="menu-text">
                                            My Profile
                                        </div>
                                    </li>
                                    <div class="flex justify-center">
                                        <button class="logout-btn w-full" @click="logout">
                                            Logout
                                        </button>
                                    </div>
                                </ul>
                            </div>
                            <button class="MuiButtonBase-root css-10d1a0h-MuiButtonBase-root" @click="openProfileMenu">
                                <div class="MuiStack-root css-1oxsjqv-MuiStack-root">
                                    <div class="MuiAvatar-root MuiAvatar-rounded css-14wdk2t-MuiAvatar-root">
                                        <img class="MuiAvatar-img css-1pqm26d-MuiAvatar-img" src="" alt="">
                                    </div>
                                    <h6 class="MuiTypography-root MuiTypography-subtitle1 css-lh1uqt-MuiTypography-root">
                                        {{ storeAuth.admin?.name }}
                                    </h6>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div class="MuiContainer-root MuiContainer-disableGutters css-ukqn53-MuiContainer-root">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';

const storeAuth = useAuthStore()
const route = useRoute()
const router = useRouter()
const profileMenu = ref(true)

onMounted(() => {
    beforeCreate()
    refreshAdmin()
})
watch(
    () => route.name,
    () => {
        profileMenu.value = true
    },
)
const beforeCreate = () => {
    if (route.name !== 'LoginPage') {
        document.body.className = 'admin';
    }
}
const routeList = ref([
    {
        label: 'Dashboard', path: '/admin', icon: '/images/dashboard_icon.svg', notifyCount: '', name: 'DashBoardView'
    },
    {
        label: 'Orders', path: '/admin/orders', icon: '/images/orders_icon.svg', notifyCount: '', name: ['OrderListView', 'OrderDetailsView']
    },
    {
        label: 'Products', path: '/admin/products', icon: '/images/products_icon.svg', notifyCount: '', name: ['ProductViewAdmin', 'ProductDetailsView', 'CreateProductView']
    },
    {
        label: 'Categories', path: '/admin/categories', icon: '/images/categories_icon.svg', notifyCount: '', name: ['CategoriesView', 'CategoryDetailsView']
    },
    {
        label: 'Customers', path: '/admin/customers', icon: '/images/customers_icon.svg', notifyCount: '', name: ['CustomerListView', 'CustomerInfoView', 'CustomerModifyView']
    },
    {
        label: 'Rating', path: '/admin/rating', icon: '/images/rating_icon.svg', notifyCount: '', name: ['RatingPageView', 'RatingDetailsView']
    },
    // {
    //     label: 'Coupon', path: '/admin/coupon', icon: '/images/coupons_icon.svg', notifyCount: '', name: ''
    // },
    // {
    //     label: 'Inbox', path: '/admin/inbox', icon: '/images/inbox_icon.svg', notifyCount: '', name: ''
    // },
])
const otherInfoRouteList = ref([
    // {
    //     label: 'Knowledge Base', path: '/admin/', icon: '/images/knowledge_icon.svg', notifyCount: '', name: ''
    // },
    // {
    //     label: 'Product Updates', path: '/admin/', icon: '/images/product_update_icon.svg', notifyCount: '', name: ''
    // },
])
const settingRouteList = ref([
    {
        label: 'Personal Settings', path: '/admin/personal-settings', icon: '/images/personal_setting_icon.svg', notifyCount: '', name: 'PersonalSettingView'
    },
    // {
    //     label: 'Global Settings', path: '/admin/', icon: '/images/global_setting_icon.svg', notifyCount: '', name: ''
    // },
])
const openProfileMenu = () => {
    profileMenu.value = !profileMenu.value
}
const toSettingAccount = () => {
    router.push({ name: 'PersonalSettingView' })
    profileMenu.value = !profileMenu.value
}
const logout = () => {
    storeAuth.clearStoreAuth()
    profileMenu.value = !profileMenu.value
    router.push({ name: 'LoginPage' })
}
const refreshAdmin = async () => {
    if (storeAuth.adminRefreshToken) {
        try {
            const params = {
                refreshToken: storeAuth.adminRefreshToken
            }
            await storeAuth.refreshAdminToken(params)
        } catch (error) {
            return error
        }
    }
}
</script>

<style lang="scss">
.css-10ioqvk-MuiStack-root {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    position: relative;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
}

.css-6su6fj {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.css-1pclki3-MuiStack-root {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;

    @media (min-width: 1200px) {
        .css-1pclki3-MuiStack-root {
            max-width: calc(100% - 270px);
        }
    }

    @media (min-width: 0px) {
        .css-1pclki3-MuiStack-root {
            max-width: 100%;
        }
    }
}

.css-1h1dy0v-MuiDrawer-docked {
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 16.875rem;
    white-space: nowrap;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
}

.css-1h1dy0v-MuiDrawer-docked .MuiDrawer-paper {
    box-sizing: border-box;
}

.css-k1bkb-MuiPaper-root-MuiDrawer-paper {
    background-color: #ffffff;
    color: #131523;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    z-index: 1200;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    top: 0;
    outline: 0;
    left: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    width: 16.875rem;
    background-color: transparent;
    -webkit-transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: none;
}

.css-10klw3m {
    height: 100%;
}

.css-10596f4 {
    background-color: #fff;
    padding-left: 24px;
    padding-right: 24px;
    box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

.css-uehu5v-MuiTypography-root-MuiLink-root {
    margin: 0;
    font: inherit;
    color: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    height: 68px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 12px;
}

.css-b8371x-MuiTypography-root {
    margin: 0;
    font-size: 1.375rem;
    line-height: 1.5;
    font-weight: 700;
    font-family:
        Inter,
        Open Sans,
        sans-serif;
}

.simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
}

.simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
}

.simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
}

.simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
}

.simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
}

.simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
}

.simplebar-wrapper .simplebar-content {
    overflow: hidden;
}

.css-1uedzac-MuiPaper-root-MuiAppBar-root {
    background-color: #ffffff;
    color: #131523;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow:
        0rem 0.25rem 0.375rem -0.0625rem rgba(20, 20, 20, 0.12),
        0rem 0.125rem 0.25rem -0.0625rem rgba(20, 20, 20, 0.07);
    -webkit-background-clip: border-box;
    background-clip: border-box;
    overflow-wrap: break-word;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: -webkit-sticky;
    position: sticky;
    z-index: 1100;
    top: 0;
    left: auto;
    right: 0;
    background-color: #1e5eff;
    color: #fff;
    background-color: #fff;
    color: #5a607f;
    box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
}

@media (min-width: 600px) {
    .css-lym4we-MuiToolbar-root {
        min-height: 64px;
    }
}

@media (min-width: 0px) {
    @media (orientation: landscape) {
        .css-lym4we-MuiToolbar-root {
            min-height: 48px;
        }
    }
}

@media (min-width: 600px) {
    .css-lym4we-MuiToolbar-root {
        padding-left: 24px;
        padding-right: 24px;
    }
}

.css-lym4we-MuiToolbar-root {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 56px;
    height: 68px;
    min-height: 68px;
    padding-left: 24px;
    justify-content: space-between;
}

.css-1uedzac-MuiPaper-root-MuiAppBar-root>* {
    -webkit-transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.css-70z4a9-MuiSvgIcon-root {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 149px;
    height: 67px;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 2.1875rem;
    font-size: 2.375rem;
}

.css-hpbu28 {
    border-right: 1px solid;
    border-color: #d7dbec;
    height: calc(100vh - 68px);
}

.css-19midj6 {
    padding: 16px;
}

.css-dlgobp-MuiList-root {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-top: 0;
    padding-bottom: 8px;
    padding-top: 0px;
}

.css-110zuwj-MuiList-root {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.css-2s14r3-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root.Mui-selected {
    color: white;
    background-color: #1E5EFF !important;
}

.css-2s14r3-MuiTypography-root-MuiLink-root-MuiButtonBase-root-MuiListItemButton-root {
    margin: 0;
    font: inherit;
    color: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
    min-width: 0;
    box-sizing: border-box;
    text-align: left;
    padding-top: 8px;
    padding-bottom: 8px;
    -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
    padding: 8px 10px;
    margin-bottom: 0.125rem;
    border-radius: 8px;
    background-color: inherit;
    color: #5A607F;
    padding-left: 10px;

    &:hover {
        background-color: #D9E4FF;
    }
}

.css-v696f9-MuiListItemIcon-root {
    min-width: 56px;
    color: #A1A7C4;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    color: inherit;
    min-width: 2.25rem;
    border-radius: 8px;
    -webkit-transition: margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding-top: 3.2px;
    padding-bottom: 3.2px;
    padding-left: 0px;
    padding-right: 0px;
}

.css-l5c327-MuiListItemText-root {
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0;
    margin-top: 4px;
    margin-bottom: 4px;
    color: inherit;
}

.css-l5c327-MuiListItemText-root span {
    font-size: 0.875rem;
    line-height: 1.4;
}

.css-1aod1hd-MuiTypography-root {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Inter, Open Sans, sans-serif;
    display: block;
}

.css-466cav-MuiListSubheader-root {
    box-sizing: border-box;
    line-height: 48px;
    list-style: none;
    color: #5A607F;
    font-family: Inter, Open Sans, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 16px;
    padding-right: 16px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    font-size: 0.75rem;
    letter-spacing: 0rem;
    font-weight: 400;
    line-height: 1.333;
    font-family: Inter, Open Sans, sans-serif;
    margin-top: 24px;
    margin-bottom: 0px;
    color: #A1A7C4;
    background-color: transparent;
    padding: 3.2px 12px;
}

.simplebar-scrollable-y {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
}

.css-119rat0-MuiChip-root {
    max-width: 100%;
    font-family: Inter, Open Sans, sans-serif;
    font-size: 0.8125rem;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 24px;
    color: #fff;
    background-color: #825ee4;
    border-radius: 16px;
    white-space: nowrap;
    -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: unset;
    outline: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    border: 0;
    padding: 0;
    vertical-align: middle;
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid rgba(130, 94, 228, 0.7);
    color: #825ee4;
    font-size: 0.875rem;
    line-height: 1.4286;
    font-weight: 400;
    height: auto;
    padding: 4px 8px;
    background-color: #E6E9F4;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 4px;
    position: relative;
    border-radius: 48px;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1;
    font-family: Inter, Open Sans, sans-serif;
    background-color: #131523;
    color: #fff;
}

.css-1985qjx-MuiChip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 7px;
    padding-right: 7px;
    white-space: nowrap;
    padding: 0;
}

body.admin {
    margin: 0;
    color: #131523;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: Inter, Open Sans, sans-serif;
    background-color: #F5F6FA;
}

.css-307j87-MuiInputBase-root-MuiInput-root {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.4375em;
    font-family: Inter, Open Sans, sans-serif;
    color: #131523;
    box-sizing: border-box;
    position: relative;
    cursor: text;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}
.css-19bvrkn-MuiInputAdornment-root {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 24px;
    width: 24px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
    color: #A1A7C4;
    margin-right: 8px;
}
.css-lg0vho-MuiInputBase-input-MuiInput-input {
    font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 0;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    height: 1.375rem;
    padding-top: 12px;
    padding-right: 1px;
    padding-bottom: 12px;
    margin: 0;
    margin-top: 0;
    &::placeholder {
        color: #7E84A3;
    }
    &:focus {
        outline: 0;
    }
}
.css-95rbei-MuiStack-root {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.css-a7o5bl-MuiButtonBase-root-MuiIconButton-root {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    text-align: center;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: #A1A7C4;
    -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    padding: 8px;
    height: 40px;
    width: 40px;
    padding: 8px;
}
.css-1igjtp5-MuiButtonBase-root-MuiIconButton-root {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    text-align: center;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: #A1A7C4;
    -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: inherit;
    border-radius: 4px;
    padding: 8px;
    color: #E6E9F4;
}
.css-95rbei-MuiStack-root>:not(style)~:not(style) {
    margin-left: 4px;
}
.css-95rbei-MuiStack-root>:not(style):not(style) {
    margin: 0;
}
.css-1c32n2y-MuiBadge-root {
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.css-17ceore-MuiSvgIcon-root {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
}
.css-165qbg4-MuiBadge-badge {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-family: Inter, Open Sans, sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    min-width: 20px;
    line-height: 1;
    padding: 0 6px;
    height: 20px;
    border-radius: 10px;
    z-index: 1;
    -webkit-transition: -webkit-transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #1E5EFF;
    color: #fff;
    top: 0;
    right: 0;
    -webkit-transform: scale(1) translate(50%, -50%);
    -moz-transform: scale(1) translate(50%, -50%);
    -ms-transform: scale(1) translate(50%, -50%);
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
    min-width: 16px;
    height: 16px;
    padding: 0;
    -webkit-transform: scale(1) translate(30%, -20%);
    -moz-transform: scale(1) translate(30%, -20%);
    -ms-transform: scale(1) translate(30%, -20%);
    transform: scale(1) translate(30%, -20%);
}
.css-129hs4l {
    padding-left: 6px;
    padding-right: 16px;
}
.css-10d1a0h-MuiButtonBase-root {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
}
.css-1oxsjqv-MuiStack-root {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-left: 6px;
    gap: 12px;
}
.css-14wdk2t-MuiAvatar-root {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    font-family: Inter, Open Sans, sans-serif;
    font-size: 1.25rem;
    line-height: 1;
    border-radius: 50%;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 4px;
    box-shadow: none;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border-radius: 20px;
    background-color: #d8d8d8;
    height: 36px;
    width: 36px;
}
.css-1pqm26d-MuiAvatar-img {
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
}
.css-1oxsjqv-MuiStack-root>:not(style)~:not(style) {
    margin-left: 12px;
}

.css-1oxsjqv-MuiStack-root>:not(style):not(style) {
    margin: 0;
}
@media (min-width: 600px) {
    .css-lh1uqt-MuiTypography-root {
        display: block;
    }
}
.css-lh1uqt-MuiTypography-root {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4286;
    font-weight: 400;
    font-family: Inter, Open Sans, sans-serif;
}
.css-ukqn53-MuiContainer-root {
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 24px;
    padding-right: 24px;
    @media (min-width: 1200px) {
        padding-left: 40px;
        padding-right: 40px;
    }
}
.title-text {
    font-family: Inter, Open Sans, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    color: #131523;
}
.profile-menu-layout {
    opacity: 1;
    transform: none;
    padding-top: 8px;
    width: 100%;
    max-width: 120px;
    transition: opacity 264ms cubic-bezier(0.4, 0, 0.2, 1), transform 176ms cubic-bezier(0.4, 0, 0.2, 1);
    top: 58px;
    right: 24px; 
    transform-origin: 120px 0px;
    -webkit-overflow-scrolling: touch;
    margin: auto;
    border-radius: 6px;
    margin-top: 8px;
    color: #5A607F;
    background-color: #fff;
    box-shadow: 0px -2.46px 3.86px 0px rgba(0, 0, 0, 0.02), 0px 2.258px 4.692px 0px rgba(0, 0, 0, 0.02), 0px 6.147px 9.475px 0px rgba(0, 0, 0, 0.03), 4px 18px 18px 0px rgba(0, 0, 0, 0.04);
    .menu-ul {
        list-style: none;
        margin: 0;
        position: relative;
        outline: 0;
        padding: 0;
        padding-bottom: 8px;
        li {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            gap: 8px;
            cursor: pointer;
            &:hover {
                background-color: #F5F6FA;
            }
            .menu-text {
                margin: 0;
                font-size: 0.75rem;
                font-weight: 400;
                line-height: 1;
                font-family: Inter, Open Sans, sans-serif;
            }
        }
        .logout-btn {
            border-radius: 4px;
            padding: 4px 20px;
            border: 1px solid #D7DBEC;
            text-align: center;
            color: #1E5EFF;
            font-size: 14px;
            margin-top: 12px;
            max-width: 80%;
        }
    }
}
</style>
