import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY = process.env.VUE_APP_SEATGEEK_KEY;

const apiURL = (
  type,
  dateRange
) => `https://api.seatgeek.com/2/events?taxonomies.name=${type}
&client_id=${API_KEY}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local
.gte=${dateRange.startDate}&datetime_local.lte=${dateRange.endDate}`;

export default new Vuex.Store({
  state: {
    sporting: {},
  },
  mutations: {
    setSportingEvents(state, payload) {
      state.sporting = payload;
    },
  },
  actions: {
    async getEventsForDateRange({ dispatch }, range) {
      dispatch("getSportingEvents", range);
    },

    async getSportingEvents({ commit }, range) {
      const url = apiURL("sports", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setSportingEvents", data);
      console.log(data);
    },
  },
  modules: {},
});
