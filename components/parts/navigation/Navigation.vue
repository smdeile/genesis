
<template>
  <nav id="header-menu" :class="isOpenMenu ? 'header-menu active' : 'header-menu'">
    <div class="header-menu-controls">
      <SwitchLang />
      <BtnLogout v-if="isAuth" />
      <BtnLogin v-else />
    </div>
    <ul id="menu-en-header-menu" class="header-menu-list">
      <li v-for="menu in menus" :key="menu.name" class="menu-item">
        <a :href="menu.link">{{ $t(menu.name) }}</a>
      </li>
    </ul>
    <div class="header-menu-link">
      <BtnAccount v-if="isAuth" />
      <BtnSignUp v-else />
    </div>
  </nav>
</template>

<script>
  import SwitchLang from '../../ui/switchers/lang/SwitchLang'
  import BtnLogin from '../../ui/buttons/login/BtnLogin'
  import BtnLogout from '../../ui/buttons/logout/BtnLogout'
  import BtnSignUp from '../../ui/buttons/signup/BtnSignUp'
  import BtnAccount from '../../ui/buttons/account/BtnAccount'

  export default {
    name: 'Navigation',
    data() {
      return {
        menus: [
          {
            link: '#',
            name: 'home',
          },
          {
            link: '#',
            name: 'news',
          }
        ],
      }
    },
    components: {
      SwitchLang,
      BtnLogin,
      BtnLogout,
      BtnSignUp,
      BtnAccount,
    },
    props: {
      isOpenMenu: {
        type: Boolean,
        default: false,
      },
      isAuth: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss">
  @import "Navigation";
</style>
