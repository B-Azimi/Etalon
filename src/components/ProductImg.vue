<template>
  <div>
    <img
      class="product-size w-full object-contain h-[239px]"
      :src="src"
      :alt="alt"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { string, oneOfType, number } from "vue-types";

defineProps({
  src: string().isRequired,
  alt: string().isRequired,
});
</script>

<style scoped></style>
