<template>
  <div>

    <setion class="home-banner">
      <div class="home-banner__text">
        <h1>Fast events</h1>
        <p>Узнавайте самые актуальные спортивные события на нашем ресурсе</p>
        <a class="btn-primary"> Learn More </a>

        <div @click="scrollElement('events')" class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </setion>


    <div id="events" class="app-title">
      <h1> Ближайшие мероприятия</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner',
    methods: {
      scrollElement(id) {
        const element = document.getElementById(id)
        const headerOffset = 78
        const elementPosition = element.getBoundingClientRect().top
        let offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "HomeBanner";
</style>
