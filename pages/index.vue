<template>
  <h1>sdfsdfsd</h1>
</template>

<script>
export default {
  async created () {
    const db = await this.$fireStore
    console.log('dbdddd', this);
  }
}
</script>
