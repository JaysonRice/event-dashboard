<template>
  <v-card class="pa-2" color=" indigo lighten-2">
    <p class="text-center">
      <v-icon x-large color="white "> mdi-soccer </v-icon>
    </p>

    <h3 class="text-center white--text">{{ count }}</h3>
    <h5 class="text-center white--text">Sporting Events</h5>
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
