import { defineStore } from 'pinia';
import { Product } from './store'
import products from '../database/products.json'

export const useShoppingStore = defineStore('shopping', {
    state: () => ({
      products: <Product[] | null>null,
      cart: <Product[]>[]
    }),
    getters: {
      getCartLength (state): Number {
        return state.cart.length
      },
      getCartTotalPrice (state): String {
        if (state.cart.length) {
          const price = state.cart.reduce((sum, product: Product) => {
            return sum + product.details.price
          }, 0)
          return price.toFixed(2)
        } else {
          return '0'
        }
      },
    },
    actions: {
      fetchProducts (): void {
        this.products = products
      },
      addProductToCart (product: Product): void {
        this.cart.push(product)
      },
      removeProductFromCart (product: Product): void {
        this.cart = this.cart.filter((p: Product) => p.id !== product.id)
      },
    },
  },
);