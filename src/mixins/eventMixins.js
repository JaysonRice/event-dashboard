export const dateMixin = {
  methods: {
    formatDate(dateString) {
      const d = new Date(dateString);
      const formatOptions = { day: "numeric", month: "short" };
      return new Intl.DateTimeFormat("en-US", formatOptions).format(d);
    },
  },
};

export const priceRangeMixin = {
  methods: {
    formatPrices(min, max) {
      if (!min || !max) {
        return "Unknown";
      }
      return `$${min} - $${max}`;
    },
  },
};
