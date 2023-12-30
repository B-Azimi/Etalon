<template>
  <header class="desktop_header font-body bg-gradient-to-r from-colorFrom to-colorTo hidden laptop:block">
    <div class="nav_desktop row mx-auto flex items-center  justify-between pt-md px-xxl">
      <div class="text-colorTitle text-4xl font-black">Etalon</div>
      <div class="nav text-lg ">
        <div class="nav_desktop_list  text-colorLinks  flex items-center justify-between w-72 row  ">
          <div class="nav_desktop_item   ">
            <router-link
              class="nav_link opacity-30 hover:opacity-100  text-white leading-10 text-center"
              :to="{ name: 'HomePage' }"
              >Home</router-link
            >
          </div>
          <div class="nav_desktop_item ">
            <router-link class="nav_link opacity-30 hover:opacity-100  text-white leading-10 text-center" active-class="bg-blue opacity-100" :to="{ name: 'StorPage' }"
              >Store</router-link
            >
          </div>
          <div class="nav_desktop_item">
            <router-link class="nav_link opacity-30 hover:opacity-100  text-white leading-10 text-center" active-class="text-5xl bg-colorBasket opacity-100" :to="{ name: 'NewProduct' }"
              >New</router-link
            >
          </div>
          <div class="nav_desktop_item">
            <router-link class="nav_link opacity-30 hover:opacity-100 text-white leading-10 text-center" active-class="bg-blue opacity-100" :to="{ name: 'ContactPage' }"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'BasketPage' }" class="nav_desktop_img flex items-start p-sm bg-colorBasket rounded-basketIcon" href="#">
          <img class="w-4 h-4"
            src="../assets/images/fi-rr-shopping-cart.svg"
            alt="shope basket"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped>
/* .router-link-active{
opacity: 1;
} */
</style>
