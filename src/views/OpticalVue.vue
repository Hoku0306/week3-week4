<template>
    <section>
        <div class="lg:container mx-auto">
            <ul class="flex text-center font-medium md:text-2xl/normal lg:text-[32px]/[48px]">
                <li class="w-1/3 border-brandRed border-b-8 pt-4 pb-2">
                    <RouterLink to="/Optical">OPTICAL</RouterLink> 
                </li>
                <li class="w-1/3 py-4 border-brandRed active:border-b-8 active:pt-4 active:pb-2">
                    <RouterLink to="/Sunglasses">SUNGLASSES</RouterLink>
                </li>
                <li class="w-1/3 py-4 border-brandRed active:border-b-8 active:pt-4 active:pb-2">
                    <a href="#">FUNCTIONAL</a>
                </li>
            </ul>
        </div>
    </section>
    <section>
        <div class="banner grid grid-cols-2">
            <img src="/img/product-header-sm-1.png" alt="banner" class="lg:hidden w-full">
            <img src="/img/product-header-sm-2.png" alt="banner" class="lg:hidden w-full">
            <img src="/img/product-header-1.png" alt="banner" class="hidden lg:flex">
            <img src="/img/product-header-2.png" alt="banner" class="hidden lg:flex">
        </div>
    </section>
    <section class="pt-10 pb-16 md:py-20">
        <div class="container mx-auto text-center">
            <h2 class="font-medium md:text-[42px]/[63px]">Celluloid Combi</h2>
            <p class="text-2xl/normal mb-6 md:text-[32px]/[48px] md:mb-8">賽璐珞鈦金屬混合鏡框</p>
            <ul class="flex flex-col gap-y-6 items-center md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-4 lg:gap-y-20">
            <!-- phone size -->
                <li v-for="(item, key) in productList" :key="key" v-show="key<5" class="w-full md:hidden">
                    <img :src="item.img" alt="pic" class="w-full">
                    <div class="itemInfo text-2xl/normal">
                        <h3 class="flex justify-between">{{ item.code }} <span class="text-brandRed font-medium">NT{{
                            item.price }}</span></h3>
                        <div class="colors flex gap-2">
                            <div v-for="(colors, key) in item.colors" :key="key" :class="`${colors} rounded w-6 h-6`"></div>
                        </div>
                    </div>
                </li>
            <!-- pad size -->
                <li v-for="(item, key) in productList" :key="key" v-show="key<10" class="w-full hidden md:block lg:hidden">
                    <img :src="item.img" alt="pic" class="w-full">
                    <div class="itemInfo text-2xl/normal">
                        <h3 class="flex justify-between">{{ item.code }} <span class="text-brandRed font-medium">NT{{
                            item.price }}</span></h3>
                        <div class="colors flex gap-2">
                            <div v-for="(colors, key) in item.colors" :key="key" :class="`${colors} rounded w-6 h-6`"></div>
                        </div>
                    </div>
                </li>
            <!-- pc size -->
                <li v-for="(item, key) in productList" :key="key" v-show="key<12" class="w-full hidden lg:block">
                    <img :src="item.img" alt="pic" class="w-full">
                    <div class="itemInfo text-2xl/normal">
                        <h3 class="flex justify-between">{{ item.code }} <span class="text-brandRed font-medium">NT{{
                            item.price }}</span></h3>
                        <div class="colors flex gap-2">
                            <div v-for="(colors, key) in item.colors" :key="key" :class="`${colors} rounded w-6 h-6`"></div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="pagination mt-16">
                <ul class="flex justify-center text-brandGrayDark md:text-lg">
                    <li class="border border-brandGrayDark group"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">上一頁</a></li>
                    <li class="border border-brandGrayDark group"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">1</a></li>
                    <li class="border border-brandGrayDark group bg-black text-white"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">2</a></li>
                    <li class="border border-brandGrayDark group"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">3</a></li>
                    <li class="border border-brandGrayDark group"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">4</a></li>
                    <li class="border border-brandGrayDark group"><a href="#" class="p-3 block group-hover:bg-brandGrayLight">5</a></li>
                    <li class="border border-brandGrayDark bg-brandGrayLight group"><a href="#" class="p-3 block group-hover:bg-brandGray">下一頁</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>


<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        const productList = ref([
            {
                img: '/img/product-1.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-2.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-3.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-4.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-5.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-6.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-1.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-2.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-3.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-4.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-5.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
            {
                img: '/img/product-6.png',
                code: 'BJ41600S',
                price: '3,490',
                colors: ['bg-productBrownDark', 'bg-productBrown']
            },
        ])

        return {
            productList,
        }
    }
}
</script>
