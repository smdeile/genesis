<template>
  <div v-if="typeof card !== 'undefined'" class="event-card">
    <div class="event-card__img" @click="runToPage(card.id)">
      <img :src="cardImg"
           :alt="card.id"
      />
    </div>
    <div class="event-card__content">
      <h2 class="event-card__content-title">{{ card.name }}</h2>
      <div class="event-card__content-date">
        <div class="city">
          <span>{{ $t('city') }}</span>: <span>{{cardCity}}</span>
        </div>
        <div class="date">
          <span>{{ cardDate }}</span> / <span>{{ cardTime }}</span>
        </div>
      </div>
      <div class="event-card__space">
        <div class="event-card__description">{{ cardInfo }}</div>
        <div class="event-card__content-button">
          <button class="btn-primary" @click="runToPage(card.id)">{{ $t('more') }}</button>
        </div>
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
      return this.card.images[2].url
    },
    cardInfo() {
      if (typeof this.card.info !== 'undefined') {
        return `${this.card.info.slice(0, 87)}...`
      } else {
        return 'No information available on this event'
      }
    },
    cardCity() {
      return this.card['_embedded'].venues[0].city.name
    },
    cardDate() {
      return this.card.dates.start.localDate
    },
    cardTime() {
      return this.card.dates.start.localTime
    }
  }
}
</script>

<style scoped lang="sass">
  @import "assets/scss/index"
  @import "EventCard"
</style>
