<template>
  <div :href="href" class="site-logo">Fast Events</div>
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
