<template>
  <a :id="id"
     :href="href"
     class="btn-login">
    {{ $t('login') }}
  </a>
</template>

<script>
  export default {
    name: 'BtnLogin',
    props: {
      id: {
        type: String,
        default: 'btn-login',
      },
      href: {
        type: String,
        default: '#',
      }
    }
  }
</script>

<style lang="scss">
  @import "BtnLogin";
</style>
