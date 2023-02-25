<template>
  <div>
    <the-header />
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './components/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  },
  created () {
    this.$shoppingStore.fetchProducts()
  },
})
</script>