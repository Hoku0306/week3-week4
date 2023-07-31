<template>
    <section class="pt-10 pb-16 md:py-20 lg:pt-24">
        <div class="container mx-auto">
            <h2 class="mb-6 border-l-8 border-brandRed pl-4 md:text-5xl/normal md:mb-8">門市據點</h2>
            <label class="flex gap-2 items-center mb-6 md:w-2/3 md:mb-10 lg:w-1/3">
                <span class="md:text-2xl/normal">選擇地區</span>
                <select class="grow border-brandGrayDark text-brandGrayDark md:text-lg/normal">
                    <option>台北市</option>
                    <option>台中市</option>
                    <option>高雄市</option>
                </select>
            </label>
            <ul class="flex flex-col gap-6 md:grid grid-cols-2 lg:grid-cols-3">
                <li v-for="(item, key) in shopList" :key="key">
                    <img :src="item.img" alt="shop">
                    <div class="shopInfo border border-brandGray">
                        <h3 class="border-b border-brandGray px-6 py-2 text-2xl/normal">{{ item.name }}</h3>
                        <ul class="shopContact px-6 py-4 text-xl/normal flex flex-col gap-2">
                            <li class="flex">
                                <span class="material-icons-outlined mr-2 shopListIconSize">
                                    call
                                </span>
                                {{ item.tel }}
                            </li>
                            <li class="flex">
                                <span class="material-icons-outlined mr-2 shopListIconSize">
                                    schedule
                                </span>
                                {{ item.time }}
                            </li>
                            <li class="flex">
                                <span class="material-icons-outlined mr-2 shopListIconSize">
                                    place
                                </span>
                                {{ item.address }}
                            </li>
                        </ul>
                        <RouterLink to="/ShopInfo" class="text-[19px]/[27px] text-center block py-4 bg-black text-white hover:bg-brandGrayDark">詳細資訊</RouterLink>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import { RouterLink } from 'vue-router';

export default {
    setup() {
        const shopList = [
            {
                img: '/img/store-1.png',
                name: '台北中山旗艦店',
                tel: '電話：(02)000-1234',
                time: '營業時間：10:00-21:00',
                address: '地址：台北市中山區南京東路25巷2-1號'
            },
            {
                img: '/img/store-2.png',
                name: '台北綠園店',
                tel: '電話：(02)000-1234',
                time: '營業時間：10:00-21:00',
                address: '地址：台北市中正區復興南路 132-1 號'
            },
            {
                img: '/img/store-3.png',
                name: '台中清水旗艦店',
                tel: '電話：(02)000-1234',
                time: '營業時間：10:00-21:00',
                address: '地址：台中市清水區經南一路 23 號 8 樓'
            },
            {
                img: '/img/store-4.png',
                name: '高雄中正形象店',
                tel: '電話：(07)000-2345',
                time: '營業時間：10:00-21:00',
                address: '地址：高雄市苓雅區中正路 38 號 12 樓'
            },
            {
                img: '/img/store-5.png',
                name: '高雄夢時代店',
                tel: '電話：(07)000-1234',
                time: '營業時間：10:00-21:00',
                address: '地址：高雄市前鎮區中華一路 63 號 6 樓'
            },
        ]

        return {
            shopList
        }
    }
}

</script>

