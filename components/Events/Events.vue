<template>
  <div class="events container">
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>
  </div>

</template>

<script>
import EventCard from "../EventCard/EventCard";
export default {
  name: "Events",
  comments: EventCard
}
</script>

<style scoped lang="scss">

@import "Events";

</style>
