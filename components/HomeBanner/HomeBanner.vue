<template>
  <div>

    <setion class="home-banner">
      <div class="home-banner__text">
        <h1> Fast Event</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco. </p>

        <div @click="scrollElement('events')" class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </setion>


    <div id="events"  class="app-title">
      <h1> Ближайшие мероприятия</h1>
    </div>

  </div>




</template>

<script>
export default {
  name: "HomeBanner",
  methods: {
    scrollElement(id) {
      let element = document.getElementById(id);
      let headerOffset = 78;
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped lang="scss">

  @import "HomeBanner";

</style>
