<template>
  <main class="home">
    <CurrencyForm
      class="home__form"
      :currenciesList="currenciesList"
      :defaultCurrency="defaultCurrency"
      @submit="calculate"
    />
    <p v-if="result" class="home__result">Result: {{ result }}</p>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {
    CurrencyForm: () => import("@/components/CurrencyForm.vue"),
  },
  data() {
    return {
      result: null,
    };
  },
  computed: {
    currenciesList() {
      return this.$store.getters.currenciesList;
    },
    defaultCurrency() {
      return this.$store.state.defaultCurrency;
    },
  },
  methods: {
    async calculate({ amount, from, to }) {
      const currencies = await this.$store.dispatch("getCurrencies", from);

      this.result = new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency: to,
        maximumFractionDigits: 2,
      }).format(amount * currencies[to]);
    },
  },
};
</script>

<style>
.home {
  padding: 40px 0;
}

.home__form {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.home__result {
  font-size: 24px;
  font-weight: bold;
}
</style>
