<template>
  <v-app>
    <v-main>
      <date-picker />
    </v-main>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker";

export default {
  name: "App",

  components: {
    DatePicker,
  },

  data: () => ({
    //
  }),
};
</script>
