<template>
  <div>
d/g,d'fg
  </div>
</template>

<script>
  export default {
    async created () {
      const db = await this.$fireStore
      console.log('dbdddd', db, this.$route.params.id);
    },
    async asyncData(config, { params, redirect }) {
      console.log('dbd111111111111ddd', params, config);
    }
  }
</script>

<style lang="scss" scoped>

</style>