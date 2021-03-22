export const dateMixin = {
  methods: {
    formatDate(dateString) {
      const d = new Date(dateString);
      const formatOptions = { day: "numeric", year: "numeric", month: "short" };
      return new Intl.DateTimeFormat("en-US", formatOptions).format(d);
    },
  },
};
