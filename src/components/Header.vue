<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__list-item">
          <router-link class="header__list-link" to="/">Home</router-link>
        </li>
        <li class="header__list-item">
          <router-link class="header__list-link" to="/currencies">
            Currencies
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="header__select">
      <label class="header__select-label" for="default-currency">
        Default currency:
      </label>
      <select
        class="header__select-select"
        id="default-currency"
        @change="updateDefaultCurrency"
      >
        <option
          v-for="(currency, index) in currenciesList"
          :key="index"
          :selected="currency === defaultCurrency"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    currenciesList: {
      type: Array,
      default: () => [],
    },
    defaultCurrency: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateDefaultCurrency(e) {
      this.$emit("updateDefaultCurrency", e.target.value);
    },
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 8px;
}

.header__list-link {
  text-decoration: none;
}

.header__list-link.router-link-exact-active {
  color: #7f00e6;
  text-decoration: underline;
}

.header__list {
  display: flex;
  margin: 0;
  list-style: none;
  padding-left: 0;
}

.header__list-item {
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
}

.header__select {
  display: flex;
  align-items: center;
}

.header__select-label {
  margin-right: 12px;
}

.header__select-select {
  padding: 4px;
  background-color: #eae8ff;
  border-radius: 4px;
  border: 1px solid rgb(60, 4, 151);
}
</style>
