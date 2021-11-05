<template>
  <div id="app">
    <Header
      :currenciesList="currenciesList"
      :defaultCurrency="defaultCurrency"
      @updateDefaultCurrency="updateDefaultCurrency"
    />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
    updateDefaultCurrency(currency) {
      this.$store.dispatch("updateCurrencies", currency);
    },
  },
  mounted() {
    this.$store.dispatch("updateDefaultCurrency");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.container {
  max-width: 1200px;
  width: 96%;
  margin: 0 auto;
}
</style>
