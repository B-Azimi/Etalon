<template>
  <div
    class="holder-product-image bg-colorTitle rounded-[24px] my-0 mx-auto relative py-[31px] px-[43px] w-full"
  >
    <RouterLink :to="`product/${product.id}`" class="nav-seller-link">
      <ProductImg :src="product.image" :alt="product.title" loading="lazy" />
    </RouterLink>
    <label
      :for="`heart-checkbox-${product.id}`"
      class="heart-label absolute top-4 right-4 cursor-pointer"
    >
      <input
        @click="toggleFav(product)"
        type="checkbox"
        :value="product.id"
        :id="`heart-checkbox-${product.id}`"
        class="hidden-checkbox hidden"
      />

      <img
        v-show="!isFav"
        src="../assets/images/fi-rr-heart.svg"
        alt="Wish Heart"
        class="heart-image"
      />
      <img
        v-show="isFav"
        src="../assets/images/fi-sr-heart-black.svg"
        alt="Wish Heart"
        class="heart-image"
      />
    </label>
    <div
      v-show="product.price < 16"
      class="discount-label absolute top-4 left-4"
    >
      <span
        class="discount-text py-[3px] px-[6px] rounded-[6px] bg-colorTo capitalize text-colorLinks text-xs font-light font-display"
        >-30%</span
      >
    </div>
  </div>
  <div
    class="holder-product-content row flex justify-between items-center mt-4"
  >
    <div class="product-description">
      <div
        class="max-w-[191px] h-[21px] overflow-hidden text-ellipsis whitespace-normal mb-0.5"
      >
        <h3 class="text-colorNew font-display text-lg font-medium capitalize">
          {{ product.title }}
        </h3>
      </div>
      <div>
        <span
          v-if="product.price >= 20"
          class="price text-col_price font-display text-base font-light capitalize"
        >
          ${{ product.price }}
        </span>
        <div v-else="product.price < 20">
          <span
            class="line-through text-col_price font-display text-base font-light capitalize"
          >
            ${{ product.price }}
          </span>
          <span
            class="last-price text-col_last_price font-display text-base font-light capitalize ml-3"
            >${{
              parseFloat(product.price - product.price * 0.3).toFixed(2)
            }}</span
          >
        </div>
      </div>
    </div>
    <div class="shopping-card">
      <button
        class="nav_desktop_img flex items-start p-sm bg-colorBasket rounded-buttonIcon"
        :class="[ isInBasket ? ' selected' : '']"
        @click="sendToBasket(product)"
      >
        <img
          class="w-4 h-4"
          src="../assets/images/fi-rr-shopping-cart.svg"
          alt="shope basket"
        />
        
      </button>
    </div>
  </div>
  {{ favList }}
  {{ basketList }}
</template>

<script setup>
import { shape, string, number, array } from "vue-types";
import ProductImg from "./ProductImg.vue";
import { useProductStore } from "../../src/stores/products";
import { useBasketStore } from "../../src/stores/basket";
import { computed} from "vue";
const props = defineProps({
  modelValue: array().def([]),
  product: shape({
    id: number(),
    title: string(),
    price: number(),
    description: string(),
    category: string(),
    image: string().isRequired,
    rating: shape({
      rate: number(),
      count: number(),
    }),
  }),
});
const { toggleFav } = useProductStore();
const isFav = computed(() =>  useProductStore().productIsFav(props.product.id));
const favList = computed(() => useProductStore().favList);

const { sendToBasket } = useBasketStore();
const isInBasket = computed(() =>  useBasketStore().inBasketProduct(props.product.id));
const basketList = computed(() => useBasketStore().basketList);

</script>

<style scoped>
.selected{
  background-color: burlywood;
}
</style>
