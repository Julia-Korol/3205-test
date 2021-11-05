<template>
  <table class="currencies-table">
    <thead class="currencies-table__thead">
      <tr>
        <th class="currencies-table__thead-name">Currency</th>
        <th class="currencies-table__thead-value">Value</th>
      </tr>
    </thead>
    <tbody class="currencies-table__tbody">
      <template v-if="Object.values(tableData).length">
        <tr v-for="(value, name) in tableData" :key="name">
          <td class="currencies-table__tbody-name">{{ name }}</td>
          <td class="currencies-table__tbody-value">{{ value }}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="2">No data for the table</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CurrenciesTable",
  props: {
    tableData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
.currencies-table {
  margin: 0 auto;
}

.currencies-table__thead th {
  padding: 14px 12px;
}

.currencies-table__tbody td {
  padding: 10px 12px;
}

.currencies-table__thead-name {
  text-align: left;
}

.currencies-table__thead-value {
  text-align: right;
}

.currencies-table__tbody-value {
  text-align: right;
}

.currencies-table__tbody-name {
  text-align: left;
}
</style>
