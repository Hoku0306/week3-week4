<template>
    <section>
        <div class="bg-brandRedDark md:hidden">
            <ul class="mx-auto container font-bold text-white grid grid-cols-4 items-center">
                <li class="p-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">最新消息</a></li>
                <li class="p-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">特別企劃</a></li>
                <li class="p-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">新品上市</a></li>
                <li class="p-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">鏡框小知識</a></li>
                <li class="ml-auto py-3 hidden md:block group/item"><a href="#" class="flex items-center group/edit"><span
                            class="material-icons-outlined blogIconSize group-hover/edit:text-brandGrayDark">
                            search
                        </span></a></li>
            </ul>
        </div>
        <div class="container mx-auto pt-4 pb-16 md:pt-2 lg:pt-6 lg:pb-20">
            <div class="mb-2">
                <p class="mb-2">首頁 / 部落格 / 特別企劃 / <a href="#" class="text-brandRed hover:text-brandGrayDark">情人特別企劃</a></p>
                <p class="text-brandRed font-bold md:text-2xl/normal md:mb-2">#special<span class="ml-4">#event</span></p>
            </div>
            <div class="md:flex gap-x-6">
                <div class="content lg:w-2/3">
                    <h2 class="font-normal md:text-5xl/normal">情人特別企劃</h2>
                    <h3 class="font-medium md:text-2xl/normal">2020 Valentine’s Special</h3>
                    <ul class="mt-6 flex flex-col gap-4 lg:mt-4 lg:gap-10">
                        <li v-for="(item, i) in content" :key="i">
                            <img :src="item.img" alt="blog" class="mb-2">
                            <p class="text-brandGrayDark whitespace-pre-line">{{ item.content }}</p>
                        </li>
                    </ul>
                </div>
                <div class="tags hidden md:block text-brandRed font-bold">
                    <p class="flex mb-2 lg:text-[32px]/[48px] items-center"><span
                            class="material-icons-outlined blogContentIconSize lg:mr-3">
                            label
                        </span>TAGS</p>
                    <ul class="flex flex-wrap gap-x-4 md:gap-x-6 md:w-[120px] lg:w-[260px] md:text-2xl/normal">
                        <li>#special</li>
                        <li>#sale</li>
                        <li>#new_item</li>
                        <li>#interview</li>
                        <li>#trivia</li>
                        <li>#news</li>
                        <li>#event</li>
                    </ul>
                </div>
            </div>
            <div class="hidden md:block mt-10">
                <div class="share flex gap-4 border-b pb-4 border-brandGrayDark">
                    <a href="#" class="font-bold hover:text-brandRed">Share</a>
                    <a href="#" class="group"><img src="/img/logo-facebook.png" alt="fb"
                            class="w-6 group-hover:scale-125"></a>
                    <a href="#" class="group"><img src="/img/logo-instagram.png" alt="ig"
                            class="w-6 group-hover:scale-125"></a>
                </div>
                <div class="changePage flex justify-between mt-6">
                    <a href="#" class="flex group hover:text-brandRed">
                        <span class="material-icons-outlined group-hover:scale-125">
                            arrow_back
                        </span>上一篇：街頭潮人訪問 1
                    </a>
                    <a href="#" class="flex group hover:text-brandRed">
                        下一篇：街頭潮人訪問 2
                        <span class="material-icons-outlined group-hover:scale-125">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    setup() {
        const content = [
            {
                img: '/week3-week4/img/blogpage-1.png',
                content: `一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                  本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！`
            },
            {
                img: '/week3-week4/img/blogpage-2.png',
                content: `一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                  本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！`
            },
            {
                img: '/week3-week4/img/blogpage-3.png',
                content: `一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
                  本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！`
            },
            {
                img: '/week3-week4/img/blogpage-4.png',
                content: `2/14(五)-2/20(日)
                至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個
                期間優惠還有~~持他牌鏡框更換鏡片
                薄型非球面鏡片折300元
                濾藍光鏡片折500元
                快快帶上另一半
                讓彼此每一次睜開眼，都被愛的視線包圍!`
            }
        ]

        return {
            content
        }
    }
}
</script>

<style lang="scss" scoped></style>