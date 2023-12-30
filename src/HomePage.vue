<template>
  <Slider />
  <Arrows />
  <Brands />
  <main>
    <section class="new-collection px-xxl">
      <div>
        <div
          class="new-collection-title text-colorNew py-[70px] font-body text-5xl"
        >
          <h1>New Collection</h1>
        </div>
        <ul
          class="flex-dir-new row pb-[70px] flex flex-nowrap justify-between items-stretch"
        >
          <li class="col-40 w-[37.9%]">
            <div
              class="card-holder-1 bg-col_bg_card_1 rounded-[24px] relative h-full"
            >
              <h4
                class="text-colorNew font-body text-2xl leading-10 font-bold capitalize pb-[7.87px] pt-lg ml-[25px]"
              >
                Men’s Jacket Collection
              </h4>
              <img
                class="h-[478.883px] w-auto m-auto"
                src="./assets/images/lee-man.png"
                alt="lee-man"
              />
              <div class="button w-fit absolute bottom-6 right-6">
                <a
                  class="btn inline-block text-colorTitle font-body text-sm capitalize rounded-[6px] bg-col_bg_btn px-lg3 py-no hover:bg-hoveredColorDiscover"
                  href="#"
                  >Discover Now</a
                >
              </div>
            </div>
          </li>
          <li class="col-60 w-[56.7%]">
            <div
              class="card-holder-2 row flex items-end bg-colorBasket rounded-[24px] relative h-full"
            >
              <div>
                <img
                  class="h-[520.116px] w-auto pt-lno"
                  src="./assets/images/31.png"
                  alt="T-shirt-man"
                />
              </div>
              <div class="self-start pt-[71.78px]">
                <h4
                  class="text-colorNew font-body text-2xl leading-10 font-bold capitalize text-center mb-[95.5px]"
                >
                  Men’s Sunglasses <br />
                  Collection
                </h4>
                <h2
                  class="text-colorNew font-body text-5xl leading-10 font-bold capitalize text-center mb-[174.5px]"
                >
                  40% OFF
                </h2>
                <div class="button w-fit absolute bottom-6 right-6">
                  <a
                    class="btn inline-block text-colorTitle font-body text-sm capitalize rounded-[6px] bg-col_bg_btn px-lg3 py-no hover:bg-hoveredColorDiscover"
                    href="#"
                    >Discover Now</a
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="best-seller bg-col_bg_best">
      <div class="px-xxl best-seller-wrapper">
        <div class="best-seller-title py-70 text-colorNew font-body text-5xl">
          <h1>Best Sellers</h1>
        </div>
        <nav class="nav-seller w-full pb-70">
          <ul class="nav-seller-list row flex justify-between items-stretch">
            <li
              v-for="product in products"
              :key="product.id"
              class="row flex-dir-best w-[23%] mb-[10px]"
            >
              <ProductCard :product="product" />
            </li>
          </ul>
          <!-- <ul
            class="nav-seller-list row flex justify-between flex-wrap items-stretch"
            v-show="moreState"
          >
            <li
              v-for="product in moreProducts"
              :key="product.id"
              class="row flex-dir-best w-[23%] mb-[10px]"
            >
              <ProductCard :product="product" />
            </li>
          </ul> -->
        </nav>
        <div class="btn-load-more text-center pb-70">
          <button
            @click="loadMore"
            class="btn-hover py-buttonPadY px-buttonPadX text-center bg-col_bg_btn rounded-buttonIcon text-colorTitle text-sm font-body capitalize hover:bg-hoveredColorDiscover"
          >
            <span v-show="!moreState">Load More Products</span>
            <span v-show="moreState">Load Less Products</span>
          </button>
        </div>
      </div>
    </section>
    <section
      class="advertise py-[78px] bg-gradient-to-r from-colorBasket from-[32%] to-colorAdv to-[32%]"
    >
      <div class="px-xxl">
        <div class="advertise-wrapper row flex">
          <div class="discount w-[37.8787%]">
            <h2
              class="mb-[32px] text-colorNew font-display text-[64px] font-bold leading-[75%]"
            >
              70% OFF
            </h2>
            <img class="w-[500px] h-auto" src="./assets/images/shoes.png" />
          </div>
          <div
            class="sales-end row flex-dir-new pl-lg3 flex flex-col justify-between self-stretch"
          >
            <h2
              class="text-colorTitle font-display text-[64px] font-bold leading-[75%] self-start"
            >
              Sale ends soon
            </h2>
            <ul class="advertise_date_list row flex justify-between gap-[48px]">
              <li
                class="advertise_date_item row w-[153.5px] flex flex-col items-center gap-[12px]"
              >
                <div
                  class="date_card row flex flex-col justify-center items-center gap-[10px] self-stretch py-[32px] px-0 rounded-[8px] bg-col_bg_date"
                >
                  <p
                    class="text-colorTitle font-display text-[64px] font-bold leading-[75%]"
                  >
                    3
                  </p>
                </div>
                <p
                  class="date_desc text-colorTitle font-display text-[24px] font-light"
                >
                  Days
                </p>
              </li>
              <li
                class="advertise_date_item row w-[153.5px] flex flex-col items-center gap-[12px]"
              >
                <div
                  class="date_card row flex flex-col justify-center items-center gap-[10px] self-stretch py-[32px] px-0 rounded-[8px] bg-col_bg_date"
                >
                  <p
                    class="text-colorTitle font-display text-[64px] font-bold leading-[75%]"
                  >
                    23
                  </p>
                </div>
                <p
                  class="date_desc text-colorTitle font-display text-[24px] font-light"
                >
                  Hours
                </p>
              </li>
              <li
                class="advertise_date_item row w-[153.5px] flex flex-col items-center gap-[12px]"
              >
                <div
                  class="date_card row flex flex-col justify-center items-center gap-[10px] self-stretch py-[32px] px-0 rounded-[8px] bg-col_bg_date"
                >
                  <p
                    class="text-colorTitle font-display text-[64px] font-bold leading-[75%]"
                  >
                    15
                  </p>
                </div>
                <p
                  class="date_desc text-colorTitle font-display text-[24px] font-light"
                >
                  Minutes
                </p>
              </li>
              <li
                class="advertise_date_item row w-[153.5px] flex flex-col items-center gap-[12px]"
              >
                <div
                  class="date_card row flex flex-col justify-center items-center gap-[10px] self-stretch py-[32px] px-0 rounded-[8px] bg-col_bg_date"
                >
                  <p
                    class="text-colorTitle font-display text-[64px] font-bold leading-[75%]"
                  >
                    33
                  </p>
                </div>
                <p
                  class="date_desc text-colorTitle font-display text-[24px] font-light"
                >
                  Seconds
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
  <MobileHeader />
</template>

<script setup>
import ProductCard from "./components/ProductCard.vue";
import Slider from "./components/Slider.vue";
import Arrows from "./components/Arrows.vue";
import Brands from "./components/Brands.vue";
import MobileHeader from "./components/MobileHeader.vue";
import { ref } from "vue";

const isLoading = ref(false);
// const moreState = ref(false);
const loadMore = () => {
  fetchProducts(8)
  // moreState.value = !moreState.value;
};

const bestSellers = ref([]);
const moreProducts = ref([]);
const products = ref([]);

const fetchProducts = async (limit) => {
  isLoading.value = true;
  const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  products.value = await response.json();
  // bestSellers.value = Products.value.filter((item) => item.id <= 4);
  // moreProducts.value = Products.value.filter((item) => item.id > 4);
  isLoading.value = false;
};

fetchProducts(4);
</script>

<style scoped></style>
