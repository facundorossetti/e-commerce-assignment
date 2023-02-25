<template>
  <div class="flex flex-col gap-10 relative">
    <div 
      v-if="confirmationMessage" 
      class="bg-green-400 text-center w-full uppercase max-w-md rounded-xl absolute top-24 p-4 z-[99]"
    >
      Thank you for your purchase!
    </div>
    <div class="flex items-center justify-center w-full">
      <h1 class="text-4xl font-bold">Checkout</h1>
      <div />
    </div>
    <TransitionGroup 
      name="fade" 
      tag="ul" 
      v-if="storeCart.length" 
      class="flex flex-col gap-5 md:flex-wrap md:flex-row w-full justify-center items-center"
    >
      <product-card
        v-for="product in storeCart"
        :key="product.id"
        :data="product"
        hide-cart-button
      />
    </TransitionGroup>
    <p v-else>No products in the cart</p>
    <h2 v-if="storeCart.length" class="text-2xl">Total: $ {{ cartTotalPrice }}</h2>
    <button
      v-if="storeCart.length" 
      class="bg-amber-600 font-bold text-white rounded-xl px-4 py-2 w-full max-w-sm uppercase"
      @click="checkout"
    >
      Checkout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'

export default defineComponent({
  components: {
    ProductCard
  },
  setup () {
    return {
      confirmationMessage: ref(false),
    }
  },
  computed: {
    storeCart () {
      return this.$shoppingStore.cart
    },
    cartTotalPrice () {
      return this.$shoppingStore.getCartTotalPrice
    }
  },
  methods: {
    checkout (): void {
      this.confirmationMessage = true
      setTimeout(() => {
        this.confirmationMessage = true
        this.$shoppingStore.cart = []
        this.$router.push('/')
      }, 2000)
    },
  }
})
</script>