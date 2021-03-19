<template>
  <v-date-picker
    v-model="searchRange"
    @change="selectDate"
    range
    full-width
    elevation="2"
    prev-icon="mdi-skip-previous"
    next-icon="mdi-skip-next"
  ></v-date-picker>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchRange: [],
    };
  },
  methods: {
    ...mapActions(["getEventsForDateRange"]),

    selectDate() {
      const range = {
        startDate: this.searchRange[0],
        endDate: this.searchRange[1],
      };
      this.getEventsForDateRange(range);
    },
  },
};
</script>

<style></style>
