<template>
    <div class="empty-admin-layout">
        <img class="pb-[24px]" :src="image" alt="">
        <div class="title-text pb-3">
            {{ titleEmpty }}
        </div>
        <div class="details-text !text-center pb-[24px]" v-html="contentEmpty"></div>
        <button
            class="font-common text-[#FFFFFF] text-base bg-[#1E5EFF] py-2 px-[20px] rounded-[4px] flex items-center gap-1 mb-[12px]"
            @click="toAddDataPage"   
        >
            <img src="/images/add_order_icon.svg" alt="">
            {{ buttonText }}
        </button>
        <div class="text-details !text-[#1E5EFF] cursor-pointer" @click="toReadMore">
            Read More
        </div>
    </div>
</template>

     const price = parseFloat(faker.commerce.price());
        const sale_price = faker.datatype.boolean() ? parseFloat((price * 0.9).toFixed(2)) : 0;
        const rating = parseFloat((Math.random() * 5).toFixed(1));
        const rating_count = faker.number.int({ min: 0, max: 1000 });
        const bestSeller = faker.datatype.boolean();
        const is_like = faker.datatype.boolean();
        const color = faker.color.rgb();
        const brand_name = faker.commerce.productName()

<style lang="scss">
.empty-admin-layout {
    width: 100%;
    height: calc(100vh - 184px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 4px 0px #15223214;
}
</style>
