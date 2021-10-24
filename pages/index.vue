<template>
  <div>
    <Header/>
    <HomeBanner/>
    <Events/>
    <PopupLogin v-if="$store.state.isPopupSignIn"/>
    <PopupSignup v-if="$store.state.isPopupSignUp"/>
    <Footer/>
  </div>
</template>

<script>
  import Events from '../components/Events/Events';
  import Header from '../components/header/Header';
  import PopupLogin from '../components/parts/popups/login/PopupLogin';
  import PopupSignup from '../components/parts/popups/PopupSignUp';
  import HomeBanner from '../components/HomeBanner/HomeBanner';
  import Footer from '../components/Footer/Footer';


  export default {
    components: {
      Events,
      Header,
      PopupLogin,
      PopupSignup,
      HomeBanner,
      Footer
    },
    data() {
      return {};
    },
    async created() {
      this.writeToFirestore(), this.readFromFirestore();
    },
    mounted() {
      console.log(this.$store.state.events);
    },

    methods: {
      onSignIn() {
        this.$store.commit(SET_IS_POPUP('signIn'));
      },
      onSignUp() {
        this.$store.commit(SET_IS_POPUP('signUp'));
      }
    },
    async created() {
    }
  };
</script>

<style lang="scss">
  @import "../assets/scss/index";
</style>
