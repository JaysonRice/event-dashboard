<template>
  <v-row class="mt-3">
    <v-col class="align-center">
      <v-text-field
        background-color="yellow lighten-2"
        label="City"
        v-model="city"
        rounded
        filled
        @change="changeCity"
      ></v-text-field>
    </v-col>
    <v-col class="align-center">
      <v-select
        v-model="select"
        :items="states"
        label="State"
        persistent-hint
        single-line
        @change="changeState"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
// import stateList from "./StateList";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      city: "Nashville",
      select: "TN",
      states: [
        "AK",
        "AL",
        "AR",
        "AS",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DC",
        "DE",
        "FL",
        "GA",
        "GU",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NM",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VI",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY",
      ],
    };
  },
  methods: {
    ...mapMutations(["setCity", "setState"]),
    changeCity() {
      this.setCity(this.city);
    },
    changeState() {
      this.setState(this.select);
    },
  },
};
</script>

<style></style>
