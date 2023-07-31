<template>
    <footer class="bg-brandRed py-6 md:pt-12 md:pb-10 lg:pb-8">
        <div class="container mx-auto text-white">
            <div class="flex justify-between border-b border-white md:flex-col-reverse">
                <div class="contact">
                    <ul class="pb-6 md:pb-8">
                        <li class="mb-2 flex"><a href="tel" class="inline-flex gap-2 md:text-4xl/normal hover:text-black">
                                <span class="material-icons-outlined footerIconSize">
                                    call
                                </span>0800-000-000
                            </a></li>
                        <li class="flex">
                            <a href="tomail" class="inline-flex gap-2 md:text-4xl/normal hover:text-black"><span
                                    class="material-icons-outlined footerIconSize">
                                    email
                                </span>
                                glasses@business.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footerLink md:flex justify-between items-center md:mb-10">
                    <ul class="hidden md:flex gap-x-12">
                        <li class="group">
                            <RouterLink to="/Home" class="group-hover:text-black">首頁</RouterLink>
                        </li>
                        <li class="group">
                            <RouterLink to="/Optical" class="group-hover:text-black">系列鏡框</RouterLink>
                        </li>
                        <li class="group">
                            <RouterLink to="/ShopList" class="group-hover:text-black">門市據點</RouterLink>
                        </li>
                        <li class="group">
                            <RouterLink to="/Blog" class="group-hover:text-black">部落格</RouterLink>
                        </li>
                        <li class="group">
                            <RouterLink to="/Qa" class="group-hover:text-black">常見問題</RouterLink>
                        </li>
                    </ul>
                    <ul class="flex gap-2 md:gap-4 lg:gap-8">
                        <li class="group/item"><a href="#" class="group/edit "><img src="/img/ic-social-fb.png"
                                    alt="fb" class="w-6 h-6 md:w-10 md:h-10 group-hover/edit:scale-125"></a></li>
                        <li class="group/item"><a href="#" class="group/edit "><img src="/img/ic_social_ig.png"
                                    alt="id" class="w-6 h-6 md:w-10 md:h-10 group-hover/edit:scale-125"></a></li>
                        <li class="group/item"><a href="#" class="group/edit "><img src="/img/ic_social_line.png"
                                    alt="line" class="w-6 h-6 md:w-10 md:h-10 group-hover/edit:scale-125"></a></li>
                    </ul>
                </div>
            </div>
            <ul class="copyright flex flex-col mt-4 gap-2 md:mt-8 md:flex-row md:gap-12">
                <li class="md:mr-auto">Copyright © 2020 Glasses.All rights reserved.</li>
                <li><a href="#" class="md:text-sm/normal hover:text-black">隱私權政策</a></li>
                <li><a href="#" class="md:text-sm/normal hover:text-black">服務條款</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    setup() {


        return {}
    }
}
</script>