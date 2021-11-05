import Vue from "vue";
import Vuex from "vuex";
import { getLiveCurrencies } from "@/api";
import countryToCurrency from "country-to-currency";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencies: {},
    defaultCurrency: "",
  },
  mutations: {
    setCurrencies(state, payload) {
      state.currencies = payload;
    },
    setDefaultCurrency(state, payload) {
      state.defaultCurrency = payload;
    },
  },
  getters: {
    currenciesList(state) {
      const defaultCurrenciesList = Object.keys(state.currencies);

      // add USD if base value is USD because of strange API
      return state.defaultCurrency === "USD"
        ? ["USD", ...defaultCurrenciesList]
        : defaultCurrenciesList;
    },
  },
  actions: {
    async getCurrencies(context, baseCurrency) {
      return getLiveCurrencies(baseCurrency);
    },
    updateDefaultCurrency({ dispatch }) {
      const languagesArray = navigator.language.split("-");
      const countryCode =
        languagesArray.length > 1 // ru, ru-RU
          ? languagesArray[1]
          : languagesArray[0].toUpperCase();

      dispatch("updateCurrencies", countryToCurrency[countryCode]);
    },
    async updateCurrencies({ commit, dispatch }, currency = "") {
      commit("setDefaultCurrency", currency);

      const currencies = await dispatch("getCurrencies", currency);

      commit("setCurrencies", currencies);
    },
  },
});
