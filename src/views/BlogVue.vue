<template>
    <section class="">
        <div class="header bg-brandRedDark">
            <ul class="mx-auto container text-white font-bold text-xl/normal hidden md:flex gap-12 items-center">
                <li class="py-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">最新消息</a></li>
                <li class="py-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">特別企劃</a></li>
                <li class="py-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">新品上市</a></li>
                <li class="py-3 text-center group">
                    <a href="#" class="block group-hover:text-brandGrayDark">鏡框小知識</a></li>
                <li class="ml-auto py-3 hidden md:block group/item">
                    <a href="#" class="flex items-center group/edit">
                        <span
                            class="material-icons-outlined blogIconSize group-hover/edit:text-brandGrayDark">
                            search
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <RouterView></RouterView>
    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {

}
</script>