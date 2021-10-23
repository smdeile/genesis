<template>
  <h1 class="container">
    <div class="container__block">Hello work</div>
  </h1>

</template>

<script>
export default {
  created () {
    console.log(this.$fire)
  }
}
</script>

<style lang="scss">
  @import "assets/scss/index";
 .container {
   &__block {
     @include flex(row, center, center);
   }
 }
</style>
