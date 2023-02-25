<template>
  <div class="flex flex-col items-center gap-4">
    <div class="border border-amber-600 rounded-full pl-3 cursor-pointer flex items-center gap-1">
      <MagnifyingGlassIcon class="h-5 w-5 text-amber-600"/>
      <input 
        placeholder="Search by name" 
        class="rounded-full bg-transparent p-2 outline-none" 
        type="text" 
        v-model="filter"
      >
    </div>
    <TransitionGroup 
      name="fade" 
      tag="ul" 
      class="flex flex-col gap-5 md:flex-wrap md:flex-row w-full justify-center items-center"
    >
      <product-card v-for="product in filteredProducts" :key="product.id" :data="product" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  components: {
    ProductCard,
    MagnifyingGlassIcon
  },
  setup () {
    const filter = ref('')
    return {
      filter,
    }
  },
  computed: {
    filteredProducts () {
      const products = this.$shoppingStore.products.filter(product => {
        return product.name.includes(this.filter)
      })
      return products
    }
  }
})
</script>