<template>
  <div>
    <a 
      v-if="!onClick"
      id="btn-logout"
      href="url"
      class="btn-primary header-menu-link__btn"
    >    
      {{ $t('registration') }}
    </a>
    <button
      v-if="onClick"
      @click="onClick"
      id="btn-logout"
      class="btn-primary header-menu-link__btn"
    >
      {{ $t('registration') }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'BtnSignUp',
    props: {
      url: '',
      onClick: {
        default: null
      }
    }
  }
</script>

<style lang="scss">
  @import "BtnSignUp";
</style>
