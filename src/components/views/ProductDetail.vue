<template>
  <div v-if="product" class="row container">
    <div class="wrapper">
      <ProductImg
        :src="product.image"
        :alt="product.title"
        height="234"
        loading="lazy"
      />
    </div>
    <div class="details">
      <h3>
        {{ product.category }}
      </h3>
      <h1>
        {{ product.title }}
      </h1>
      <hr />
      <h4>
        {{ product.price }}
      </h4>
      <p>
        {{ product.description }}
      </p>
      <div v-if="product.rating" class="quantity">
        <span>Quantity</span>
        <span>{{ product.rating.count }}</span>
      </div>
    </div>
  </div>
  <div v-else>is loading</div>
</template>

<script setup>
// import { number } from "vue-types";
import ProductImg from "../ProductImg.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
// const props = defineProps({
//   id:number(),
// });
const productId = computed(() => {
  return useRoute().params.id;
});

const product = ref(null);
// const fetchProduct = async () => {
//   const response = await fetch(
//     `https://fakestoreapi.com/products/${productId.value}`
//   );
//   product.value = await response.json();
// };
const fetchProduct = new Promise(async (resolve) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId.value}`
  );
  product.value = await response.json();
  resolve(product.value)
})

fetchProduct.then((res) => {
  console.log(res.category);
});

</script>

<style scoped>
h1 {
  font-size: 40px;
}
.wrapper {
  padding: 180px 0 0 0;
}
</style>
