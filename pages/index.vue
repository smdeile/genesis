<template>
  <div>
    <h1>sdfsdfsd</h1>
    <Events/>
  </div>

</template>

<script>
import Events from "../components/Events/Events";
export default {
  components: {
    Events
  },
  async created () {
    const db = await this.$fireStore
    console.log('dbdddd', this);
  }
}
</script>

<style >


.events{
  display: flex;
  flex-wrap: wrap;
}
</style>
