<template>
  <v-card class="pa-4" color="yellow lighten-2">
    <p class="text-center">
      <v-icon x-large color="indigo "> mdi-soccer </v-icon>
    </p>

    <h3 class="text-center indigo--text">{{ count }}</h3>
    <h5 class="text-center indigo--text">Sporting Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sporting"]),
    count() {
      if (!this.sporting.events) {
        return 0;
      }
      return this.sporting.meta.total;
    },
  },
};
</script>

<style></style>
