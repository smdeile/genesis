<template>
  <div id="#app">
    <Header />
  </div>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore'
import Header from '../components/header/Header'

export default {
  components: {
    Header
  },
  async created () {
    this.writeToFirestore(),
    this.readFromFirestore()
  },
  mounted() {
    console.log(this.$store.state.events);
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
