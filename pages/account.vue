<template>
  <div class="acc">
    <h1>
      {{$store.state.loggedUser.mail}}
    </h1>
    <div class="acc_img"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
.acc {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &_img {
    width: 300px;
    height: 300px;
    background-image: url('/img/avatar.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>