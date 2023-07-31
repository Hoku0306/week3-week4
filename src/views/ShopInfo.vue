<template>
    <section class="pt-10 md:pt-20">
        <div class="container mx-auto">
            <h2 class="mb-6 border-l-8 border-brandRed pl-4 text-5xl/normal md:mb-8">門市據點</h2>
            <label class="flex gap-2 items-center mb-6 md:w-2/3 md:mb-10 lg:w-1/3">
                <span class="md:text-2xl/normal">選擇分店</span>
                <select class="grow border-brandGrayDark text-brandGrayDark md:text-lg/normal">
                    <option>台北市</option>
                    <option>台中市</option>
                    <option>高雄市</option>
                </select>
            </label>
        </div>
    </section>
    <section class="pb-16 md:pb-20">
        <div class="container mx-auto lg:grid grid-cols-5 gap-6">
            <div class="shop mb-6 md:grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-1 lg:col-span-2 lg:mb-0">
                <div class="flex">
                    <img src="/img/storepage-1.png" alt="shop" class="">
                </div>
                <div class="shopInfo border border-brandGray">
                    <h3 class="border-b border-brandGray px-6 py-2 text-2xl/normal">台北中山旗艦店</h3>
                    <ul class="shopContact px-6 py-4 text-xl/normal flex flex-col gap-2">
                        <li class="flex"><span class="material-icons-outlined mr-2 shopListIconSize"> call </span>
                            電話：(02)000-1234</li>
                        <li class="flex"><span class="material-icons-outlined mr-2 shopListIconSize"> schedule </span>
                            營業時間：10:00-21:00</li>
                        <li class="flex"><span class="material-icons-outlined mr-2 shopListIconSize"> place </span>
                            地址：台北市中山區南京東路25巷2-1號</li>
                    </ul>
                </div>
            </div>
            <div class="map lg:col-span-3">
                <img src="/img/螢幕快照 2020-02-13 16.35.44@2x.png" alt="map" class=" md:h-[414px] w-full">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>