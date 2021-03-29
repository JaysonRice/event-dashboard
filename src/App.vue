<template>
  <v-app>
    <v-main>
      <app-header />
      <v-container>
        <v-row>
          <v-col sm="12" lg="5">
            <location-selection />
            <date-picker />
          </v-col>
          <v-col sm="12" lg="7">
            <v-row class="mb-4">
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
            <sports-table class="mb-4" />
            <theater-table class="mb-4" />
            <concert-table class="mb-4" />
          </v-col>
        </v-row>
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
import SportsTable from "./components/SportsTable";
import ConcertTable from "./components/ConcertTable";
import TheaterTable from "./components/TheaterTable";
import LocationSelection from "./components/LocationSelection";

export default {
  name: "App",

  components: {
    DatePicker,
    AppHeader,
    SportsCount,
    TheaterCount,
    ConcertCount,
    SportsTable,
    ConcertTable,
    TheaterTable,
    LocationSelection,
  },

  data: () => ({
    //
  }),
};
</script>
