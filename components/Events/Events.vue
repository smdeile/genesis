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
    <div class="app-container">
      <button class="btn-secondary events__show-more" @click="showMore">Show more events</button>
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
      pagStep: 1,
      cardsLen: 0,
      cardsCount: 6,
      cards: []
    }
  },
  mounted() {
    this.getCards(this.$store.state.events)
    console.log('cards: ', this.cards);
    this.getCardsCount(this.$store.state.events)
    console.log('cards len: ', this.cardsLen);
  },
  methods: {
    getCardsCount(cardStore) {
      this.cardsLen = cardStore.length
    },
    getCards(cardStore) {
      this.cards = cardStore
    },
    showMore() {
      this.pagStep = this.pagStep + 1;
      console.log('PAGINATION STEP: ', this.pagStep)
    }
  }
}
</script>

<style scoped lang="scss">
@import "Events";
</style>
