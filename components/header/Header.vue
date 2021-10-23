<template>
  <header :id="id" class="site-header">
    <div id="site-header-wrap" class="site-header__wrap">
      <div class="container">
        <div class="site-header-box">
          <LogoSite />
          <Navigation :isOpenMenu="isOpenMenu" />
          <div class="site-header-box__settings">
            <div class="site-header-controls">
              <!-- Buttons   -->
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

  export default {
    name: 'Header',
    data() {
      return {
        isOpenMenu: false,
      }
    },
    components: {
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
