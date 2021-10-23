<template>
  <a :id="id"
     :href="href"
     class="btn-login">
    {{ text }}
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
      text: {
        type: String,
        default: 'Log In',
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
