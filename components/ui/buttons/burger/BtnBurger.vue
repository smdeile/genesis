<template>
  <button id="header-burger" :class="isOpenMenu ? 'btn-burger active' : 'btn-burger'" @click="handleClick">
    <span class="btn-burger__line top"></span>
    <span class="btn-burger__line middle"></span>
    <span class="btn-burger__line bottom"></span>
  </button>
</template>

<script>
  export default {
    name: 'BtnBurger',
    props: {
      isOpenMenu: {
        type: Boolean,
        default: true,
      },
      handleClick: {
        type: Function
      }
    },
  }
</script>

<style lang="scss">
  @import "BtnBurger";
</style>
