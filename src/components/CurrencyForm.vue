<template>
  <form class="currency-form" @submit.prevent="$emit('submit', formData)">
    <div>
      <label class="sr-only" for="amount">Amount</label>
      <input
        class="currency-form__input"
        required
        type="number"
        name="amount"
        id="amount"
        min="1"
        v-model.number="formData.amount"
      />
    </div>
    <div>
      <label class="sr-only" for="from-currency">From currency</label>
      <select
        class="currency-form__select"
        id="from-currency"
        v-model="formData.from"
        required
      >
        <option
          v-for="(currency, index) in currenciesList"
          :key="index"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>

      <label class="currency-form__label" for="to-currency">to</label>
      <select
        class="currency-form__select"
        id="to-currency"
        v-model="formData.to"
        required
      >
        <option
          v-for="(currency, index) in currenciesList"
          :key="index"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>
    <button class="button" type="submit">Convert</button>
  </form>
</template>

<script>
export default {
  name: "CurrencyForm",
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
  data() {
    return {
      formData: {
        amount: 1,
        from: "",
        to: "",
      },
    };
  },
  mounted() {
    this.formData.from = this.defaultCurrency;
  },
};
</script>

<style>
.currency-form {
  display: flex;
  align-items: center;
}

.currency-form__label {
  font-size: 18px;
}

.currency-form__input,
.currency-form__select {
  padding: 8px;
  font-size: 18px;
  max-width: 80px;
}

.currency-form__label,
.currency-form__input,
.currency-form__select {
  margin: 0 8px;
}

.button {
  padding: 9px 16px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #3c0497;
  font-weight: bold;
  color: #3c0497;
}
</style>
