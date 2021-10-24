<template>
  <div id="#app">
    <Header />
    <Events />
  </div>
</template>

<script>
import Events from '../components/Events/Events'
import Header from '../components/header/Header'

export default {
  components: {
    Header,
    Events
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
