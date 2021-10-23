<template>
  <header :id="id" class="site-header">
    <div id="site-header-wrap" class="site-header__wrap">
      <div class="app-container">
        <div class="site-header-box">
          <LogoSite />
          <Navigation :isOpenMenu="isOpenMenu" :isAuth="isAuth" />
          <div class="site-header-box__settings">
            <div class="site-header-controls">
              <SwitchLang class="site-header-controls__switcher" />
              <BtnLogout v-if="isAuth" />
              <BtnLogin v-else />
              <BtnAccount v-if="isAuth" class="site-header-controls__order" />
              <BtnSignUp v-else class="site-header-controls__order" />
            </div>
            <BtnBurger :handleClick="toggleMenu"
                       :isOpenMenu="isOpenMenu"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoSite from '../ui/logos/site/LogoSite'
  import BtnBurger from '../ui/buttons/burger/BtnBurger'
  import Navigation from '../parts/navigation/Navigation'
  import SwitchLang from '../ui/switchers/lang/SwitchLang'
  import BtnLogout from '../ui/buttons/logout/BtnLogout'
  import BtnLogin from '../ui/buttons/login/BtnLogin'
  import BtnAccount from '../ui/buttons/account/BtnAccount'
  import BtnSignUp from '../ui/buttons/signup/BtnSignUp'

  export default {
    name: 'Header',
    data() {
      return {
        isOpenMenu: false,
        isAuth: false,
      }
    },
    components: {
      BtnSignUp,
      BtnAccount,
      BtnLogout,
      BtnLogin,
      SwitchLang,
      LogoSite,
      BtnBurger,
      Navigation,
    },
    props: {
      id: {
        type: String,
        default: 'site-header',
      }
    },
    methods: {
      toggleMenu() {
        this.isOpenMenu = !this.isOpenMenu;
      }
    }
  }
</script>

<style lang="scss">
  @import "Header";
</style>
