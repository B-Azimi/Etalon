import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    favList: [],
  }),
  persist: {
    storage: sessionStorage,
    paths: ["favList"],
  },
  actions: {
    toggleFav(product) {
      const indexInFav = this.favList.indexOf(product.id);
      if (indexInFav > -1) {
        this.favList.splice(indexInFav, 1);
      } else {
        this.favList.push(product.id);
      }
    },
  },
  getters: {
    productIsFav: (state) => {
      return (id) => state.favList.indexOf(id) > -1;
    },
  },
});
