<template>
  <nuxt-link to="account" class="btn-primary header-menu-link__btn">
    {{ $t('account') }}
  </nuxt-link>
</template>

<script>
  export default {
    name: 'BtnAccount',
  }
</script>

<style lang="scss">
  @import "BtnAccount";
</style>
