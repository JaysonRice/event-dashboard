import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY = process.env.VUE_APP_SEATGEEK_KEY;

const apiURL = (
  type,
  dateRange,
  city,
  usState
) => `https://api.seatgeek.com/2/events?taxonomies.name=${type}
&client_id=${API_KEY}&venue.city=${city}&venue.state=${usState}&sort=score.desc&datetime_local
.gte=${dateRange.startDate}&datetime_local.lte=${dateRange.endDate}`;

export default new Vuex.Store({
  state: {
    startDate: null,
    endDate: null,
    city: "Nashville",
    state: "TN",
    sporting: {},
    theater: {},
    concert: {},
  },
  mutations: {
    setDate(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setCity(state, payload) {
      state.city = payload;
    },
    setState(state, payload) {
      state.state = payload;
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

    async getSportingEvents({ state, commit }, range) {
      const city = state.city;
      const usState = state.state;
      const url = apiURL("sports", range, city, usState);
      const res = await fetch(url);
      const data = await res.json();
      commit("setSportingEvents", data);
    },
    async getTheaterEvents({ state, commit }, range) {
      const city = state.city;
      const usState = state.state;
      const url = apiURL("theater", range, city, usState);
      const res = await fetch(url);
      const data = await res.json();

      commit("setTheaterEvents", data);
    },
    async getConcertEvents({ state, commit }, range) {
      const city = state.city;
      const usState = state.state;
      const url = apiURL("concert", range, city, usState);
      const res = await fetch(url);
      const data = await res.json();

      commit("setConcertEvents", data);
    },
  },
  getters: {
    getCity(state) {
      return state.city;
    },
    topSporting(state) {
      if (!state.sporting.events) {
        return [];
      }

      const nonRepeatingEvents = [];

      state.sporting.events.forEach((e, i) => {
        if (e.short_title !== state.sporting.events[i + 1]?.short_title) {
          nonRepeatingEvents.push(e);
        }
      });
      return nonRepeatingEvents.slice(0, 3);
    },
    topConcerts(state) {
      if (!state.concert.events) {
        return [];
      }
      const nonRepeatingEvents = [];

      state.concert.events.forEach((e, i) => {
        if (e.short_title !== state.concert.events[i + 1]?.short_title) {
          nonRepeatingEvents.push(e);
        }
      });
      return nonRepeatingEvents.slice(0, 3);
    },

    topTheater(state) {
      if (!state.theater.events) {
        return [];
      }

      const nonRepeatingEvents = [];

      state.theater.events.forEach((e, i) => {
        if (e.short_title !== state.theater.events[i + 1]?.short_title) {
          nonRepeatingEvents.push(e);
        }
      });
      return nonRepeatingEvents.slice(0, 3);
    },
  },
  modules: {},
});
