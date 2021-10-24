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
      <button v-if="!isHidden"
              class="btn-secondary events__show-more"
              @click="showMore">{{ $t('showMore') }}</button>
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
      cards: [],
      isHidden: false,
    }
  },
  mounted() {
    const storeCards = this.$store.state.events
    const slicedCards = storeCards.slice(0, this.cardsCount)
    this.getCards([...slicedCards])
    this.getCardsCount(storeCards)
  },
  methods: {
    getCardsCount(cardStore) {
      this.cardsLen = cardStore.length
    },
    getCards(cardStore) {
      this.cards = cardStore
    },
    showMore() {
      const start = this.cardsCount * this.pagStep
      this.pagStep = this.pagStep + 1
      const end = this.pagStep*this.cardsCount
      if (end >= this.cardsLen) this.isHidden = true
      this.cards = [
        ...this.cards,
        ...this.$store.state.events.slice(start, end)
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "Events";
</style>
