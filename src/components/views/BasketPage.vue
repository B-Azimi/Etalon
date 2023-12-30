<template>
   <section class="slider container">
    <h1>hi from Basket</h1>
     {{ basketList }}
  </section>
</template>

<script setup>
import { useBasketStore } from "@/stores/basket";
import { computed} from "vue";
const basketList = computed(() => useBasketStore().basketList);
</script>

<style scoped>
h1 {
  font-size: 40px;
}
</style>