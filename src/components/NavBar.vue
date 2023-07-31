<template>
    <nav class="bg-brandRed">
        <div class="md:container mx-auto md:flex justify-between items-center">
            <h1 class="py-4 ml-[14px] md:ml-0">
                <RouterLink to="/Home" class="bg-homeLogo bg-cover block w-20 h-12 indent-96 overflow-hidden">Glasses
                </RouterLink>
            </h1>
            <ul class="grid grid-cols-2 text-center text-white md:flex md:gap-x-16 md:text-xl/normal">
                <li class="border-y border-x md:border-0">
                    <RouterLink to="/Optical" class="block py-3 hover:text-black">系列鏡框</RouterLink>
                </li>
                <li class="border-y border-r md:border-0">
                    <RouterLink to="/ShopList" class="block py-3 hover:text-black">門市據點</RouterLink>
                </li>
                <li class="border-y border-x md:border-0">
                    <RouterLink to="/Blog/BlogNews" class="block py-3 hover:text-black">部落格</RouterLink>
                </li>
                <li class="border-y border-r md:border-0">
                    <RouterLink to="/Qa" class="block py-3 hover:text-black">常見問題</RouterLink>
                </li>
            </ul>
        </div> 
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style module></style>