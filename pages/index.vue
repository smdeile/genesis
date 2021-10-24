<template>
  <div id="#app">
    <Header />
    <PopupLogin />
  </div>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore'
import Header from '../components/header/Header'
import PopupLogin from '../components/parts/popups/login/PopupLogin'

export default {
  components: {
    Header,
    PopupLogin,
  },
  async created () {
    this.writeToFirestore(),
    this.readFromFirestore()
  },
  mounted() {
    console.log(this.$store);
  },

  methods: {

  },
  async created () {

  }
}
</script>

<style lang="scss">
  @import "../assets/scss/index";
</style>
