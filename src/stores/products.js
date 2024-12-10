import { defineStore } from "pinia";

const useProductStore = defineStore('product', {
    state: () => {{}},
    getters: {

    },
    actions: {
        addProduct(product){
            return this.products.push(product)
        }

    },
})

export default useProductStore