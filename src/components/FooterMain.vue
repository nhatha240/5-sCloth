<template>
    <div class="bg-[#D651FF] relative sign-up-layout">
        <img class="absolute right-0 bottom-[0]" src="/images/bg_dot_element.svg" alt="">
        <div class="flex justify-between mx-[50px] py-[115px]">
            <div class="relative">
                <img class="absolute left-[-30px] top-[-30px]" src="/images/bg_dot_element_sm.svg" alt="">
                <div class="font-semibold text-[40px] text-[#FFFFFF]">
                    Đăng kí tải khoản để cập<br />
                    nhật sản phẩn sớm nhất
                </div>
            </div>
            <div class="flex gap-[15px] items-center">
                <input class="input-white-field w-[488px]" type="text" placeholder="Nhập email của bạn">
                <button class="sign-up-btn">
                    Đăng Ký
                </button>
            </div>
        </div>
    </div>
    <div class="footer-layout">
        <div class="row justify-between mb-[150px]">
            <div class="flex-[0_0_431px]">
                <img src="/images/main_logo.svg" alt="">
                <div class="text-link-footer pb-[70px] pt-[11px]">
                    Clevr is a online bookstore website who sells all genres of books from around the world. Find your
                    book here now
                </div>
                <div class="">
                    <div class="text-info-footer pb-[25px]">Follow Us</div>
                    <div class="flex gap-[14px] items-center">
                        <img src="/images/fb_icon.svg" alt="">
                        <img src="/images/youtube_icon.svg" alt="">
                        <img src="/images/twitter_icon.svg" alt="">
                        <img src="/images/linkin_icon.svg" alt="">
                        <img src="/images/instagram_icon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="flex-[0_0_15%]">
                <div class="text-info-footer pb-[27px]">Quick Links</div>
                <div class="flex flex-col gap-[20px]">
                    <a href="#" class="">About us</a>
                    <a href="#" class="">Contact us</a>
                    <a href="#" class="">Products</a>
                    <a href="#" class="">Login</a>
                    <a href="#" class="">Sign Up</a>
                </div>
            </div>
            <div class="flex-[0_0_15%]">
                <div class="text-info-footer pb-[27px]">Customer Area</div>
                <div class="flex flex-col gap-[20px]">
                    <a href="#" class="">My Account</a>
                    <a href="#" class="">Orders</a>
                    <a href="#" class="">Tracking List</a>
                    <a href="#" class="">Terms</a>
                    <a href="#" class="">Privacy Policy</a>
                    <a href="#" class="">FAQ</a>
                </div>
            </div>
            <div class="flex-[0_0_427px]">
                <div class="text-info-footer pb-[30px]">Don’t miss the newest books</div>
                <div class="text-link-footer pb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                    ut</div>
                <div class="flex items-center gap-[15px]">
                    <input class="input-gray-field w-[268px]" type="text" placeholder="Type your email here">
                    <button class="subscribe-purple-button">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-layout">
        <div class="text py-[32px] px-[50px]">5 Clothes - <span class="span-text">© 2024 All Rights Reserved</span>
        </div>
    </div>
</template>

<script lang="js" setup>

</script>

<style>
.footer-layout {
    padding: 75px 50px 0 50px;
}

.footer-layout a {
    @apply text-[#755A7D] font-medium text-base;
}

.copyright-layout {
    border-top: 1px solid #EBEBEB;
}

.copyright-layout .span-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
    color: #755A7D;
}

.copyright-layout .text {
    color: #755A7D;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    text-align: left;
}
</style>