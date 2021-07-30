<template>
  <div id="app" class="main">
      <welcome-page />
      <router-link to=''>
      </router-link>
  </div>
</template>

<script>
import WelcomePage from '@/components/WelcomePage.vue'
export default {
    name: 'home-view',
    components: {
        WelcomePage
        
    }

}
</script>

<style>

</style>