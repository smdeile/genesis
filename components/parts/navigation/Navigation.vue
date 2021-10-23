<template>
  <nav id="header-menu" :class="isOpenMenu ? 'header-menu active' : 'header-menu'">
    <div class="header-menu-controls">
      <SwitchLang />
      <BtnLogin />
    </div>
    <ul id="menu-en-header-menu" class="header-menu-list">
      <li class="menu-item">
        <a href="#">Home</a>
      </li>
      <li class="menu-item">
        <a href="#">News</a>
      </li>
    </ul>
    <div class="header-menu-link">
      <!-- Buttons -->
    </div>
  </nav>
</template>

<script>
  import SwitchLang from '../../ui/switchers/lang/SwitchLang'
  import BtnLogin from '../../ui/buttons/login/BtnLogin'

  export default {
    name: 'Navigation',
    components: {
      SwitchLang,
      BtnLogin,
    },
    props: {
      isOpenMenu: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss">
  @import "Navigation";
</style>
