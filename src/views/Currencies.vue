<template>
  <main class="currencies container">
    <h1 class="currencies__title">
      1 {{ defaultCurrency }} to another currencies
    </h1>
    <CurrenciesTable :tableData="currencies" />
  </main>
</template>

<script>
export default {
  name: "Currencies",
  components: {
    CurrenciesTable: () => import("@/components/CurrenciesTable.vue"),
  },
  computed: {
    currencies() {
      return this.$store.state.currencies;
    },
    defaultCurrency() {
      return this.$store.state.defaultCurrency;
    },
  },
};
</script>

<style>
.currencies {
  padding: 40px 0;
}

.currencies__title {
  font-size: 24px;
  margin-bottom: 40px;
}
</style>
