<template>
    <section class="pt-10 pb-16 md:py-20 lg:pt-24">
        <div class="container mx-auto">
            <h2 class="mb-6 border-l-8 border-brandRed pl-4 md:text-5xl/normal md:mb-10 lg:mb-9">部落格</h2>
            <ul class="flex flex-col gap-6 lg:gap-[60px]">
                <li v-for="item in blogList" class="group/item">
                    <RouterLink to="/Blog/BlogContent" class="md:grid grid-cols-2 gap-6 group/edit">
                        <img :src="item.img" alt="blog" class="mb-2 lg:mb-0 group-hover/edit:blur-sm lg:group-hover/edit:blur-none">
                        <div class="blogContent flex flex-col group/edit">
                            <h3 class="text-2xl/normal lg:text-[32px]/[48px] text-brandRedDark group-hover/edit:font-bold">{{ item.title }}</h3>
                            <p class="flex justify-between font-medium lg:text-xl/normal group-hover/edit:text-brandGrayDark">{{ item.subTtitle }}<span
                                    class="font-normal text-base">{{
                                        item.date }}</span>
                            </p>
                            <p
                                class="hidden md:block md:mt-1 lg:mt-4 lg:text-xl/normal lg:flex flex-col justify-between lg:h-full group">
                                {{ item.content }}<span class="text-right lg:hidden">more</span><span
                                    class="text-right hidden lg:block text-brandRedDark text-4xl/normal font-bold group-hover:text-brandRed group-hover/edit:text-5xl/normal">MORE</span>
                            </p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="pagination mt-16 md:mt-20 lg:mt-[124px]">
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
    </section>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    setup() {
        const blogList = [
            {
                title: '情人特別企劃',
                subTtitle: '2020 Valentine’s Special',
                date: '2020/02/14',
                content: '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯',
                img: '/week3-week4/img/blog-1.png'
            },
            {
                title: '街頭潮人訪問',
                subTtitle: 'Street Interview',
                date: '2020/02/02',
                content: '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣⋯⋯',
                img: '/week3-week4/img/blog-2.png'
            },
            {
                title: '春季新品上市',
                subTtitle: 'New Selection',
                date: '2020/02/02',
                content: '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯',
                img: '/week3-week4/img/blog-3.png'
            },
            {
                title: '設計師獨享鏡框優惠',
                subTtitle: 'Sales for Designer',
                date: '2020/01/18',
                content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯',
                img: '/week3-week4/img/blog-4.png'
            },
            {
                title: '抵抗夏日大作戰',
                subTtitle: 'Summer Special',
                date: '2019/08/07',
                content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯',
                img: '/week3-week4/img/blog-5.png'
            }
        ]

        return {
            blogList,
        }
    }
}
</script>