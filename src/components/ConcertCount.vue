<template>
  <v-card class="pa-4" color="yellow lighten-2">
    <p class="text-center">
      <v-icon x-large color="indigo"> mdi-music</v-icon>
    </p>

    <h3 class="text-center indigo--text">{{ count }}</h3>
    <h5 class="text-center indigo--text">Concerts Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["concert"]),
    count() {
      if (!this.concert.events) {
        return 0;
      }
      return this.concert.meta.total;
    },
  },
};
</script>

<style></style>
