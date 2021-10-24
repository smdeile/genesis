<template>
  <section class="events">
    <div class="app-container">
      <div class="events__grid">
        <EventCard v-if="cards.length > 0"
                   v-for="card in cards"
                   :card="card"
                   :key="card.id"
        />
      </div>

    </div>
  </section>

</template>

<script>
import EventCard from '../EventCard/EventCard'

export default {
  name: "Events",
  components: {
    EventCard,
  },
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.getCards(this.$store.state.events)
    console.log('cards: ', this.cards);
  },
  methods: {
    getCards(cardStore) {
      this.cards = cardStore
    }
  }
}
</script>

<style scoped lang="scss">
@import "Events";
</style>
