<template>
  <div>
    <Header/>
    <section class="event-inner">
      <div class="event-inner__banner">
        <div class="event-inner__banner-text">
          <h1>Brooklyn Nets vs. Phoenix Suns</h1>
        </div>
      </div>
      <div class="app-container">
        <div class="event-inner__content">
          <div class="content-wrap">
            <div class="content-wrap__city">
              Город: Brooklyn
            </div>
            <div class="content-wrap__date">
              2021-11-27 / 19:30:00
            </div>
          </div>
          <div class="content-descr">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
              dolorem eos ipsum maiores neque quo repellat? Delectus dolorum, ducimus eos
              harum hic inventore maxime natus optio perspiciatis voluptatibus! Amet.
            </p>

            <img src="https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg" alt="">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto,
              dolorem eos ipsum maiores neque quo repellat? Delectus dolorum, ducimus eos
              harum hic inventore maxime natus optio perspiciatis voluptatibus! Amet.
            </p>
          </div>
        </div>
      </div>

    </section>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/Footer/Footer";
  export default {
    components: {Footer, Header},
    data () {
      return {
      }
    },
    mounted () {
      console.log('this', this);
    },

    async asyncData({params, store, id}) {
      // store.commit('SET_ACTIVE_EVENT', params.id)
      const data = await store.dispatch('GET_CATALOG_ITEMS', { id: params.id })
      console.log('222222222222222222222222', data);
      return {id: params.id}
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index";
@import "../EventId";

</style>
