<template>
  <v-card>
    <h2 class="pa-3 purple--text text--lighten-2">Popular Theater Events</h2>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Event</th>
            <th class="text-left">Venue</th>
            <th class="text-left">Date</th>
            <th class="text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in topTheater" :key="event.id">
            <td>{{ event.short_title }}</td>
            <td>{{ event.venue.name }}</td>
            <td>{{ formatDate(event.datetime_local) }}</td>
            <td>
              <a :href="event.url" target="_blank">
                {{
                  formatPrices(
                    event.stats.lowest_price,
                    event.stats.highest_price
                  )
                }}
              </a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p v-if="!topTheater.length" class="text-center pa-5">
      <em>No available theater in the selected dates</em>
    </p>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { dateMixin, priceRangeMixin } from "../mixins/eventMixins";
export default {
  computed: {
    ...mapGetters(["topTheater"]),
  },
  mixins: [dateMixin, priceRangeMixin],
};
</script>

<style></style>
