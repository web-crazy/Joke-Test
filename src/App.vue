<template>
  <div id="app">
    <div id="nav">
      <hero-section />
    </div>
    <router-view/>
  </div>
</template>

<script>
import HeroSection from '@/components/hero-section/index'

export default {
  name: 'App',
  components: {
    HeroSection
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/common.scss";
</style>
