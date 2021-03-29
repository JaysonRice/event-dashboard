<template>
  <v-app-bar app class="white--text indigo">
    <h1>Event Finder</h1>

    <v-spacer></v-spacer>
    <h3 v-if="renderDate">
      {{ formatDate(startDate) }} - {{ formatDate(endDate) }}
    </h3>
    <h3 v-else>Select a date range</h3>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import { dateMixin } from "../mixins/eventMixins";

export default {
  mixins: [dateMixin],
  computed: {
    ...mapState(["startDate", "endDate"]),

    renderDate() {
      return this.startDate ? true : false;
    },
  },
};
</script>

<style></style>
