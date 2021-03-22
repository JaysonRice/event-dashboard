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
    startDate: null,
    endDate: null,
    sporting: {},
  },
  mutations: {
    setDate(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setSportingEvents(state, payload) {
      state.sporting = payload;
      state.sporting = payload;
    },
  },
  actions: {
    async getEventsForDateRange({ commit, dispatch }, range) {
      commit("setDate", range);
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
