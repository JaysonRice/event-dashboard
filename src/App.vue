<template>
  <v-app>
    <v-main>
      <app-header />
      <v-container>
        <v-row class="mb-6">
          <v-col>
            <sports-count />
          </v-col>
          <v-col>
            <theater-count />
          </v-col>
          <v-col>
            <concert-count />
          </v-col>
        </v-row>

        <date-picker />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import ConcertCount from "./components/ConcertCount";
import DatePicker from "./components/DatePicker";
import SportsCount from "./components/SportsCount";
import TheaterCount from "./components/TheaterCount";

export default {
  name: "App",

  components: {
    DatePicker,
    AppHeader,
    SportsCount,
    TheaterCount,
    ConcertCount,
  },

  data: () => ({
    //
  }),
};
</script>
