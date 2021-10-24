<template>
  <div>
    <a 
      v-if="!onClick"
      id="btn-logout"
      href="url"
      class="btn-logout"
    >{{ $t('logout') }}</a>
    <button
      v-if="onClick"
      @click="onClick"
      id="btn-logout"
      class="btn-logout"

    >
      {{ $t('logout') }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'BtnLogout',
    props: {
      url: '',
      onClick: {
        default: null
      }
    }
  }
</script>

<style lang="scss">
  @import "BtnLogout";
</style>
