<template>
  <section class="events">
    <div class="app-container">
      <div class="events__grid">
        <event-card></event-card>
        <event-card></event-card>
        <event-card></event-card>
        <event-card></event-card>
        <event-card></event-card>
        <event-card></event-card>
      </div>
    </div>
  </section>

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
