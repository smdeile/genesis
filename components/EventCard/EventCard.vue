<template>
  <div v-if="typeof card !== 'undefined'" class="event-card">
    <div class="event-card__img">
      <img :src="cardImg" :alt="card.id" />
    </div>
    <div class="event-card__content">
      <h2 class="event-card__content-title">{{ card.name }}</h2>
      <div class="event-card__content-date">
        <span>New York</span>
        <span>30 июля 20: 00</span>
      </div>
      <div class="event-card__content-descr">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores aspernatur at consequuntur deleniti dignissimos doloribus</p>
      </div>
      <div class="event-card__content-button">
        <button class="btn-primary" @click="runToPage(card.id)">{{ $t('more') }}</button>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "EventCard",
  props: {
    card: Object,
  },
  methods: {
    runToPage(id) {
      this.$router.push(`/event/${id}`)
    }
  },
  computed: {
    cardImg() {
      return this.card.images[0].url
    }
  }
}
</script>

<style scoped lang="sass">
  @import "assets/scss/index"
  @import "EventCard"
</style>
