<template>

  <div class="event-card">
    <div class="event-card__img">
      <img src="https://exit.al/en/wp-content/uploads/sites/3/2020/03/banner-1.jpg" alt="">
    </div>
    <div class="event-card__content">
      <h2 class="event-card__content-title">
        На краю океана </h2>
      <div class="event-card__content-date">
        <span>30 июля 20: 00</span>
      </div>
      <div class="event-card__content-descr">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores aspernatur at consequuntur deleniti dignissimos doloribus</p>
      </div>
      <div class="event-card__content-button">
        <a href="#" class="btn-primary">Посмотреть</a>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "EventCard"
}
</script>

<style scoped lang="sass">

  @import "assets/scss/index"
  @import "EventCard"
</style>
