<template>
  <Header />
</template>

<script>
  import Header from '../components/header/Header'

  export default {
    components: {
      Header,
    },
    async created() {
      const db = await this.$fireStore
    }
  }
</script>
