<template>
  <v-app>
    <v-main>
      <app-header />
      <v-container>
        <date-picker />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DatePicker from "./components/DatePicker";

export default {
  name: "App",

  components: {
    DatePicker,
    AppHeader,
  },

  data: () => ({
    //
  }),
};
</script>
