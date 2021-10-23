<template>
  <a :href="href" class="site-logo">
    Fast Events
  </a>
</template>

<script>
  export default {
    name: 'LogoSite',
    props: {
      href: {
        type: String,
        default: '/',
      }
    }
  }
</script>

<style lang="scss">
  @import "LogoSite";
</style>
