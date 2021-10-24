<template>
  <div id="#app">
    <Header />
    <HomeBanner />
    <Events/>
    <Footer />
  </div>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore'
import Header from '../components/header/Header'
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
export default {
  components: {
    Events,
    Header,
    HomeBanner,
    Footer
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
