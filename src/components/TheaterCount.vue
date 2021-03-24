<template>
  <v-card class="pa-4" color="amber lighten-2">
    <p class="text-center">
      <v-icon x-large color="black "> mdi-filmstrip</v-icon>
    </p>

    <h3 class="text-center">{{ count }}</h3>
    <h5 class="text-center">Theater Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["theater"]),
    count() {
      if (!this.theater.events) {
        return 0;
      }
      return this.theater.meta.total;
    },
  },
};
</script>

<style></style>
