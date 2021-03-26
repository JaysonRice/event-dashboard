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
    theater: {},
    concert: {},
  },
  mutations: {
    setDate(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setSportingEvents(state, payload) {
      state.sporting = payload;
    },
    setTheaterEvents(state, payload) {
      state.theater = payload;
    },
    setConcertEvents(state, payload) {
      state.concert = payload;
    },
  },
  actions: {
    async getEventsForDateRange({ commit, dispatch }, range) {
      commit("setDate", range);
      dispatch("getSportingEvents", range);
      dispatch("getTheaterEvents", range);
      dispatch("getConcertEvents", range);
    },

    async getSportingEvents({ commit }, range) {
      const url = apiURL("sports", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setSportingEvents", data);
    },
    async getTheaterEvents({ commit }, range) {
      const url = apiURL("theater", range);
      const res = await fetch(url);
      const data = await res.json();
      debugger;
      commit("setTheaterEvents", data);
    },
    async getConcertEvents({ commit }, range) {
      const url = apiURL("concert", range);
      const res = await fetch(url);
      const data = await res.json();

      commit("setConcertEvents", data);
    },
  },
  getters: {
    topSporting(state) {
      if (!state.sporting.events) {
        return [];
      }

      return state.sporting.events.slice(0, 3);
    },
    topConcerts(state) {
      if (!state.concert.events) {
        return [];
      }

      return state.concert.events.slice(0, 3);
    },
    topTheater(state) {
      if (!state.theater.events) {
        return [];
      }

      return state.theater.events.slice(0, 3);
    },
  },
  modules: {},
});
