<template>
  <div class="ProductCard gap-4 relative" :class="{'min-h-[300px]': showDetails}">
    <XMarkIcon 
      v-if="hideCartButton" 
      class="absolute h-6 w-6"
      @click="$shoppingStore.removeProductFromCart(data)" 
    />
    <transition name="fade">
      <component 
        :is="ArrowComponent" 
        class="absolute right-4 h-8 w-8 text-slate-400 cursor-pointer"
        @click="showDetails = !showDetails"
      />
    </transition>
    <h3 class="text-center text-xl font-medium uppercase">{{ data.name }}</h3>
    <h4 class="text-center text-md">{{ data.details?.company }}</h4>
    <p v-if="showDetails" class="text-center text-sm">{{ data.details?.dob }}</p>
    <p v-if="showDetails" class="mt-auto text-center text-sm">{{ data.details?.description }}</p>
    <div class="flex justify-center items-center gap-4">
      <p class="text-amber-600 text-xl font-medium uppercase">$ {{ data.details?.price }}</p>
      <cart-button v-if="!hideCartButton" @click="$shoppingStore.addProductToCart(data)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CartButton from './CartButton.vue'
import { XMarkIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'ProductCard',
  components: {
    CartButton,
    XMarkIcon,
    ArrowDownCircleIcon,
    ArrowUpCircleIcon
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    hideCartButton: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {
      showDetails: ref(false)
    }
  },
  computed: {
    ArrowComponent () {
      return this.showDetails ? ArrowUpCircleIcon : ArrowDownCircleIcon
    }
  }
})
</script>

<style lang="scss" scoped>
.ProductCard {
  @apply flex flex-col justify-between border border-gray-300 min-h-[0] rounded-md w-full max-w-[400px] p-4 shadow hover:shadow-lg transition-all duration-300 hover:border-gray-400;
}
</style>