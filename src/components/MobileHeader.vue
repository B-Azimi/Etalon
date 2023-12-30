<template>
   <header class="mobile_header sticky bottom-0 z-[9999] hidden md:block">
    <div class="nav_mobile px-xxl py-sm w-full bg-colorBasket">
      <ul class="nav_mobile_list row flex justify-between">
        <li class="nav_mobile_item">
          <router-link
             :to="{name:'ContactPage'}">
            <img class="w-6	h-6" src="../assets/images/fi-rr-phone-call.svg" alt="phone" />
          </router-link>
        </li>
        <li class="nav_mobile_item">
          <router-link :to="{name:'StorPage'}">
            <img class="w-6	h-6" src="../assets/images/fi-rs-badge.svg" alt="badge" />
          </router-link>
        </li>
        <li class="nav_mobile_item">
          <router-link :to="{name:'HomePage'}" >
            <img class="w-6	h-6" src="../assets/images/fi-rr-home.svg" alt="home" />
          </router-link>
        </li>
        <li class="nav_mobile_item">
          <router-link :to="{name:'NewProduct'}">
            <img class="w-6	h-6" src="../assets/images/fi-rr-shop.svg" alt="shop" />
          </router-link>
        </li>
        <li class="nav_mobile_item">
          <router-link :to="{name:'BasketPage'}">
            <img class="w-6	h-6"
              src="../assets/images/fi-rr-shopping-cart.svg"
              alt="shop basket"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script></script>

<style scoped></style>
