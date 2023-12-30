import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    basketList: [],
  }),
  persist: {
    storage: sessionStorage,
    paths: ["basketList"],
  },
  actions: {
    sendToBasket(product) {
      const indexInFav = this.basketList.indexOf(product.id);
      if (indexInFav > -1) {
        this.basketList.splice(indexInFav, 1);
      } else {
        this.basketList.push(product.id);
      }
    },
  },
  getters: {
    inBasketProduct: (state) => {
      return (id) => state.basketList.indexOf(id) > -1;
    },
  },
});
