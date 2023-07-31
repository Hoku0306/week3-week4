<template>
    <section class="banner bg-bannerSm bg-cover lg:bg-banner">
      <div class="bannerText container mx-auto text-brandRedDark py-36 text-right md:py-[296px]">
        <p class="md:text-4xl/normal">Promise-Desert 2020 早春系列</p>
        <h2 class="mb-2 md:text-[64px]/normal">看得清，才能看得遠</h2>
        <a href="#" class="bg-brandRed text-white py-1.5 px-3 text-xl/normal font-medium hover:bg-brandRedDark">立即購買</a>
      </div>
    </section>
    <section class="bg-brandBeige py-10 md:py-20">
      <div class="container mx-auto text-brandRedDark">
        <h2 class="mb-8 text-center md:text-5xl/normal">用專業的心，做專業的事</h2>
        <ul class="grid gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <li class="flex flex-col items-center">
            <span class="material-icons-outlined homeIconSize mb-4">paid</span>
            <h3 class="text-2xl/normal mb-2 font-bold">單一價格</h3>
            <p class="text-black">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
          </li>
          <li class="flex flex-col items-center">
            <span class="material-icons-outlined homeIconSize mb-4">schedule</span>
            <h3 class="text-2xl/normal mb-2 font-bold">20 分鐘即可取件</h3>
            <p class="text-black">為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。</p>
          </li>
          <li class="flex flex-col items-center">
            <span class="material-icons-outlined homeIconSize mb-4">favorite_border</span>
            <h3 class="text-2xl/normal mb-2 font-bold">安心售後服務</h3>
            <p class="text-black">我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。</p>
          </li>
          <li class="flex flex-col items-center">
            <span class="material-icons-outlined homeIconSize mb-4">voicemail</span>
            <h3 class="text-2xl/normal mb-2 font-bold">關於鏡片</h3>
            <p class="text-black">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-10 text-brandRed">
      <div class="container mx-auto">
        <h2 class="text-center mb-6 text-brandRedDark md:text-5xl/normal md:mb-12">經典系列鏡框</h2>
        <ul class="flex flex-col items-center lg:grid grid-cols-3 lg:gap-x-6">
          <li class="md:w-1/2 lg:w-full">
            <RouterLink to="/Product/Optical" class="group">
              <img src="/img/home-section3-1.png" alt="optical" class="mb-2 group-hover:blur-sm">
              <p class="text-5xl/normal italic font-bold text-center group-hover:text-black">OPTICAL</p>
            </RouterLink>
          </li>
          <li class="md:w-1/2 lg:w-full">
            <RouterLink to="/Product/Sunglasses"  class="group">
              <img src="/img/home-section3-2.png" alt="sunglasses" class="mb-2 group-hover:blur-sm">
              <p class="text-5xl/normal italic font-bold text-center group-hover:text-black">SUNGLASSES</p>
            </RouterLink>
          </li>
          <li class="md:w-1/2 lg:w-full">
            <a href="#" class="group">
              <img src="/img/home-section3-3.png" alt="functional" class="mb-2 group-hover:blur-sm">
              <p class="text-5xl/normal italic font-bold text-center group-hover:text-black">FUNCTIONAL</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="bg-collab bg-cover py-10 font-bold md:bg-collabSm md:py-20">
      <div class="container mx-auto">
        <h2 class="text-white text-center mb-6 md:text-5xl/normal lg:md-12">聯名設計鏡框</h2>
        <ul class="text-center text-brandRed lg:flex">
          <li class="mb-6">
            <a href="#" class="group">
              <img src="/img/home-section4-1-sm.png" alt="DOUBLE A+" class="w-full md:hidden group-hover:blur-sm">
              <img src="/img/home-section4-1.png" alt="DOUBLE A+" class="hidden md:block">
              <p class="text-5xl/normal bg-white py-2 group-hover:text-black">DOUBLE A+</p>
            </a>
          </li>
          <li>
            <a href="#" class="group">
              <img src="/img/home-section4-2-sm.png" alt="YOUTH" class="w-full md:hidden group-hover:blur-sm">
              <img src="/img/home-section4-2.png" alt="YOUTH" class="hidden md:block">
              <p class="text-5xl/normal bg-white py-2 group-hover:text-black">YOUTH</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-10 md:py-20">
      <div class="container mx-auto">
        <h2 class="text-brandRedDark text-center mb-6 md:text-5xl/normal md:mb-12">顧客推薦</h2>
        <ul class="flex flex-col items-center gap-y-4 md:grid grid-cols-2 gap-x-6 lg:grid-cols-4">
          <li class="shadow-lg">
            <img src="/img/home-section5-1.png" alt="customer" class="rounded-t">
            <div class="comment border-x border-b h-[205px] rounded-b flex flex-col p-4">
              <h4 class="font-medium mb-2">Jessy</h4>
              <p>眼鏡品質優良，下次還會想來這邊購買！</p>
              <p class="text-sm mt-auto text-brandGrayDark">2021/06/20</p>
            </div>
          </li>
          <li class="shadow-lg">
            <img src="/img/home-section5-2.png" alt="customer" class="rounded-t">
            <div class="comment border-x border-b h-[205px] rounded-b flex flex-col p-4">
              <h4 class="font-medium mb-2">凱倫</h4>
              <p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
              <p class="text-sm mt-auto text-brandGrayDark">2021/04/18</p>
            </div>
          </li>
          <li class="shadow-lg">
            <img src="/img/home-section5-3.png" alt="customer" class="rounded-t">
            <div class="comment border-x border-b h-[205px] rounded-b flex flex-col p-4">
              <h4 class="font-medium mb-2">悠悠</h4>
              <p>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
              <p class="text-sm mt-auto text-brandGrayDark">2020/12/25</p>
            </div>
          </li>
          <li class="shadow-lg">
            <img src="/img/home-section5-4.png" alt="customer" class="rounded-t">
            <div class="comment border-x border-b h-[205px] rounded-b flex flex-col p-4">
              <h4 class="font-medium mb-2">Kyuan</h4>
              <p>服務很好，品質沒有任何問題，非常喜歡。</p>
              <p class="text-sm mt-auto text-brandGrayDark">2020/10/31</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="py-10 bg-brandBeige md:py-20">
      <div class="container mx-auto md:px-24 lg:px-[330px]">
        <h2 class="text-brandRedDark text-center md:text-5xl/normal">聯絡我們</h2>
        <p class="my-6 lg:text-xl/normal">我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</p>
        <div class="mt-8">
          <div class="grid grid-cols-1 gap-4">
            <label class="block">
              <span>姓名</span>
              <input type="text" class="mt-2 block w-full bg-transparent py-1.5 px-3" placeholder="陳小明">
            </label>
            <label class="block">
              <span>聯絡電話</span>
              <input type="tel" class="mt-2 block w-full bg-transparent py-1.5 px-3" placeholder="0912-345-678">
            </label>
            <label class="block">
              <span>電子郵件</span>
              <input type="email" class="mt-2 block w-full bg-transparent py-1.5 px-3" placeholder="example@email.com">
            </label>
            <label class="block">
              <span>意見反應</span>
              <textarea class="mt-2 block w-full bg-transparent py-1.5 px-3" rows="3" placeholder="請輸入您的意見"></textarea>
            </label>
            <div class="block">
              <div class="mt-2">
                <div>
                  <label class="inline-flex">
                    <input type="checkbox" class="w-6 h-6 border-black border-2 rounded bg-transparent text-black focus:ring-black">
                    <span class="ml-2">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="text-white font-bold text-center bg-brandRed py-4 mt-6 md:mt-12 md:w-1/2 block mx-auto lg:w-2/3 hover:bg-brandRedDark">確認送出</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style lang="scss" scoped></style>