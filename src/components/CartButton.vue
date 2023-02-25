<template>
  <button class="bg-amber-600 rounded-full p-2 cursor-pointer w-min">
    <ShoppingCartIcon class="h-5 w-5 text-white"/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'CartButton',
  components: {
    ShoppingCartIcon
  },
})
</script>