<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
  export default {
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

</style>