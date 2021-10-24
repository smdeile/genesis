<template>
  <div>
    <Header/>
    <section class="event-inner">
      <div class="event-inner__banner">
        <div class="event-inner__banner-text">
          <h1>{{ getName }}</h1>
        </div>
      </div>
      <div class="app-container">
        <div class="event-inner__content">
          <div class="content-wrap">
            <div class="content-wrap__city">
              {{ $t('city') }}: {{ getCity }}
            </div>
            <div class="content-wrap__date">
              {{ getDate }} / {{ getTime }}
            </div>
          </div>
          <div class="content-descr">
            <p>
              {{ getName }} :
              {{ $store.state.activeEvent.info }}
            </p>
            <img :src="getImg" :alt="$store.state.activeEvent.id">
            <p>
             {{ $store.state.activeEvent.info }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../components/header/Header'
  import Footer from '../../components/Footer/Footer'

  export default {
    components: {
      Footer,
      Header,
    },
    computed: {
      getName() {
        return this.$store.state.activeEvent.name
      },
      getImg() {
        return this.$store.state.activeEvent.images[1].url
      },
      getCity() {
        return this.$store.state.activeEvent['_embedded'].venues[0].city.name
      },
      getDate() {
        return this.$store.state.activeEvent.dates.start.localDate
      },
      getTime() {
        return this.$store.state.activeEvent.dates.start.localTime
      }
    },
    async asyncData({params, store, id}) {
<<<<<<< HEAD
      // store.commit('SET_ACTIVE_EVENT', params.id)
      const data = await store.dispatch('GET_CATALOG_ITEM', { id: params.id })
      console.log('222222222222222222222222', data);
      return {id: params.id}
=======
      const data = await store.dispatch('GET_CATALOG_ITEMS', { id: params.id })
      return { id: params.id }
>>>>>>> a76179b4b7b84690194544dd5542bcd82900f7db
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/index";
  @import "../EventId";
</style>
