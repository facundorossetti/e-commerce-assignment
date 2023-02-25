<template>
  <header class="fixed top-0 w-full shadow-lg py-4 bg-white z-50">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-4">
      <button 
        v-if="!isHomeRoute"
        class="bg-amber-600 font-bold text-white rounded-full p-2 uppercase" 
        @click="$router.push('/')"
      >
        <ArrowLeftIcon class="h-5 w-5"/>
      </button>
      <h1 
        class="text-center text-2xl font-bold uppercase absolute left-0 right-0 pointer-events-none"
      >
        Ceeyu
      </h1>
      <cart-button 
        :class="[{'badgedButton': cartLength}, 'ml-auto']"
        :data-badge="cartLength"
        @click="$router.push('/checkout')"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CartButton from './CartButton.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'TheHeader',
  components: {
    CartButton,
    ArrowLeftIcon
  },
  computed: {
    cartLength () {
      return this.$shoppingStore.getCartLength
    },
    isHomeRoute () {
      return this.$route.name === 'home'
    }
  }
})
</script>

<style lang="scss" scoped>
.badgedButton {
  position: relative;
  &::after {
    content: attr(data-badge);
    position: absolute;
    font-size: 12px;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    @apply bg-amber-300;
  }
}
</style>